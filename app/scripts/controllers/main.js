'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
	  $http.get('json/credits-' + $rootScope.languageSel + '.html').success(function(data) {
		 $scope.credits = data; 
	  });
  });
