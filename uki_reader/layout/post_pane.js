include('../layout.js');

uki_reader.layout.postPane = function() {
  return { 
    view: 'ScrollPane', rect: '749 722', anchors: 'left top right bottom', scrollV: true, 
    childViews: [
      { 
        view: 'VFlow', id: 'meta', rect: '10 0 729 78', anchors: 'left top right',
        background: 'cssBox(border-bottom: 1px solid #CCC)',
        childViews: [
          { view: 'Box', rect: '200 22', anchors: 'left top', childViews: [
            { view: 'Label', rect: '0 6 50 16', anchors: 'left top', background: 'theme(field)', text: 'Title:' },
            { view: 'Label', rect: '60 6 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
              field: 'title', textSelectable: true }
          ] },
          { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'From:' },
            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
              field: 'from', textSelectable: true, style: {fontWeight: 'bold'} }
          ] },
          { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'Author:' },
            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
              field: 'author', textSelectable: true }
          ] },
          { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'Updated:' },
            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
              field: 'updated', textSelectable: true }
          ] }
        ]
      },
      { view: 'Label', rect: '0 80 749 100', anchors: 'left top right', text: '', multiline: true, inset: '5 10',
        id: 'content', textSelectable: true }
    ]
  };
};