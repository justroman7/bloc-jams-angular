(function() {
<<<<<<< HEAD
  function seekBar($document){

    var calculatePercent = function(seekBar, event) {
        var offsetX = event.pageX - seekBar.offset().left;
        var seekBarWidth = seekBar.width();
        var offsetXPercent = offsetX / seekBarWidth;
        offsetXPercent = Math.max(0, offsetXPercent);
        offsetXPercent = Math.min(1, offsetXPercent);
        return offsetXPercent;
    };

=======
  function seekBar($document) {
    var calculatePercent = function(seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1, offsetXPercent);
      return offsetXPercent;
    };
>>>>>>> 10906430d65ef382f4b8931715e40f660d4fabd0
    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
        scope.value = 0;
        scope.max = 100;
<<<<<<< HEAD

=======
>>>>>>> 10906430d65ef382f4b8931715e40f660d4fabd0
        var seekBar = $(element);

        var percentString = function () {
          var value = scope.value;
          var max = scope.max;
          var percent = value / max * 100;
          return percent + "%";
        };

        scope.fillStyle = function() {
          return {width: percentString()};
        };
<<<<<<< HEAD

=======
>>>>>>> 10906430d65ef382f4b8931715e40f660d4fabd0
        scope.onClickSeekBar = function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
        };
<<<<<<< HEAD

        scope.trackThumb = function() {
            $document.bind('mousemove.thumb', function(event) {
                var percent = calculatePercent(seekBar, event);
                scope.$apply(function() {
                    scope.value = percent * scope.max;
                });
            });

            $document.bind('mouseup.thumb', function() {
                $document.unbind('mousemove.thumb');
                $document.unbind('mouseup.thumb');
            });
        };
      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
=======
        scope.trackThumb = function() {
          $document.bind('mousemove.thumb', function(event) {
            var percent = calculatePercent(seekBar, event);
            scope.$apply(function() {
              scope.value = percent * scope.max;
            });
          });

          $document.bind('mouseup.thumb', function() {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          });
        };

      }
    };
    }

    angular
        .module('blocJams')
        .directive('seekBar', ['$document', seekBar]);
>>>>>>> 10906430d65ef382f4b8931715e40f660d4fabd0
})();
