include('../view.js');

uki_reader.view.Posts = {};

uki.view.declare('uki_reader.view.Posts', uki.view.Table, function(Base) {
  this._setup = function() {
    Base._setup.call(this);
    this._initialWidths = [];
    this._rowHeight = 17;
  };

  function unreadFormatter (value) {
    return value * 1 ? '<div class="unread"></div>' : '';
  }

  this.feed = uki.newProp('_feed', function(feed) {
    if (this._feed) {
      this._feed.unbind('change.posts', this._postsChange);
    }
    this._feed = feed;
    this.data(feed.posts());
    feed.bind('change.posts', uki.proxy(this._postsChange, this));
    this.trigger('change.posts');
  });

  this._postsChange = function() {
    this.data(this.feed().posts());
    this.trigger('change.posts');
  };

  this._createDom = function() {
    Base._createDom.call(this);
    this._scrollPane.scrollableH(false);
    this._scrollPane.scrollV(true);
    this._header.background('theme(table-header)');
    this._list.background('white');
    this._list.render(new uki_reader.view.Posts.Renderer(this));

    this.columns([
      { view: 'uki_reader.view.Posts.Column', label: '<img src="' + uki.theme.imageSrc('unread-header') + '" style="margin:0 0 0 1px;" />', 
        inset: '0 0', width: 19, minWidth: 19, formatter: unreadFormatter, key: 'unread' },
      { view: 'uki_reader.view.Posts.Column', label: 'From', width: 100, minWidth: 150, resizable: true, key: 'author' },
      { view: 'uki_reader.view.Posts.Column', label: 'Title', width: 500, minWidth: 150, resizable: true, key: 'title' },
      { view: 'uki_reader.view.Posts.DateColumn', label: 'Date Updated', width: 100, minWidth: 70, resizable: true,
        name: 'date', table: this, key: 'updated' }
    ]);

    var classPrefix = this._list.render().classPrefix,
    style = new uki.theme.Template(
      '.${classPrefix}-selected { background: url(' + uki.theme.imageSrc('list-selected-row') + '); color: #FFF } ' +
      '.${classPrefix}-selected-blured { background: url(' + uki.theme.imageSrc('list-selected-blured-row') + '); } ' +
      '.${classPrefix}-list .unread { background: url(' + uki.theme.imageSrc('list-unread') + '); width: 16px; height: 16px; margin: -1px 0 0 1px; } ' +
      '.${classPrefix}-selected .unread { background: url(' + uki.theme.imageSrc('list-unread-selected') + '); } '
    ).render({ classPrefix: classPrefix });
    this._list.className(classPrefix + '-list');
    uki.dom.createStylesheet(style);
  };

  this.columns = uki.newProp('_columns', function(c) {
    for (var i = 0, column; i < this._columns.length; i++) {
      this._columns[i].unbind();
    }
    this._columns = uki.build(c);
    this._initialTotalWidth = 0;
    this._initialWidths = [];
    this._resizableCols = 0;
    for (i = 0; i < this._columns.length; i++) {
      column = this._columns[i];
      this._initialWidths[i] = column.width();
      if (column.resizable()) this._resizableCols++;
      column.position(i);
      this._initialTotalWidth += column.width();
      this._columns[i].bind('beforeResize', uki.proxy(this._beforeColumnResize, this, i));
    };
    this._header.columns(this._columns);
    this._fitWidth();
  });

  this.relayout = function() {
    this._list.relayout();
  };

  var processingWidths = false;
  this._beforeColumnResize = function(position, e) {
    if (processingWidths) return;
    processingWidths = true;
    var diff = e.newWidth - e.oldWidth,
      nextColumn, iw, change, i, step;
    if (diff > 0) {
      i = this._columns.length;
      step = -1;
    } else {
      i = position;
      step = 1;
    }
    do {
      nextColumn = this._columns[i+=step];
      if (i == position || !nextColumn) break;
      if (!nextColumn.resizable()) continue;
      nextColumn.maxWidth(0);
      iw = nextColumn.width();
      nextColumn.width(iw - diff);
      change = iw - nextColumn.width();
      diff -= change;
    } while (diff);

    this._fixMaxWidths();
    this._recalcInitialWidths();
    processingWidths = false;
  };

  this._recalcInitialWidths = function() {
    this._initialTotalWidth = 0;
    for (var i = 0; i < this._columns.length; i++) {
      this._initialWidths[i] = this._columns[i].width();
      this._initialTotalWidth += this._initialWidths[i];
    }
  };

  this._layoutDom = function(rect) {
    Base._layoutDom.call(this, rect);
    this._fitWidth();
  };

  this._fixMaxWidths = function() {
    var fixed = 0, offsets = [0], width = this.rect().width - uki.view.ScrollPane.initScrollWidth();
    for (var i=1; i < this._columns.length; i++) {
      offsets[i] = offsets[i-1] + this._columns[i-1].width();
    };
    for (i = this._columns.length - 1; i >= 0; i--) {
      var column = this._columns[i];
      if (column.resizable()) {
        column.maxWidth(width - offsets[i] - fixed);
      }
      fixed += column.minWidth() || column.width();
    }
  };

  this._fitWidth = function() {
    processingWidths = true;
    var scroll = uki.view.ScrollPane.initScrollWidth(),
      diff   = this.rect().width - scroll - this._initialTotalWidth;
    var dw, change, resizable = this._resizableCols, widths = [].concat(this._initialWidths);
    while (diff && resizable) {
      var colsToGo = resizable;
      for (var i = 0, column; colsToGo > 0 && i < this._columns.length; i++) {
        column = this._columns[i];
        column.maxWidth(0);
        if (column.resizable()) {
          dw = diff / colsToGo << 0;
          column.width(widths[i] + dw);
          change = column.width() - widths[i];
          if (change != dw) resizable--;
          widths[i] += change;
          diff -= change;
          colsToGo--;
        }
      }
    };
    this._updateTotalWidth();
    this._fixMaxWidths();
    processingWidths = false;
  };
});

include('posts/column.js');
include('posts/date_column.js');
include('posts/renderer.js');
