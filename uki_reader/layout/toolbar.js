include('../layout.js');

uki_reader.layout.toolbar = function() {
  return { 
    view: 'Box', rect: '1000 68', anchors: 'left top right', id: 'top',
    background: 'theme(panel-dark)', 
    childViews: { 
      view: 'Label', rect: '0 0 1000 20', anchors: 'left top right', id: 'title',
      style: { textAlign: 'center', textShadow: '0 1px 0px rgba(255,255,255,0.8)', color: '#000' },
      text: 'Google Reader'
    }
  };
};