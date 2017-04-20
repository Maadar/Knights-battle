(function() {
  'use strict';

  angular
    .module('mainModule')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Block) {
    $scope.blocks = new Array(49);
    $scope.blocksList = [];
    $scope.list1 = [];
    $scope.list2 = [
      { 'title': 'Horse1', 'drag': true, 'drop': true }
    ];

    for (let i=1; i<=$scope.blocks.length; i++) {
      $scope.Block = new Block();
      $scope.Block.setId(i-1);
      $scope.blocksList.push($scope.Block);
    };
    // $scope.check = function(index) {
    //   angular.forEach($scope.blocksList, function(block) {
    //     if (block.id === index) {
    //       console.log(block);
    //     }
    //   });
    // };

    //set horse position on start
    $scope.setHorses = function() {
      $scope.list1 = $scope.list2;
      savedElements.push($scope.blocksList[0]);
    }
    $scope.startCallback = function(event, ui, title, index) {
      console.log(event);
      possibleJumps = [];
      possibleJumps.push($scope.blocksList[index+9], $scope.blocksList[index+15]);
      angular.forEach(possibleJumps, function(element) {
        element.canJump = true;
      });

      console.log("movin", $scope.list1);
    };

    $scope.stopCallback = function(event, ui) {
      console.log('Why did you stop draggin me?');
    };

    var possibleJumps = [];
    $scope.dragCallback = function(event, ui, index) {
    };

    var savedElements = [];
    var newArr = [];
    $scope.dropCallback = function(event, ui, index) {
      angular.forEach($scope.blocksList, function(element) {
        if (index === element.id && savedElements.indexOf(element) === -1) {
          savedElements.push(element);
          if(savedElements.length > 2) {
            savedElements.shift();
          }
        }
      });

      for (let i=0; i<$scope.blocksList.length; i++) {
        if ($scope.blocksList[i] === savedElements[0] && savedElements.length > 1) {
          $scope.blocksList[i].isSelected = false;
        }
      }

    };

    $scope.overCallback = function(event, ui, index) {
      console.log('I`m over', index);
      angular.forEach($scope.blocksList, function(element) {
        if (index === element.id) {
          console.log(element);
        }
      });
    };

    $scope.outCallback = function(event, ui) {
      console.log('I`m not, hehe');
    };
  }
})();
