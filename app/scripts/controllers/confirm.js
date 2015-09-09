'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('ConfirmCtrl', function ($rootScope, $scope) {
	  $scope.text = $rootScope.languageMap.confirmText1[$rootScope.languageSel];
  });
