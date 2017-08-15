( function () {

  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = "";
    $scope.dishes = "";

    $scope.check = function()
    {
      var count = numberofdishes($scope.dishes);
      if(count == 0)
      {
        $scope.message = "Please Enter something in cart";
      }
      else if(count <= 3)
      {
        $scope.message = "Enjoy";
      }
      else {
        $scope.message = "Too Much";
      }
    };
    function numberofdishes(dishes)
    {
      var count =0;
      var item = dishes.split(",");
      for (var i=0; i < item.length; i++)
      {
        if (item[i] != "")
        {
          console.log(item[i]);
          count++;
        }
      }
      console.log(count);
      return count;
    }

  }
})();
