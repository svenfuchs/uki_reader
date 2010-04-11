function hideGoogleReader() {
  var body = document.getElementsByTagName('body')[0];
  var trash = document.createElement('div')

  var child = body.firstChild;
  while(child) {
    if(child.style) {
      child.style.position = 'absolute';
      child.style.left = '-10000px';
    }
    child = child.nextSibling;
  }

  body.style.visibility = 'visible';
}
hideGoogleReader();

(function() {

uki_reader = {};

include('frameworks/uki/uki-core.js');
include('frameworks/uki/uki-data/ajax.js');
include('frameworks/uki/uki-data/model.js');

include('frameworks/uki/uki-view/view/box.js');
include('frameworks/uki/uki-view/view/image.js');
include('frameworks/uki/uki-view/view/button.js');
include('frameworks/uki/uki-view/view/table.js');
include('frameworks/uki/uki-view/view/splitPane.js');
include('frameworks/uki/uki-view/view/scrollPane.js');
include('frameworks/uki/uki-view/view/flow.js');

// data
include('uki_reader/model/feed.js');
include('uki_reader/model/post.js');

// theme
include('uki_reader/theme.js');

// // layout
include('uki_reader/layout/toolbar.js');
include('uki_reader/layout/left_pane.js');
include('uki_reader/layout/posts_pane.js');
include('uki_reader/layout/post_pane.js');
include('uki_reader/layout/main.js');

// view
include('uki_reader/view/posts.js');
include('uki_reader/view/feeds.js');
include('uki_reader/view/toolbar.js');
include('uki_reader/view/toolbar_button.js');

// controller
include('uki_reader/controller/main.js');


// uki.theme.airport.imagePath = 'i/';
uki_reader.theme.imagePath = 'i/theme/';

// skip interface creation if we're testing
if (window.TESTING) return;

uki_reader.controller.main();

})();
