'use strict';

var languageMap= {
	subtitle1: {
		ita: 'Parole Italiane della cucina',
		eng: 'sentence'
	},
	subtitle2: {
		ita: 'nelle lingue del mondo',
		eng: 'sentence'
	},
	menuItem1: {
		ita: 'Antipasto<br>per cominciare',
		eng: 'Menu<br>Item 1'
	},
	menuItem2: {
		ita: 'Seleziona una<br>lingua straniera',
		eng: 'Menu<br>Item 2'
	},
	menuItem3: {
		ita: 'Cerca una<br>parola italiana',
		eng: 'Menu<br>Item 3'
	},
	menuItem4: {
		ita: 'Aggiungi una<br>parola Straniera',
		eng: 'Menu<br>Item 4'
	},
	languageTitle1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'sentence'
	},
	languageTitle2: {
		ita: 'Seleziona una lingua',
		eng: 'sentence'
	},
	languageTitle3: {
		ita: 'Dove si usa la parola',
		eng: 'sentence'
	},
	termsTitle1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'sentence'
	},
	termsTitle2: {
		ita: 'Parole italiane',
		eng: 'sentence'
	},
	termsTitle3: {
		ita: 'Usate nel mondo',
		eng: 'sentence'
	},
	termsTitle4: {
		ita: 'Parole italiane in',
		eng: 'sentence'
	},
	termsSearchPH: {
		ita: 'Cerca una parola',
		eng: 'sentence'
	},
	termsNotFound: {
		ita: 'Non è stata trovata nessuna parola corrispondente alla tua ricerca. <br> Desideri aggiungere il termine cercato?',
		eng: 'sentence'
	},
	termsNotFoundLink: {
		ita: 'Aggiungi una parola straniera',
		eng: 'sentence'
	},
	cardSentence1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'sentence'
	},
	cardSentence2: {
		ita: 'Parola Italiana',
		eng: 'sentence'
	},
	cardSentence3: {
		ita: 'Italianismo',
		eng: 'sentence'
	},
	cardSentence4: {
		ita: 'Questa parola è presente in',
		eng: 'sentence'
	},
	cardSentence5: {
		ita: 'Lingua Selezionata',
		eng: 'sentence'
	},
	formTitle: {
		ita: 'Aggiungi una parola Straniera',
		eng: 'sentence'
	},
	formText: {
		ita: 'Lo scopo del progetto è Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
		eng: 'sentence'
	},
	formPh1: {
		ita: 'Nome / Cognome *',
		eng: 'sentence'
	},
	formPh2: {
		ita: 'E-mail *',
		eng: 'sentence'
	},
	formPh3: {
		ita: 'Nuova Parola',
		eng: 'sentence'
	},
	formPh4: {
		ita: 'Lingua',
		eng: 'sentence'
	},
	formPh5: {
		ita: 'Significato e note',
		eng: 'sentence'
	},
	formSubmit: {
		ita: 'Invia',
		eng: 'sentence'
	},
	formCancel: {
		ita: 'Annulla',
		eng: 'sentence'
	},
	confirmText1: {
		ita: 'Grazie $$name,<br>la parola <span>$$term</span> è stata inserita<br> fra gli italianismi in lingua <span>$$language</span>',
		eng: 'sentence $$name $$term $$language'
	},
	confirmText2: {
		ita: 'Il tuo aiuto è prezioso per arricchire<br>il nostro “vocabolario degli italianismi”.<br>Conosci altri termini utili?',
		eng: 'sentence'
	}
}
/**
 * @ngdoc overview
 * @name italianismiApp
 * @description
 * # italianismiApp
 *
 * Main module of the application.
 */
angular
  .module('italianismiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/terms/:language?/:search?', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise;
          }
        }
      })
      .when('/languages/:term?/:language?/:search?', {
        templateUrl: 'views/languages.html',
        controller: 'LanguagesCtrl',
        resolve: {
          languages: function(engine) {
            return engine.termsPromise && engine.languagePromise;
          }
        }
      })
      .when('/card/:term?/:language?/:search?', {
        templateUrl: 'views/card.html',
        controller: 'CardCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise;
          }
        }
      })
      .when('/vivit', {
        templateUrl: 'views/vivit.html',
        controller: 'VivitCtrl'
      })
      .when('/form/:term?', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'CreditsCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $window, $location, $templateCache, engine) {
	  $rootScope.languageSel = engine.getLanguage();
	  $rootScope.languageMap = languageMap;
	  
	  $rootScope.changeLanguage = function(language) {
		  if ($rootScope.languageSel !== language) {
			  engine.setLanguage(language);
			  $window.location.reload();
		  }
	  }
	  
	  $rootScope.go = function(path) {
		  $location.path(path);
	  }
  });


window.idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        window.idleTime = 0;
    });
    $(this).keypress(function (e) {
        window.idleTime = 0;
    });

	
	var initKeyboard = function() {
		if ($('#virtualKeyboardChromeExtensionOverlayScrollExtend').length) {
			$('#virtualKeyboardChromeExtensionOverlayScrollExtend').attrchange({
				callback: function (event) { 
					if ($('#virtualKeyboardChromeExtensionOverlayScrollExtend').css('display') === 'none') {
						$( 'input' ).blur();
						$('html').animate({top: '0'});
					}
					else {
						if ($('#formverde').length)
						{
							$('html').animate({top: '-250px'});
						}        
					}
				}
			});	
		}
		else {
			setTimeout(initKeyboard, 100);
		}
	};
	initKeyboard();

});

function timerIncrement() {
    window.idleTime = window.idleTime + 1;
    if (window.idleTime > 119 && window.location.hash !== '#/') { // 2 minutes
        window.location = '.';
    }
}  