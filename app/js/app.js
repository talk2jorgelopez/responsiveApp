var myApp = angular.module('myResponsiveApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			url: '/',
			//abstract:true,
			views: {
				'navigation': {
					templateUrl: 'templates/nav.html'
				},
				'nav-side': {
					templateUrl: 'templates/nav-side.html'
				},
				'header': {
					templateUrl: 'templates/header.html'
				},
				'mainContent': {
					templateUrl: 'templates/main.html'
				},
				'dynContent': {
					templateUrl: 'templates/main.html'
				},
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
		.state('app.about', {
			url: '/about',
			//abstract:true,
			views: {
				'bio': {
					templateUrl: 'templates/about/bio.html'
				},
				'education': {
					templateUrl: 'templates/about/education.html'
				},
				'contact': {
					templateUrl: 'templates/about/contact.html'
				}
			}
		})


			/*{
				'bio': {
					templateUrl: 'templates/about/bio.html'
				},
				'education': {
					templateUrl: 'templates/about/education.html'
				},
				'contact': {
					templateUrl: 'templates/about/contact.html'
				}
			}*/


}]);
