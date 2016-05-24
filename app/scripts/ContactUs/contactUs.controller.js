(function () {
  'use strict';
  angular.module('nRayTechnologyApp.contactUs', [])
    .controller('ContactUsCtrl', contactUsCtrl);

  contactUsCtrl.$inject = ['$scope'];

  function contactUsCtrl($scope) {

    $scope.format = 'dd - MM - yyyy';

    $scope.today = function () {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.popup = {
      opened: false
    };
    $scope.openDatePickerPopup = function () {
      $scope.popup.opened = true;
    };
  }
})();
