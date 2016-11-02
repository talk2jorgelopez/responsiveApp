var myApp = angular.module('myResponsiveApp', ['ui.router', 'app.controllers']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			url: '/',
			abstract:true,
			views: {
				'header': {
					templateUrl: 'templates/header.html'
				},
			   'mainContent': {
					url: '/main',
					templateUrl: 'templates/main.html'
				},
				'code': {
					url: '/code',
					templateUrl: 'templates/promo/code.html'
				},
				'resume': {
					url: '/resume',
					templateUrl: 'templates/promo/resume.html'
				},
				'bio': {
					url: '/bio',
					templateUrl: 'templates/about/bio.html'
				},
				'edu': {
					url: '/edu',
					templateUrl: 'templates/about/education.html'
				},
				'skills': {
					url: '/skills',
					templateUrl: 'templates/promo/skills.html'
				},
				'projects': {
					url: '/projects',
					templateUrl: 'templates/promo/projects.html'
				},
				'footer': {
					templateUrl: 'templates/header.html'
				},
			}
		})

		.state('app.footer', {
			templateUrl: 'templates/footer.html'
		})
		.state('about', {
			url: '/about',
			abstract: true,
			views: {
				'main': {
					url: '/about/bio',
					templateUrl: 'templates/about/bio.html',
					controller: 'aboutCtrl'
				},
				'projects': {
					url: '/about/education',
					templateUrl: 'templates/promo/projects.html',
					controller: 'aboutCtrl'
				}
			}
		})

		.state('promo', {
			url: '/promo',
			abstract: true,
			views: {
				'main': {
					url: '/promo.html',
					templateUrl: 'templates/promo/projects.html',
					controller: 'promoCtrl'
				},
				'projects': {
					url: '/promo/projects.html',
					templateUrl: 'templates/promo/projects.html',
					controller: 'promoCtrl'
				},
				'skills': {
					url: '/promo/skills',
					templateUrl: 'templates/promo/skills.html',
					controller: 'promoCtrl'
				},
				'resume': {
					url: '/promo/resume',
					templateUrl: 'templates/promo/resume.html',
					controller: 'promoCtrl'
				},
				'code': {
					url: '/promo/code',
					templateUrl: 'templates/promo/code.html',
					controller: 'promoCtrl'
				}
			}
		});


}]);

