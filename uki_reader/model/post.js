include('../model.js');

uki_reader.model.Post = uki.newClass(uki.data.Model, function(Base) {

  uki.data.model.addFields(this, ['feed', 'id', 'title', 'author', 'updated', 'content', 'summary', 'unread', 'origin']);

  this.from = function() {
    if(this.feed) return this.feed.title;
  }

  this.content = function() {
    return this._content ? this._content.content : this.summary().content;
  }

  this.markAsRead = function(callback) {
    this.unread(false);
    callback.call(this);
    // uki.ajax({
    //   url: 'post/' + this.id() + '/markAsRead/',
    //   type: 'POST',
    //   success: uki.proxy(function() {
    //     this.unread(false);
    //     callback && callback.call(this);
    //   }, this)
    // });
  };
});