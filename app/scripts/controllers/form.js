'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
	.controller('FormCtrl', function ($scope, $location, $routeParams, $http) {
		$scope.term = $routeParams.term;

		$scope.submitted = false;
		
		$scope.submit = function(test) {
			$scope.submitted = true;
		  var data = {
			  name: $scope.name,
			  email: $scope.email,
			  term: $scope.term,
			  language: $scope.language,
			  text: $scope.text,
		  }
		  $http({
			method: 'POST',
			url: 'http://localhost/itaconnect/CollectData.aspx',
			data: $.param(data),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		  }).success(function(retData) {
			$location.path('confirm/' + encodeURIComponent($scope.name) + '/' + encodeURIComponent($scope.term) + '/' + encodeURIComponent($scope.language));
		  });
	  }
  });
