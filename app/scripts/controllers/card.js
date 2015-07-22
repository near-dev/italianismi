'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('CardCtrl', function ($scope, $routeParams, engine) {
  	engine.setStatus($routeParams);
  	$scope.terms = engine.getFilteredTerms();

  	angular.forEach($scope.terms, function(term, index) {
  		if (term.termIta === $routeParams.term) {
  			$scope.index = index;
  		}
  	});
  });
