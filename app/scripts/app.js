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
	mainBack: {
		ita: 'Torna',
		eng: 'Back'
	},
	mainAntipasto: {
		ita: 'Antipasto per cominciare',
		eng: 'sentence'
	},
	mainEnter: {
		ita: 'Entra',
		eng: 'Enter'
	},
	mainSearch: {
		ita: 'Cerca una parola italiana<br>e scopri dove viene usata',
		eng: 'sentence'
	},
	mainOtherwise: {
		ita: 'Oppure',
		eng: 'sentence'
	},
	mainContinue: {
		ita: 'Continua a leggere',
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
	vivit1: {
		ita: '<br>Gli italianismi nel mondo costituiscono un fenomeno di grande ampiezza, che registra, secondo le indagini più recenti, oltre ventimila parole e interessa un numero non definito, ma comunque alto, di lingue. La maggior parte degli italianismi, cioè delle parole italiane più diffuse all\'estero, viene dal mondo della cultura.',
		eng: 'bubble'
	},
	vivit2: {
		ita: '<br>Sono molto diffuse anche le parole della cucina, come mostra il numero degli italianismi relativi all\'alimentazione entrati in inglese nel Novecento: nella prima metà del secolo rappresentano infatti un quarto del totale, sono circa la metà nel periodo successivo e giungono a superare il 70% verso la fine.',
		eng: 'bubble'
	},
	vivit3: {
		ita: '<br>Termini d\'origine italiana relativi alla gastronomia si ritrovano nelle lingue europee già nel XVI secolo: ad esempio, maccheroni nella forma adattatamacarrones è attestato per la prima volta in spagnolo nel 1517 (macarons, poi macaroni in francese, 1599; macaroni in inglese, 1599).',
		eng: 'bubble'
	},
	vivit4: {
		ita: '<br><br>Sono di diffusione molto antica pure mortadella in francese (mortadelle, XV secolo) e vermicelli in francese (vermicelle, 1553) e inglese (vermicelli, 1669).',
		eng: 'bubble'
	},
	vivit5: {
		ita: '<br><br>Parole come antipasto, polenta, bologna sono documentati nei dizionari inglesi a partire dal Cinquecento; le lasagne entrano in francese nello stesso secolo.',
		eng: 'bubble'
	},
	vivit6: {
		ita: '<br><br>La fortuna internazionale della parola confetti Risale alla fine del Settecento. Le parole pappardelle e il panettone fanno il loro ingresso in inglese alla fine del XIX secolo.',
		eng: 'bubble'
	},
	vivit7: {
		ita: '<br><br>Si riscontrano numerosi italianismi gastronomici recenti, molti dei quali sono fortemente connessi al fenomeno dell\'emigrazione.',
		eng: 'bubble'
	},
	vivit8: {
		ita: '<br>La fortuna americana di termini come lasagne (1846), salami (1852), risotto (1855), ricotta (1877), spaghetti (1888), mozzarella (1911), rigatoni (1923), scampi (1923), ziti, zucchini, prosciutto (1929), pizza (1935) è da mettere in relazione con la forte presenza della comunità di italo-americani.',
		eng: 'bubble'
	},
	vivit9: {
		ita: '<br>Il fenomeno dell\'italianismo è vivissimo soprattutto nel Novecento, e particolarmente negli ultimi decenni, grazie al rinnovato prestigio della nostra lingua nel mondo legato al successo internazionale dei prodotti made in Italy, sinonimo di eccellenza e di qualità, nei settori della gastronomia, della moda, delle produzioni manufatturiere.',
		eng: 'bubble'
	},
	vivit10: {
		ita: 'Col diffondersi all\'estero di nuovi prodotti e piatti della cucina italiana, si assesta un folto gruppo di italianismi gastronomici: non vi è ormai luogo del pianeta in cui non si utilizzino termini come pizza (oggi la parola italiana più nota nel mondo insieme a ciao), spaghetti, espresso e cappuccino, seguiti da cannelloni, mortadella, panna, ravioli, risotto, salame, mediamente noti in una trentina di lingue.',
		eng: 'bubble'
	},
	vivit11: {
		ita: '<br>Dagli anni settanta e ottanta del Novecento si sono rapidamente affermati, tra gli altri, bruschetta, carpaccio, ciabatta (reso plurale nella forma ciabattas),pesto, rucola, tiramisù (una parola presente in oltre venti lingue, tra cui giapponese, indonesiano, thai e laotiano).',
		eng: 'bubble'
	},
	vivit12: {
		ita: '<br><br>Non mancano infine termini anche più specifici, quali ad esempio parmigiano, mozzarella, olio d\'oliva, aceto balsamico, così come fra i formati di pasta le farfalle sono ormai conosciute quasi quanto le tagliatelle.',
		eng: 'bubble'
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
            return engine.termsPromise
          },
		  languages: function(engine) {
			return engine.languagePromise;  
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

 	$rootScope.goBack = function() {
		  window.history.back();
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