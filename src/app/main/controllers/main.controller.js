(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetJson, Block) {
    var blocksList = [];
    $scope.items = new Array(49);

    for (let i=1; i<=$scope.items.length; i++) {
      $scope.Block = new Block();
      $scope.Block.setId(i-1);

      blocksList.push($scope.Block);
    };
    $scope.check = function(index) {
      angular.forEach(blocksList, function(block) {
        if (block.id === index) {
          console.log(block);
        }
      });
    };
    console.log(blocksList);
  }
})();
