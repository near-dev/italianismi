'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('CardCtrl', function ($scope, $routeParams, $window, engine) {
	$scope.language = $routeParams.language;
  	$scope.search = $routeParams.search;

  	$scope.terms = engine.getFilteredTerms($scope.language, $scope.search);

	$window.count = $scope.terms.length;

  	angular.forEach($scope.terms, function(term, index) {
  		if (term.termIta === $routeParams.term) {
  			$scope.index = index;
			$window.index = index;
  		}
  	});
  });
