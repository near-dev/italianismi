/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
.controller('FormCtrl', function ($rootScope, $scope, $location, $routeParams, $http) {
	$scope.term = $routeParams.term;
	
	$scope.submitText = $rootScope.languageMap.formSubmit[$rootScope.languageSel];

	$scope.name = "";
	$scope.email = "";
	$scope.term = "";
	$scope.language = "";
	$scope.text = "";

	$scope.submitted = false;
	$scope.isValid = true;

	function checkValid() {
		return $scope.name.trim() && $scope.email.trim() && $scope.term.trim() && $scope.language.trim() && $scope.text.trim();
	};
	
	$scope.submit = function() {
		if ($scope.submitText === $rootScope.languageMap.formSubmit[$rootScope.languageSel] && checkValid()) {
			$scope.isValid = true;
			$scope.submitText = $rootScope.languageMap.formWait[$rootScope.languageSel];
			$scope.submitted = true;
			var data = {
				name: $scope.name,
				email: $scope.email,
				term: $scope.term,
				language: $scope.language,
				text: $scope.text,
			};
			$http({
				method: 'POST',
				url: 'http://localhost/itaconnect/CollectData.aspx',
				data: $.param(data),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
			.success(function() {
				$location.path('confirm/' + encodeURIComponent($scope.name) + '/' + encodeURIComponent($scope.term) + '/' + encodeURIComponent($scope.language))
			})
			.finally( function() {
				$scope.submitText = $rootScope.languageMap.formSubmit[$rootScope.languageSel];
			});
		}
		else {
			$scope.isValid = false;
		}
	};
	
	$scope.cancel = function() {
		$scope.name = '';
		$scope.email = '';
		$scope.term = '';
		$scope.language = '';
		$scope.text = '';
	};
	  
});
