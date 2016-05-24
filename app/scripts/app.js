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
      'nRayTechnologyApp.contactUs',
      'nRayTechnologyApp.tournament',
      'nRayTechnologyApp.digiWatch',
      'ui.bootstrap',
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

