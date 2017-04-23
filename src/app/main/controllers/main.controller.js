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
    $scope.horses = [
      { 'title': 'Horse1', 'drag': true, 'drop': true }
    ];

    for (let i=1; i<=$scope.blocks.length; i++) {
      $scope.Block = new Block();
      $scope.Block.setId(i-1);
      $scope.blocksList.push($scope.Block);
    };
    $scope.check = function(index) {
      angular.forEach($scope.blocksList, function(block) {
        if (block.id === index) {
          console.log(block);
        }
      });
    };

    //set horse position on start
    $scope.setHorses = function() {
      $scope.list1 = $scope.horses;
      savedElements.push($scope.blocksList[0]);
    }

    var setPossibleJumps = function(possibleJumps) {
      angular.forEach(possibleJumps, function(element) {
        element.canJump = true;
      });
    }

    var displayMinusMoves = function(index) {
      var possibleJumps = [];
      var minusPositions = {
        "15": [15,16,17,18,19,20,22,23,24,25,26,27,29,30,31,32,33,34,36,37,38,39,40,41,43,44,45,46,47,48],
        "13": [14,15,16,17,18,19,21,22,23,24,25,26,28,29,30,31,32,33,35,36,37,38,39,40,42,43,44,45,46,47],
        "9":  [9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31,32,33,34,37,38,39,40,41,44,45,46,47,48],
        "5":  [7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31,32,35,36,37,38,39,42,43,44,45,46]
      };

      for (let key in minusPositions) {
        if (minusPositions[key].indexOf($scope.blocksList[index].id) !== -1) {
          var intKey = parseInt(key);
          possibleJumps.push($scope.blocksList[index-intKey]);
        }
      }
      setPossibleJumps(possibleJumps);
    }

    var displayPlusMoves = function(index) {
      var possibleJumps = [];
      var plusPositions = {
        "5":  [2,3,4,5,6,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31,32,33,34,37,38,39,40,41],
        "9":  [0,1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31,32,35,36,37,38,39],
        "13": [1,2,3,4,5,6,8,9,10,11,12,13,15,16,17,18,19,20,22,23,24,25,26,27,29,30,31,32,33,34],
        "15": [0,1,2,3,4,5,7,8,9,10,11,12,14,15,16,17,18,19,21,22,23,24,25,26,28,29,30,31,32,33]
      };

      for (let key in plusPositions) {
        if (plusPositions[key].indexOf($scope.blocksList[index].id) !== -1) {
          var intKey = parseInt(key);
          possibleJumps.push($scope.blocksList[index+intKey]);
        }
        setPossibleJumps(possibleJumps);
      }
    }

    $scope.canJump = function(index) {
      displayPlusMoves(index);
      displayMinusMoves(index);
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

    $scope.dragCallback = function(event, ui, index) {
    };

    var savedElements = [];
    var newArr = [];
    $scope.dropCallback = function(event, ui, index) {
      console.log("drop");
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
