include('../layout.js');

uki_reader.layout.leftPane = function() {
  return { 
    textSelectable: false,
    childViews:[
      { 
        view: 'ScrollPane', 
        rect: '250 910', 
        anchors: 'left top right bottom', 
        background: '#DDE4EB',
        childViews: { 
          view: 'uki_reader.view.Feeds', 
          rect: '0 10 250 200', 
          anchors: 'left top right', 
          style: { fontSize: '12px' },
          childViews: [
            { 
              view: 'Label', 
              rect: '250 20', 
              anchors: 'left top right', 
              text: 'SUBSCRIPTIONS', 
              inset: '5 0 2 9',
              background: 'theme(tree-list-header)' 
            },
            { 
              view: 'uki.more.view.TreeList',
              id: 'feeds',
              rect: '0 28 250 10', 
              anchors: 'left top right',
              style: { fontSize: '11px', fontFamily: uki.theme.style('fontFamily'), lineHeight: '11px' },
              render: new uki_reader.view.feeds.renderer(), 
              rowHeight: 20, 
              focusable: false, 
              textSelectable: false 
            }
          ]
        }
      },
      // left bottom toolbar
      { view: 'Box', rect: '0 910 250 22', anchors: 'left bottom right', background: 'theme(panel-light)' }
    ]
  };
};