include('../posts.js');

uki.view.declare('uki_reader.view.Posts.Column', uki.view.table.Column, function(Base) {
  this._inset = new uki.geometry.Inset(1, 3);
});