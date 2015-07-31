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
		
		var areas = [ {	'id': 'IT',	'showAsSelected': true, 'groupId': 'whole' } ];
		var lines = [];
		
		if ($scope.term) {
			// try to build areas
			angular.forEach($scope.term.languages, function(language) {
				var l = null;
				angular.forEach($scope.languages, function(lItem) {
					if (lItem.name === language.name) {
						l = lItem;
					}
				});
				if (l && l.countries) {
					lines.push({ latitudes: l.latitudes, longitudes: l.longitudes } );
					for (var i = 0; i < l.countries.length; i++) {
						areas.push({ 'id': l.countries[i], 'showAsSelected': true, 'groupId': 'whole' });
					}
				}
			});
		}
		
		var initMap = function() {
			// http://www.amcharts.com/visited_countries/ qui trovi l'esempio per la selezione dei paesi semplice
			// http://www.amcharts.com/demos/map-with-curved-lines/
			var map = AmCharts.makeChart('mapdiv',{
				type: 'map',
				theme: 'dark',
				//pathToImages : "http://cdn.amcharts.com/lib/3/images/",
				panEventsEnabled : true,
				backgroundColor : '#fff',
				backgroundAlpha : 0,
				dragMap: false,
				zoomControl: {
					panControlEnabled : false,
					zoomControlEnabled : false
				},
				dataProvider : {
					map : 'worldHigh',
					getAreasFromMap : true,
					lines: lines,
					areas : areas
				},
				areasSettings : {
					  autoZoom : false,
					  color : '#c3c3c2',
					  colorSolid : '#db1933',
					  selectedColor : '#db1933',
					  outlineColor : '#f4f4f3',
					  rollOverOutlineColor : '#f4f4f3',
					  balloonText: ''
				},
				linesSettings: {
					arc: -0.7, // this makes lines curved. Use value from -1 to 1
					arrow: 'end',
					color: '#aeaeaf',
					alpha: 0.9,
					arrowAlpha: 1,
					arrowSize: 7
				}
			});
			if ($routeParams.term) {
				map.zoomToGroup('whole');
			}
		};
		
		setTimeout(initMap, 100);
	});

	
