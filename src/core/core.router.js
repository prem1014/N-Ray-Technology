(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider', '$routeProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider, $routeProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
             .state("Home", {
                 url: "/home",
                 templateUrl: "/src/components/home/home.html",
                 authenticate: false
         });
         // Send to login if the URL was not found
         $urlRouterProvider.otherwise("/home");
    }
})();
