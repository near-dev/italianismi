'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:LanguagesCtrl
 * @description
 * # LanguagesCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('LanguagesCtrl', function ($scope, $routeParams, engine) {
  	$scope.languages = engine.languages;
  	$scope.search = $routeParams.search;

	if ($routeParams.term) {
		$scope.term = engine.getTerm($routeParams.term);
	}
	
	$scope.hasLanguage = function(language) {
		if ($scope.term) {
			var found = false;
			angular.forEach($scope.term.languages, function(l) {
				if (l.name === language) {
					found = true;
				}
			});
			return found;
		}
		else {
			return false;
		}
	};
  });
