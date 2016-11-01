var myApp = angular.module('myResponsiveApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
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
				'footer': {
					templateUrl: 'templates/footer.html'
				},
				'about': {
					templateUrl: 'templates/about.html',
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
				}
			}
		})

}]);
