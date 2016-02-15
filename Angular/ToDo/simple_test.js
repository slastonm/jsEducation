describe("simple test", function () {
    var mockScope, controller, backend;

    beforeEach(angular.mock.module("testApp"));
    beforeEach(angular.mock.inject(function ($httpBackend){

        backend = $httpBackend;

        backend.expect("GET", "productData.json").respond(
            [{ "name": "item 1", "compleate":false },
                { "name": "item 2", "compleate":true },
                { "name": "item 3", "compleate":false}]

        );
    }));
    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
        mockScope = $rootScope.$new();
        $controller("formAppCtrl", {
            $scope: mockScope,
            $http: $http
        });
        backend.flush();
    }));
    it("Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("work with date", function () {
        expect(mockScope.items).toBeDefined();
        expect(mockScope.items.length).toEqual(3);
    });

    it("answer", function () {
        expect(mockScope.items[0].compleate).toEqual(false);
        expect(mockScope.items[1].compleate).toEqual(true);
        expect(mockScope.items[2].compleate).toEqual(false);
    });
});
