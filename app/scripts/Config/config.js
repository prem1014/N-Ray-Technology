'use strict';

(function () {
    angular.module('nRayTechnologyApp.config', ['ngRoute'])
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
       .when('/SignUp', {
           templateUrl: 'User_Registration/_signUp.html',
          // controller: 'UserRegistrationCtrl'
       })
      .when('/Login', {
          templateUrl: 'Login/_login.html',
          //controller: 'LoginCtrl'
      })
      .when('/AboutUs', {
          templateUrl: 'views/AboutUs/_aboutUs.html',
         // controller: 'AboutUsCtrl'
      })
      .when('/ContactUs', {
          templateUrl: 'views/ContactUs/_contactUs.html',
          controller: 'ContactUsCtrl'
      })
      .when('/Service', {
          templateUrl: 'views/SoftwareServices/_services.html'
      })
      .when('/MyBolg', {
          templateUrl: 'views/Blog/_myBlog.html',
          controller: 'MyBlogCtrl'
      })
      .when('/AngTutorial', {
          templateUrl: 'views/Blog/Angular-tutorial/angularTuto.html'
      })
      .when('/tournament2016',{
          templateUrl: 'views/Tournament/nray-mateshwar.html',
          controller:'TournamentController'
      })
    }

})();