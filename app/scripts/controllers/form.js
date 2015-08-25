'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('FormCtrl', function ($scope, $location) {
	  $scope.submit = function() {
		  $location.path("confirm");
	  }
  });
