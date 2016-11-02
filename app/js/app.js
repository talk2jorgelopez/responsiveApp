var myApp = angular.module('myResponsiveApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			url: '/',
			//abstract:true,
			views: {
				'header': {
					url: '/header',
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
					url: '/footer',
					templateUrl: 'templates/footer.html'
				}
			}
		})

		.state('app.promo', {
			url: '/promo',
			abstract: true,
			views: {
				'pprojects': {
					url: '/promo/projects.html',
					templateUrl: 'templates/promo/projects.html'
				},
				'pskills': {
					url: '/promo/skills',
					templateUrl: 'templates/promo/skills.html'
				},
				'presume': {
					url: '/promo/resume',
					templateUrl: 'templates/promo/resume.html'
				},
				'pcode': {
					url: '/promo/code',
					templateUrl: 'templates/promo/code.html'
				}
			}
		})

}]);
