'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('FormCtrl', function ($scope, $location, $routeParams) {
	  $scope.term = $routeParams.term;
	  $scope.submit = function() {
		  $location.path("confirm");
	  }
  });
