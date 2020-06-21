(function (){ 
    'use strict';

    angular.module('LunchCheck',[]) 
    .controller('LunchCheckController',function($scope){
    $scope.items = "";
    $scope.message  = "";

    $scope.displayMessage = function()
    {
       $scope.numberOfItems = countItems($scope.items);
       if ($scope.numberOfItems == "")
            $scope.message =  "Please Enter Data First !";
        else
        {
            var message = ($scope.numberOfItems.length <4) ? "Enjoy!":"Too Much";
            $scope.message = message;
        }
    }

    function countItems(string)
    {
        var lunchitems = 0;
        lunchitems = string.split(',');
        return lunchitems;
    }
});

LunchCheckController.$inject = [$scope];

})();