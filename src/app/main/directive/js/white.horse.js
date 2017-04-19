(function() {
  'use strict'
  angular
    .module('mainModule')
    .directive('whiteHorse', DragAndDrop);
    function DragAndDrop() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: 'app/main/directive/html/white.horse.html',
        link: function(scope, element, attr) {
          console.log(element);
        }
      }
    }
})();
