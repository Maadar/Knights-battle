(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Block, _) {

    $scope.blocks = new Array(49);
    $scope.blocksList = [];
    $scope.list1 = [];
    $scope.horses = [];

    for (let i=0; i < 49; i++) {
      if (i === 0) {
        $scope.horses.push({
          'title': 'Horse1',
          'black': true,
          'drag': true,
          'move': true
        });
      } else if (i === 48) {
        $scope.horses.push({
          'title': 'Horse2',
          'white': true,
          'drag': true,
          'move': true
        });
      } else {
        $scope.horses.push({'move': true});
      }
    }


    for (let i=1; i<=$scope.blocks.length; i++) {
      $scope.Block = new Block();
      $scope.blocksList.push($scope.Block);
    };

    //set horse position on start
    $scope.setHorses = function() {
      $scope.list1 = $scope.horses;
    }

    $scope.canJump = function(index) {
      $scope.Block.setData(index, $scope.blocksList, $scope.blocksList[index]);
      $scope.Block.negative();
    }

    $scope.cantJump = function(index) {
      angular.forEach($scope.blocksList, function(element) {
        element.canJump = false;
      });
    }

    $scope.startCallback = function(event, ui, index) {
      console.log("movin", $scope.list1);
    };

    $scope.stopCallback = function(event, ui) {
      console.log('Why did you stop draggin me?');
    };

    $scope.dropCallback = function(event, ui, index) {
      console.log("drop");
      $scope.Block.disableBlock();
    };

    $scope.overCallback = function(event, ui, index) {
      console.log('I`m over', index);
    };

    $scope.outCallback = function(event, ui) {
      console.log('I`m not, hehe');
    };
  }
})();
