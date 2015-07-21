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

    console.log('init service');

    var  status = null;

    this.termsPromise = $http.get('/json/terms.json').success(function(data) {
    	that.terms = data;
    });

    this.languagesPromise = $http.get('/json/languages.json').success(function(data) {
    	that.languages = data;
    });


    this.getStatus = function() {
    	return status;
    };

    this.resetStatus = function() {
    	status = {
	    	term: null,
	    	language: null,
	    	termFilter: null
	    };
    };

    this.resetStatus();

    this.setTerm = function(term) {
    	// nel caso venisse passata una stringa, viene cercato l'oggetto corrispondente
    	if (angular.isString(term)) {
    		var termFound = null;
    		angular.forEach(this.terms, function(item) {
    			if (item.termIta === term) {
    				termFound = item;
    			}
    		});
    		term = termFound;
    	}
    	status.term = term;
    };

    this.setLanguage = function(language) {
    	status.language = language;
    };

    this.setTermFilter = function(filter) {
    	status.termFilter = filter;
    };

    this.setStatus = function(routeParams) {
    	status.term = routeParams.term;
    	status.language = routeParams.language;
    	status.termFilter = routeParams.termFilter;
    };

    this.getFilteredTerms = function() {
    	return $filter('filter')(this.terms, function(value) {
    		var found = false;

    		if (status.language) {
	    		angular.forEach(value.languages, function(language) {
	    			if (language.name === status.language) {
	    				found = true;
	    			}
	    		});
	    	}
	    	else
	    	{
    			found = true;
	    	}

	    	if (found) {
	    		if (status.termFilter) {
	    			found = value.termIta.indexOf(status.termFilter) >= 0;
	    		}
	    	}

    		return found;
    	});
    };
  });
