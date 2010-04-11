(function() {
  var defaultCss = 'position:absolute;z-index:100;-moz-user-focus:none;font-family:Arial,Helvetica,sans-serif;';
  
  uki_reader.theme = uki.extend({}, uki.theme.Base, {
    imagePath: '/src/uki-theme/airport/i/',
    
    backgrounds: {
      // panel
      'panel-dark': function() {
        return new uki.background.Sliced9({
          h: [u("panel/dark-h.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAECAYAAABodtTSAAAAIklEQVQYGWN89OjRfwYKAeOFCxcoN2T58uWUGxIYGEixIQC2uQv/2FmjnwAAAABJRU5ErkJggg=="],
          m: [u("panel/dark-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAABCCAYAAACxdz2jAAAAQklEQVRYw+3SQREAIAwDwT7q31olBRHwAGYjoHO5pmcmtZmuA+kkhQQJser85YRYTt5y4jt2YiecEItEHTtBcv2RBQSZeQAFfY4LAAAAAElFTkSuQmCC", false, true]
        }, "2 0 2 0");
      },
      'panel-light': function() {
        return new uki.background.Sliced9({
          h: [u("panel/light-h.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAABCAYAAAAFKSQHAAAAD0lEQVQImWO4cuXKf1IxAKwwLUBaex9CAAAAAElFTkSuQmCC"],
          m: [u("panel/light-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAYAAAAb+hYkAAAAMElEQVQ4y2P8+/fvfwYSARMDGYDl////w00TeQHx79+/wRwQ3759o09AjGoa1YQKAFiCG/x9cnwFAAAAAElFTkSuQmCC", true]
        }, "1 0 0 0");
      },
      'table-header': function() {
        return new uki.background.CssBox('background:url(' + uki.theme.imageSrc('table-header') + ');border-bottom:1px solid #CCC;');
      }
    },
    
    images: {
    },
  
    imageSrcs: {
      x: function() {
        return [u("x.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIHWNgAAIAAAUAAY27m/MAAAAASUVORK5CYII=", u("x.gif")]; 
      },
      'list-selected-row': function() {
        return [u("list/selected-row.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAARCAYAAAArDQkmAAAAN0lEQVRYw+3RAQ0AMAjAsHNVN3atyAEbhHQS1ng/62hM1wIgAgJEQIAICBABASIgAgJEQIBIy2u67AKjWqm8DQAAAABJRU5ErkJggg==", u("list/selected-row.gif")] 
      },
      'list-unread': function() {
        return [u("list/unread.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVQ4y2NgGAVYQc2qG4rtu17Wtux6ebxt1+sfILpj54uahuX3FQhqzmy/pFSz7OHKju2v//fuevN/4t43YBrEr179dFlB+3W8hjDmTrjSWL/6+f+Ora/+d2xBwkA+SDx/2p0afAYwp3VeP1255Mn/mhXPMDBIPKPz9nF8BrBEVVz6WTjz4f+SuQ//F89BYBAfJB5TfvkHXgO8k46dSWm//T9rwr3/mUgYxAeJ+6acxOsCZsegrW3+GWf/R1Rc+x9bf+N/QvMtMA3ig8SdIw7V4g1Ec+cZWk6hO9Z7xJ7875V49r938gUwDeK7RBxY6Ra6U5FQTDKZO0/SsvfZ3OYYvPeMS+jBn87Bu0/b++9qdAneokRsWmIEeQcUJlDMDBUbhAAARh3Ic97iQwkAAAAASUVORK5CYII=", u("list/unread.png")];
      },
      'list-unread-selected': function() {
        return [u("list/unread-selected.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVQ4y2NgGAVYwf///xWAuBqIjwHxDygN4isQq3npf+xgKUFDoDbhA9WEDDhGwIBjhAz4QcCAHzR3AcVhQFksUJwOhh4AAMVYJHi3XECRAAAAAElFTkSuQmCC", u("list/unread-selected.png")];
      },
      'table-header': function() {
        return [u("table/header.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAR0lEQVQoz8XNORIAIAgEQbn+/18Bj8TMMlgCJ6Wa1blrYFqwTT38fjk/6YEzEl/O/IVHBXd3HBMRjnc4FpFPyyVsZjhmZhgvHLIaOS+PnNYAAAAASUVORK5CYII="];
      },
      'splitPane-x': function() {
        return [u("splitPane/x.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAMklEQVQIHR3GoQ0AAAgDsP1/AxaNhSMIgoNGhmhSzAzN7Olwd1bV0xER7O6nY3eZmU8/oKwy0Tv1fE4AAAAASUVORK5CYII="];
      },
      'splitPane-v-bg': function() {
        return [u("splitPane/v-bg.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMklEQVQY083KMQEAMAgDMA48ohArNQUts9BzuZPdfWHIqgorSvIiSS/urhdn5vsIwIoPCOcbF8QKbsQAAAAASUVORK5CYII="];
      },
      'tree-list-header': function() {
        return [u("header/tree-list.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANElEQVQ4y2NgGNagHQ1TZADFLvAl1wAGqGayDWEgxxBcCn2JDQ+aOLmdEkOoFpX0T4n0AQDoThJhbb2E6gAAAABJRU5ErkJggg==", u("header/tree-list.gif")]
      },
      'unread-header': function() {
        return [u("header/unread.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVQ4jWNgGAU0A4JAHAzE3VAcDBUjGoA0LEPDwaQY0I3FgG66GkCxFygOxFFAAgAAoF8RlRhg/AAAAAAASUVORK5CYII=", u("header/unread.gif")]
      },
      'arrows': function() {
        return [u("arrows.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABAElEQVQ4y62UvQ2DMBCFvQFsQDYzm5gN0kQCV6YBpDQ0MS2jMAIjOGfACrbOPhd50quwPt3POxi71E3L2qr5wQgZY1Yw+Y7JaTGHx6V/qrlMAJ16cEkDD6je20E3GNj42sENCvaAl2EMG4DrBNBpA9ck8GctCKCTICuU44dnVsiTM7RVSfkuMmYowEV0ht2kFQZCgAoF3XP4GnSVmUPy3f9kK0tt2H6/VZbS8Y7ZNlNANwbbJgGsblXCItDqtArmpyIw5W8YtnpGJYhOsG271SsqYXSw2EDuItcRQEX0OpAFbe5CiOhs7kLSvzA4s7Nd/9wQIL+APOO/qEVO3GKtfgEB6EwzIYKPOgAAAABJRU5ErkJggg==", u("arrows.gif")];
      },
      'tree-selected-bg': function() {
        return [u("tree/selected-bg.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABJElEQVQ4y61UQZLDIAyTZrhu/3/sD/YjfdIi9QAhxoGmh80hEEMsydaYz9+X8Y9PeTx+wPFJAO4rYBgEYXhxuogQKJJhr0mShC2QHcDusb2oIilgOqAC7T8j/h+TZQUAUP6qdgJS+oVkErDa2hlMksnGKpyP2NdNqdLJyGkFQH9guKvhkSAzvGhOz6UkTE2xWjYrICgirJOOvYxSq3N4sffGlxyx0OWafOcPviOAU9GRmgGwtMucPHYm8PDiSoE6oIJLSq06r6QqX2x050sQRRN4Pz6Y9lcEdMjojujRNPUa7hglY39j/GJ5rk5mFMqWjZ/3ocvcTJs7Rteqllo1zbN5OuQM1/nX7pwAxQYMrXzcjGsN4xrqZl7fB5gl3xsj+nA10d9McATavUOaqgAAAABJRU5ErkJggg==", u("tree/selected-bg.gif")];
      }
    },
    
    templates: {
      'table-header-cell': function() {
        return new uki.theme.Template(
          '<div style="position:relative;border:1px solid #CCC;border-top:none;border-left:none;' +
          'font-size:11px;line-height:13px;' +
          'font-family: ' + uki.theme.style('fontFamily') + ';' +
          '${style}" class="${className}">${data}</div>');
      },
      
      'table-cell': function() {
        return new uki.theme.Template(
          '<div style="position:relative;margin-right:1px;height:100%;'+
          'font-family: ' + uki.theme.style('fontFamily') + ';' +
          '${style}" class="${className}">${data}</div>');
      }
    },
    
    styles: {
      'fontFamily': function() {
        return 'Lucida Grande,Arial,Helvetica,sans-serif'
      }
    },
    
    doms: {
      'resizer': function(height) {
        var template = new uki.theme.Template('position:absolute;width:7px;top:0;right:-4px;height:${height}px;cursor:col-resize;cursor:ew-resize;z-index:101;background:url(' + uki.theme.imageSrc('x') + ')'),
          node = uki.createElement('div', template.render({height:height}));
        if (!node.style.cursor || window.opera) node.style.cursor = 'e-resize';
        return node;
      },
      'splitPane-vertical': function(params) {
        var commonVerticalStyle = 'cursor:row-resize;cursor:ns-resize;z-index:200;overflow:hidden;',
          handle = params.handleWidth == 1 ?
          uki.createElement('div', 
            defaultCss + 'width:100%;height:5px;margin-top:-2px;' + 
            commonVerticalStyle + 'background: url(' + uki.theme.imageSrc('x') + ')',
            '<div style="' + 
            defaultCss + 'background:#999;width:100%;height:1px;left:0px;top:2px;overflow:hidden;' + 
            '"></div>') :
          uki.createElement('div', 
            defaultCss + 'width:100%;height:' + params.handleWidth + 'px;' + commonVerticalStyle +
            'background: url(' + uki.theme.imageSrc('splitPane-v-bg') + ') 50% 50% repeat-x;',
            '<div style="position:absolute;left:50%;top:50%;margin:-2px 0 0 -2px;width:4px;height:4px;' +
            'background: url(' + uki.theme.imageSrc('splitPane-x') + ') 50% 50% no-repeat"></div>'
          );
        if (!handle.style.cursor || window.opera) handle.style.cursor = 'n-resize';
        return handle;
      },      
      'splitPane-horizontal': function(params) {
        var commonHorizontalStyle = 'cursor:col-resize;cursor:ew-resize;z-index:200;overflow:hidden;',
          handle = params.handleWidth == 1 ?
          uki.createElement('div', 
            defaultCss + 'height:100%;width:5px;margin-left:-2px;' + 
            commonHorizontalStyle + 'background: url(' + uki.theme.imageSrc('x') + ')',
            '<div style="' + 
            defaultCss + 'background:#999;height:100%;width:1px;top:0px;left:2px;overflow:hidden;' + 
            '"></div>') :
          uki.createElement('div', 
            defaultCss + 'height:100%;width:' + (params.handleWidth - 2) + 'px;' +
            'border: 1px solid #CCC;' + commonHorizontalStyle + 
            'background: url(' + uki.theme.imageSrc('splitPane-horizontal') + ') 50% 50% no-repeat;');
        if (!handle.style.cursor || window.opera) handle.style.cursor = 'e-resize';
        return handle;
      }
    }
  });

  function u(url) {
    return uki_reader.theme.imagePath + url;
  }

  uki.theme.register(uki_reader.theme);
})();
