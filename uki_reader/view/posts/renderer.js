uki_reader.view.Posts.Renderer = uki.newClass(uki.view.table.Render, function(Base) {
  this.init = function(table) {
    this.classPrefix = 'posts-' + uki.guid++;
    Base.init.call(this, table);
  }

  this.setSelected = function(container, data, state, focus) {
    container.className = !state ? '' : focus ? this.classPrefix + '-selected' : this.classPrefix + '-selected-blured';
  }
});