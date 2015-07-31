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
		
		var areas = [ {	'id': 'IT',	'showAsSelected': true } ];
		
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
					for (var i = 0; i < l.countries.length; i++) {
						areas.push({ 'id': l.countries[i], 'showAsSelected': true });
					}
				}
			});
		}
		
		console.log(areas);
		
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
					lines: [{
						latitudes: [45.4636, 50.4422],
						longitudes: [9.1881, 30.5367]
					}, {
						latitudes: [45.4636, 46.9480],
						longitudes: [9.1881, 7.4481]
					}, {
						latitudes: [45.4636, 59.3328],
						longitudes: [9.1881, 18.0645]
					}, {
						latitudes: [45.4636, 40.4167],
						longitudes: [9.1881, -3.7033]
					}, {
						latitudes: [45.4636, 46.0514],
						longitudes: [9.1881, 14.5060]
					}, {
						latitudes: [45.4636, 48.2116],
						longitudes: [9.1881, 17.1547]
					}, {
						latitudes: [45.4636, 44.8048],
						longitudes: [9.1881, 20.4781]
					}, {
						latitudes: [45.4636, 55.7558],
						longitudes: [9.1881, 37.6176]
					}, {
						latitudes: [45.4636, 38.7072],
						longitudes: [9.1881, -9.1355]
					}, {
						latitudes: [45.4636, 54.6896],
						longitudes: [9.1881, 25.2799]
					}, {
						latitudes: [45.4636, 64.1353],
						longitudes: [9.1881, -21.8952]
					}, {
						latitudes: [45.4636, 40.4300],
						longitudes: [9.1881, -74.0000]
					}],
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
					color: '#CC0000',
					alpha: 0.4,
					arrowAlpha: 1,
					arrowSize: 4
				}
			});
		};
		
		setTimeout(initMap, 100);
	});

/*	
	            //Ceco ,
    				latitudes: [45.4636, 50.083333],
    				longitudes: [9.1881, 14.416667]
          }, {
            //cinese ,
            latitudes: [45.4636, 39.905556],
            longitudes: [9.1881, 116.391389]
          }, {
            //Coreano  ,
            latitudes: [45.4636, 39.033333],
            longitudes: [9.1881, 125.75]
          }, {
            //faroese ,
            latitudes: [45.4636, 62.011667],
            longitudes: [9.1881, -6.7675]
    			}, {
            //danese ,
    				latitudes: [45.4636, 55.683333],
    				longitudes: [9.1881, 12.583333]
    			}, {
            //arabo, 
    				latitudes: [45.4636,  24.711660],
    				longitudes: [9.1881, 46.724100]
    			}, {
            //Estone
    				latitudes: [45.4636, 59.43],
    				longitudes: [9.1881, 24.74]
    			}, {
            //Finnico ,
    				latitudes: [45.4636, 59.437222],
    				longitudes: [9.1881, 24.745278]
    			}, {
            // Francese ,
    				latitudes: [45.4636, 48.856667],
    				longitudes: [9.1881, 2.351944]
    			}, {
            // Tedesco ,
    				latitudes: [45.4636, 52.518611],
    				longitudes: [9.1881, 13.408056]
    			}, {
            // Giapponese ,
    				latitudes: [45.4636, 35.689506],
    				longitudes: [9.1881, 139.6917]
    			}, {
            // Gaelico ,
    				latitudes: [45.4636, 53.3425],
    				longitudes: [9.1881, -6.265833]
    			}, {
            // Lettone  ,
    				latitudes: [45.4636, 56.948889],
    				longitudes: [9.1881, 24.106389]
    			}, {
            // Lituano ,
    				latitudes: [45.4636, 54.683333],
    				longitudes: [9.1881, 25.283333]
          }, {
            //Polacco  ,
            latitudes: [45.4636, 52.2323],
            longitudes: [9.1881, 21.008433]
          }, {
            // Portoghese ,
            latitudes: [45.4636, 38.7],
            longitudes: [9.1881, -9.183333]
          }, {
            // Catalano ,
            latitudes: [45.4636, 41.383333],
            longitudes: [9.1881, 2.166667]
          }, {
            // Spagnolo ,
            latitudes: [45.4636, 40.433333],
            longitudes: [9.1881, -3.683333]
          }, {
            // americano ,
            latitudes: [45.4636, 38.895111],
            longitudes: [9.1881, -77.036667]
          }, {
            // Ungherese ,
            latitudes: [45.4636, 47.471944],
            longitudes: [9.1881, 19.050278]
    			}],
*/