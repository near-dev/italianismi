'use strict';

/**
 * @ngdoc overview
 * @name italianismiApp
 * @description
 * # italianismiApp
 *
 * Main module of the application.
 */
angular
  .module('italianismiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/terms/:language?/:termFilter?', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise;
          }
        }
      })
      .when('/languages', {
        templateUrl: 'views/languages.html',
        controller: 'LanguagesCtrl',
        resolve: {
          languages: function(engine) {
            return engine.languagePromise;
          }
        }
      })
      .when('/card/:term?/:language?/:termFilter?', {
        templateUrl: 'views/card.html',
        controller: 'CardCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise;
          }
        }
      })
      .when('/vivit', {
        templateUrl: 'views/vivit.html',
        controller: 'VivitCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'CreditsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
