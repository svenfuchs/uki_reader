include('../layout.js');

uki_reader.layout.main = function() {
  return uki({
    view: 'Box',
    rect: '1000 1000',
    anchors: 'left top right bottom',
    childViews: [
      uki_reader.layout.toolbar(),
      {
        view: 'HSplitPane',
        rect: '0 68 1000 932',
        anchors: 'left top right bottom',
        handlePosition: 250,
        minLeft: 150,
        handleWidth: 1,
    
        leftPane: uki_reader.layout.leftPane(),
    
        rightChildViews: {
          view: 'VSplitPane',
          rect: '749 932',
          anchors: 'left top right bottom',
          handleWidth: 10,
          handlePosition: 200, minTop: 100,
          topChildViews: uki_reader.layout.postsPane(),
          bottomChildViews: uki_reader.layout.postPane()
        }
      }
    ]
  });
};