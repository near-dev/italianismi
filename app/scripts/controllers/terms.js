'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:TermsCtrl
 * @description
 * # TermsCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('TermsCtrl', function ($scope, $routeParams, engine) {
	$scope.language = $routeParams.language;
  	$scope.search = $routeParams.search;

  	$scope.terms = engine.getFilteredTerms($scope.language, $scope.search);
	
	$scope.startWith = function(actual, expected) {
		var lowerStr = (actual + "").toLowerCase();
		return lowerStr.indexOf(expected.toLowerCase()) === 0;
	};
  });
