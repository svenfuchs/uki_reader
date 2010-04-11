include('../controller.js');

uki_reader.controller.main = function() {
  var main        = uki_reader.layout.main().attachTo(window, '1000 1000');
  var feeds_list  = uki('Feeds', main);
  var posts_table = uki('Posts', main);

  uki_reader.model.Feed.load(feeds_list[0]);

  feeds_list.bind('selection', function() {
    // load the feed's posts into posts_table
    var feed = this.selectedRow();
    if (feed) {
      uki('ScrollPane', posts_table).attr('scrollTop', 0);
      posts_table[0].feed(feed).selectedIndexes(feed.posts().length ? [0] : []).lastClickIndex(0).focus();

      if (!feed['loaded.posts']) {
        feed.loadPosts(function() {
          if (feed == feeds_list[0].selectedRow()) {
            posts_table[0].feed(this).selectedIndexes(this.posts().length ? [0] : []).lastClickIndex(0).focus();
          }
        });
      }
    }
  });

  var meta    = uki('#meta', main);
  var content = uki('#content', main);
  var fields = {};
  uki('#meta [field]', main).each(function() { fields[this.field] = this; });

  uki('List', posts_table).bind('selection', function() {
    var indexes = this.selectedIndexes();
    meta.visible(false);
    content.visible(false);

    // load post meta data and content
    if (indexes.length == 1) {
      var post = this.selectedRows()[0];
      if (!post) return;

      fields.title.html(post.title() || '');
      fields.from.text(post.from() || '');
      fields.author.text(post.author() || '');
      fields.updated.text(new Date(post.updated() * 1000) || '');
      meta.visible(true).layout();

      content.html(post.content() || '')
      content.visible(true).resizeToContents('height').layout();
      
      if (post.unread()) {
        post.markAsRead(function() { posts_table[0].redrawCell(indexes[0], 0); });
      }
    }
  });
}