include('../model.js');

uki_reader.model.Feed = uki.newClass(uki.data.Model, function(Base) {
  this.init = function(values) {
    this._posts = [];
    this._sort = 'updated';
    Base.init.call(this, values);
  };

  uki.data.model.addFields(this, ['id', 'title', 'categories', 'sortid', 'firstitemsec', 'posts', 'unread', 'sort']);

  // http://www.google.com/reader/api/0/unread-count?all=true
  // http://www.google.com/reader/atom/feed/ + [Feed URL]
  // http://www.google.com/reader/atom/user/[user id]/pref/com.google/subscriptions

  this.loadPosts = uki.data.model.newLoader('posts', {
    url: function() {
      return 'http://www.google.com/reader/api/0/stream/contents/' + encodeURIComponent(this.id());
    },
    data: function() {
      return { from: this.posts().length ? this.posts()[this.posts().length - 1].id() : '-1' };
    },
    setter: function(data) {
      data = data || [];
      var posts = uki.map(data['items'], function(post) { return new uki_reader.model.Post(post); });

      if (!this._posts.length) {
        this._unread = 0;
      } else {
        this._updateCounts();
      }

      this.addPosts(this.posts().length, posts);
    },
    ajaxOptions: { dataType: 'json' }
  });

  this._sortBy = function(fieldName) {
    this._posts = this._posts.sort(function(b, a) {
      return a[fieldName]()*1 - b[fieldName]()*1;
    });
  };

  this.addPosts = function(position, posts) {
    this.posts(posts);
    this._unreadChangeHandler = this._unreadChangeHandler || uki.proxy(this._unreadChanged, this);
    for (var i = posts.length - 1; i >= 0; i--){
      posts[i].feed(this);
      posts[i].bind('change.unread', this._unreadChangeHandler);
    };
    if (this.sort()) this._sortBy(this.sort());
    this.trigger('change.posts');
    this._updateCounts(posts);
  };

  this._updateCounts = function(newPosts) {
    var posts = uki.grep(newPosts || this._posts, function(post) { return post.unread(); });
    this.unread(posts.length + (newPosts ? this.unread() : 0));
  };

  this._unreadChanged = function() {
    this.unread(this.unread() - 1);
  };
});

uki_reader.model.Feed.load = function(target) {
  var url = 'http://www.google.com/reader/atom/user/12840828268072070083/pref/com.google/subscriptions';
  var result = uki.get(url, { async: false }, function(data, status, xhr) {
    var feeds = uki.map(data.childNodes[0].childNodes, function() {
      if(this.nodeName == 'entry') {
        var data = {
          id:      this.getElementsByTagName('id')[0].getAttribute('gr:original-id'),
          title:   this.getElementsByTagName('title')[0].textContent,
          updated: this.getElementsByTagName('updated')[0].textContent
        };
        return new uki_reader.model.Feed(data);
      }
    });
    target.feeds(feeds);
  })
}