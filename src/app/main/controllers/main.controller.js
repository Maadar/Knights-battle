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
    $scope.list2 = [{
      'title': 'Horse1',
      'drag': true,
      'drop': true
    }];

    for (let i = 1; i <= $scope.blocks.length; i++) {
      $scope.Block = new Block();
      $scope.Block.setId(i - 1);
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
      $scope.list1 = $scope.list2;
      savedElements.push($scope.blocksList[0]);
    }

    var index_min13_min15 = function(index) {
      if ($scope.blocksList[index].id > 13) {
        possibleJumps.push($scope.blocksList[index - 13]);
      }

      if ($scope.blocksList[index].id > 14) {
        possibleJumps.push($scope.blocksList[index - 15]);
      }

      var blockLeft = [21, 28, 35, 42];
      var blockRight = [20, 27, 34, 41, 48];

      if (blockLeft.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(1, 1);
        }
      }

      if (blockRight.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(0, 1);
        }
      }

    }

    var index_max9_max_15 = function(index) {
      if ($scope.blocksList[index].id >= 0 && $scope.blocksList[index].id <= 33) {
        possibleJumps.push($scope.blocksList[index + 15]);
      }

      if ($scope.blocksList[index].id >= 0 && $scope.blocksList[index].id <= 39) {
        possibleJumps.push($scope.blocksList[index + 9]);
      }

      var _6thColumnTop = [5, 12];
      var _6thColumnCenter = [19, 26, 33, 40, 47];
      if (_6thColumnTop.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(1, 1);
        }
      }

      if (_6thColumnCenter.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 1);
        }
      }

    }

    var index_min_5 = function(index) {
      if ($scope.blocksList[index].id >= 6) {
        possibleJumps.push($scope.blocksList[index - 5]);
      }
      var _6thColumnTop = [5, 12];
      var _6thColumnCenter = [19, 26, 33, 40, 47];
      var _6thColumnBottom = [40, 47];
      var _7thColumnBottom = [20, 27, 34, 41, 48];
      var _7thColumnTop = [6, 13];

      if (_7thColumnBottom.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(1, 3);
        }
      }

      if (_6thColumnCenter.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 1);
        }
      }

      if (_7thColumnTop.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(0, 3);
        }
      }

      if (_6thColumnTop.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(1, 1);
        }
      }

      if (_6thColumnBottom.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(2, 1);
        }
      }
    }

    var index_min_9 = function(index) {
      if ($scope.blocksList[index].id >= 9) {
        possibleJumps.push($scope.blocksList[index - 9]);
      }

      var _2ndColumn = [15, 22, 29];
      var _2ndColumn36 = [36];
      var _2ndColumn43 = [43];
      var _1stColumn = [28, 21, 14];
      var _1stColumn35 = [35];
      var _1stColumn42 = [42];

      if (_1stColumn.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(4, 1);
        }
      }

      if (_1stColumn35.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 1);
        }
      }

      if (_1stColumn42.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(2, 1);
        }
      }

      if (_2ndColumn.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(5, 1);
        }
      }

      if (_2ndColumn36.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(4, 1);
        }
      }

      if (_2ndColumn43.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 1);
        }
      }
    }

    var index_max_5_max_13 = function(index) {
      if ($scope.blocksList[index].id >= 2 && $scope.blocksList[index].id <= 41) {
        possibleJumps.push($scope.blocksList[index + 5]);
      }

      if ($scope.blocksList[index].id >= 1 && $scope.blocksList[index].id <= 34) {
        possibleJumps.push($scope.blocksList[index + 13]);
      }

      var _2ndColumn4Blocks = [8, 43];
      var _2ndColumnMid = [8, 15, 22, 29];
      var _2ndColumn36 = [36];
      var _1stColumn7 = [7];
      var _1stColumn35 = [35];
      var _1stColumnMid = [14, 21, 28];

      if (_1stColumn7.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 2);
        }
      }

      if (_1stColumnMid.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(4, 2);
        }
      }

      if (_1stColumn35.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          possibleJumps.splice(3, 1);
        }
      }

      if (_2ndColumn4Blocks.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          if (possibleJumps[i] === $scope.blocksList[index + 5]) {
            possibleJumps.splice(3, 1);
          }
        }
      }

      if (_2ndColumnMid.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          if (possibleJumps[i] === $scope.blocksList[index + 5]) {
            possibleJumps.splice(5, 1);
          }
        }
      }

      if (_2ndColumn36.indexOf($scope.blocksList[index].id) !== -1) {
        for (let i = 0; i < $scope.blocksList.length; i++) {
          if (possibleJumps[i] === $scope.blocksList[index + 5]) {
            possibleJumps.splice(4, 1);
          }
        }
      }
    }

    $scope.canJump = function(index) {
      possibleJumps = [];

      index_min13_min15(index);
      index_max9_max_15(index);
      index_min_5(index);
      index_min_9(index);
      index_max_5_max_13(index);

      angular.forEach(possibleJumps, function(element) {
        element.canJump = true;
      });
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

    var possibleJumps = [];
    $scope.dragCallback = function(event, ui, index) {};

    var savedElements = [];
    var newArr = [];
    $scope.dropCallback = function(event, ui, index) {
      console.log("drop");
      angular.forEach($scope.blocksList, function(element) {
        if (index === element.id && savedElements.indexOf(element) === -1) {
          savedElements.push(element);
          if (savedElements.length > 2) {
            savedElements.shift();
          }
        }
      });

      for (let i = 0; i < $scope.blocksList.length; i++) {
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
