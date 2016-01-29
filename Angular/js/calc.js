


var cApp = angular.module("cApp", []);
cApp.controller("cAppCtrl", function($scope){
    $scope.plus = function(){
        $scope.c = $scope.a + $scope.b
        return $scope.c
    }
    $scope.minus = function(){
        $scope.c = $scope.a - $scope.b
        return $scope.c
    }
    $scope.multiplication = function(){
        $scope.c = $scope.a * $scope.b
        return $scope.c
    }
    $scope.division = function(){
        $scope.c = $scope.a / $scope.b
        return $scope.c
    }
});
