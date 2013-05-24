'use strict';

/* Directives */


angular.module('photos.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('file', function(){
    // http://angularjstutorial.blogspot.com/2012/12/angularjs-with-input-file-directive.html
    return {
        scope: {
            file: '='
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file; // ? file.name : undefined;
                scope.$apply();
            });
        }
    };
});

