'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('ConfirmCtrl', function ($rootScope, $scope, $routeParams) {
	  $scope.text = $rootScope.languageMap.confirmText1[$rootScope.languageSel];
	  
	  $scope.text = $scope.text.replace('$$name', decodeURIComponent($routeParams.name)).replace('$$term', decodeURIComponent($routeParams.term)).replace('$$language', decodeURIComponent($routeParams.language))
  });
