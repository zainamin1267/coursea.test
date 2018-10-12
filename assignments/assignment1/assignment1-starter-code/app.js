(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);


  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.status = "";
    $scope.dishes = "";
    $scope.font = "black";
    $scope.checkDishes = function() {
      var sepdishes = $scope.dishes.split(',');
      var length = sepdishes.length;

      if (!length || sepdishes[0] === "") {
        $scope.status = "Please enter data first";
        $scope.font = "red";
      } else if (length > 0 && length < 4) {
        $scope.status = "Enjoy!";
        $scope.font = "green";
      } else {
        $scope.status = "Too much!";
        $scope.font = "green";
      }



    };


  }





})();
