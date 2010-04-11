include('../view.js');
include('../../frameworks/uki/uki-more/more/view/treeList.js');

uki_reader.view.feeds = {};

uki.view.declare('uki_reader.view.Feeds', uki.view.VFlow, function(Base) {

  this._setup = function() {
    Base._setup.call(this);
  };

  this.feeds = function(feeds) {
    var list = uki('TreeList', this);
    list.data(feeds);
    this._bindUnread(feeds);
    this.resizeToContents('height').layout();
    return this;
  };

  this._bindUnread = function(feeds) {
    uki.each(feeds, function(i, feed) {
      feed.bind('change.unread', uki.proxy(this._unreadChanged, this, feed));
    }, this);
  };
  
  this._unreadChanged = function(feed) {
    var row = this._findFeed(feed);
    if (row) row.list.redrawRow(row.position);
  };
  
  this.appendChild = function(c) {
    this._bindListEvents(c);
    return Base.appendChild.apply(this, arguments);
  };
  
  this.selectedRow = uki.newProp('_selectedRow', function(v) {
    var row = this._findMailbox(v);
    if (row) row.list.selectedIndex(row.position);
  });
  
  this._findFeed = function(feed) {
    var p = -1, result = false;
    uki('[data]', this).each(function(i, list) {
      if ((p = uki.inArray(feed, list.listData())) > -1 ) {
        result = { list: list, position: p };
        return false;
      }
    });
    return result;
  };
  
  this._bindListEvents = function(c) {
    if (c.selectedIndexes) {
      c.bind('selection', uki.proxy(this._selectionUpdate, this, c));
    }
  };

  this._selectionUpdate = function(c, e) {
    if (!c.selectedIndexes().length) return; // empty selection comming on opening

    uki('[selectedIndexes]', this).each(function(i, list) {
      if (list != c) list.clearSelection();
    });
    this._selectedRow = c.selectedRows()[0];
    this.trigger('selection');
  };
  
  // this.insertBefore = function(c) {
  //   this._bindListEvents(c);
  //   return Base.insertBefore.apply(this, arguments);
  // };
  //
  // this.removeChild = function(c) {
  //   this._unbindListEvents(c);
  //   return Base.removeChild.apply(this, arguments);
  // };
  //
  // this.relayout = function() {
  //   this._listUpdate();
  // };
  
  // this._listUpdate = function() {
  //   uki('[selectedIndexes]', this).resizeToContents('height');
  //   this.resizeToContents('height');
  //   this.layout();
  //   if (this.parent()) this.parent().layout();
  // };
});

include('feeds/renderer.js');
