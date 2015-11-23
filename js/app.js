var example = angular.module("example", ['ui.router']);

example.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});

example.controller("LoginController", function ($scope) {
	$scope.valideRedirect = false;

    $scope.login = function () {
		window.location.href = "https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=bdobdjrwd05owto&redirect_uri=https://chaasof.github.io/test_dropbox/redirectResult.html";
    }
    $scope.blur = function (email) {
        if(email.split('@')[1] == "elior.com"){
		window.location.href = "https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=bdobdjrwd05owto&redirect_uri=https://chaasof.github.io/test_dropbox/redirectResult.html";
		$scope.valideRedirect = true;
	}
     }

});

example.controller("SecureController", function ($scope) {

    $scope.accessToken = JSON.parse(window.localStorage.getItem("dropbox")).oauth.access_token;

});
