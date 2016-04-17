'use strict';

/**
 * @ngdoc overview
 * @name nRayTechnologyApp
 * @description
 * # nRayTechnologyApp
 *
 * Main module of the application.
 */
(function () {
    angular
      .module('nRayTechnologyApp', [
        'nRayTechnologyApp.config',
        'nRayTechnologyApp.tournament',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch'
      ])
    .controller('IndexCtrl', indexCtrl);

    indexCtrl.$inject = ['$scope'];

    function indexCtrl($scope) {
        $scope.carousal = true;
    }

})();

