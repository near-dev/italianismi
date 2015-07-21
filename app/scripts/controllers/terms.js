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
  	engine.setStatus($routeParams);
  	$scope.status = engine.getStatus();
  	$scope.search = { termIta: $scope.status.termFilter };
  	$scope.terms = engine.getFilteredTerms();

  	$scope.reset = function() {
  		engine.setLanguage(null);
	  	$scope.terms = engine.getFilteredTerms();
  	};
  });
