'use strict';

/**
 * @ngdoc service
 * @name italianismiApp.engine
 * @description
 * # engine
 * Service in the italianismiApp.
 */
angular.module('italianismiApp')
  .service('engine', function ($http, $filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var that = this;
	
	this.getLanguageName = function(language) {
		var languageName = "";
		if (language) {
			angular.forEach(that.languages, function(_language) {
				if (_language.ref === language) {
					languageName = _language.name;
				}
			});
		}
		return languageName;
		
	};
	
    this.getFilteredTerms = function(language, search) {
    	return $filter('filter')(that.terms, function(value) {
    		var found = false;
    		if (language) {
	    		angular.forEach(value.languages, function(_language) {
	    			if (_language.ref === language) {
	    				found = true;
	    			}
	    		});
	    	}
	    	else
	    	{
    			found = true;
	    	}

	    	if (found) {
	    		if (search) {
	    			found = value.termIta.indexOf(search) >= 0;
	    		}
	    	}

    		return found;
    	});
    };	
	
	this.getTerm = function(termStr) { 
		var retTerm = null;
		angular.forEach(this.terms, function(term) {
			if (term.termIta === termStr) {
				retTerm = term;
			}
		});
		return retTerm;
	};
	
	this.getImageUrl = function(termStr) {
		var retUrl = null;
		angular.forEach(this.images, function(image) {
			if (image.termIta === termStr) {
				if (image.url) {
					retUrl = "photos/" + image.url;
				}
			}
		});
		return retUrl;
	}

	this.getLanguage = function() {
		if (!sessionStorage) {
			console.log('warning! language switch not supported');
			return 'ita';
		}
		return sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 'ita';
	}
	
	this.setLanguage = function(language) {
		if (sessionStorage) {
			sessionStorage.setItem('language', language);
		}
		else {
			console.log('warning! language switch not supported');
		}
		
	}
	
	var language = this.getLanguage();

    this.termsPromise = $http.get('json/' + language + '/terms.json').success(function(data) {
    	that.terms = data;
    });

    this.languagesPromise = $http.get('json/' + language + '/languages.json').success(function(data) {
    	that.languages = data;
    });

	this.imagesPromise = $http.get('json/termImages.json').success(function(data) {
    	that.images = data;
    });

  });
