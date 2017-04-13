'use strict';

/**
 * @ngdoc overview
 * @name fmsApp
 * @description
 * # fmsApp
 *
 * Main module of the application.
 */
angular
  .module('fmsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/service', {
        templateUrl: 'views/service.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
