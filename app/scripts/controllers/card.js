'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('CardCtrl', function ($scope, $rootScope, $routeParams, $window, engine) {
	$scope.language = $routeParams.language;
  	$scope.search = $routeParams.search;
	$scope.term = $routeParams.term;
	
	$scope.linkback = 'languages/' + $scope.term;
	
  	$scope.terms = engine.getFilteredTerms($scope.language);
	

	$window.count = $scope.terms.length;

  	angular.forEach($scope.terms, function(term, index) {
		if ($scope.language) {
			angular.forEach(term.languages, function(language, index) {
				if (language.name == $scope.language) {
					term.languageIndex = index;
				}
			});
		}
		var imageUrl = engine.getImageUrl(term.termIta);
		if (imageUrl) {
			term.imageUrl = imageUrl;
		}
		
  		if (term.termIta === $routeParams.term) {
  			$scope.index = index;
			$window.index = index;
  		}
  	});
	
	$scope.changeLanguage = function(dir, term) {
		var newIndex = term.languageIndex + dir;
		if (newIndex >= term.languages.length) {
			newIndex = 0;
		}
		if (newIndex < 0) {
			newIndex = term.languages.length - 1;
		}
		term.languageIndex = newIndex;
	}
	
	$scope.getLanguageCount = function(term) {
		if ($rootScope.languageSel === 'ita') {
			return term.languages.length === 1 ? "una lingua" : "" + term.languages.length + " lingue";
		}
		else {
			return term.languages.length === 1 ? "one language" : "" + term.languages.length + " languages";
		}
	}
  });
