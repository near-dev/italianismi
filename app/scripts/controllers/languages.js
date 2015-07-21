'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:LanguagesCtrl
 * @description
 * # LanguagesCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('LanguagesCtrl', function ($scope, engine) {
  	$scope.languages = engine.languages;
  });
