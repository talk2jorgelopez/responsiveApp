var myApp = angular.module('myResponsiveApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('app', {
			url: '/',
			//abstract:true,
			views: {
				'header': {
					templateUrl: 'templates/header.html'
				},
				'mainContent': {
					templateUrl: 'templates/main.html'
				},
				'projects': {
					templateUrl: 'templates/promo/projects.html'
				},
				'skills': {
					templateUrl: 'templates/promo/skills.html'
				},
				'code': {
					templateUrl: 'templates/promo/code.html'
				},
				'resume': {
					templateUrl: 'templates/promo/resume.html'
				},
				'bio': {
					templateUrl: 'templates/about/bio.html'
				},
				'edu': {
					templateUrl: 'templates/about/education.html'
				},
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
}]);
