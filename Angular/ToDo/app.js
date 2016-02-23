var myApp = angular.module("testApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when("/view1", {
            templateUrl: "jsEducation/Angular/ToDo/view1.html"
        });

        $routeProvider.when("/view2", {
            templateUrl: "jsEducation/Angular/ToDo/view2.html"
        });


        $routeProvider.otherwise({
            templateUrl: "view1.html"
        });
    })

    //.constant("baseUrl", "http://localhost:2403/items")
    .constant("baseUrl", "productData.json")
    .controller("formAppCtrl", function ($scope, $http, baseUrl, $location) {
        $http.get(baseUrl).success(function (data) {
            $scope.items = data;
        });
        $scope.addItem = function (item) {

            $http.post(baseUrl, item).success(function (item) {
                $scope.items.push(item);

            });

        }
        $scope.goToView1 = function () {
            $location.path("/view1");
        }

        $scope.goToView2 = function () {
            $location.path("/view2");
        }
    })
