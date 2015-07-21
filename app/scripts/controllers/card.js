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
  	if ($routeParams.termFilter) {
  		console.log('aaaa');
  		console.log(engine.getFilteredTerms('abb').length);
  	}
  });
