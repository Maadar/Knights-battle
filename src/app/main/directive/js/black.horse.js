(function() {
  'use strict'
  angular
    .module('mainModule')
    .directive('blackHorse', DragAndDrop);
    function DragAndDrop() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: 'app/main/directive/html/black.horse.html',
        link: function(scope, element, attr) {
          console.log(element);
          scope.startCallback = function(item) {
            console.log(item);
          }
        }
      }
    }
})();
