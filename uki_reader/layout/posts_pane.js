include('../layout.js');

uki_reader.layout.postsPane = function() {
  return {
    view: 'uki_reader.view.Posts',
    rect: '749 200', 
    anchors: 'left top right bottom',
    style: { fontSize: '12px', lineHeight: '12px' }, 
    multiselect: true
  };
};