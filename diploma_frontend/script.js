// create the module and name it scotchApp
var host = "http://localhost:8000/";
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginController'
        })
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
});

scotchApp.controller('MainController', ['$scope', '$http', '$window', '$location', function ($scope, $http, $window, $location) {
    var auth = function () {
        $http({
            method: 'POST',
            url: host + 'api-token-verify/',
            data: {
                token: $window.localStorage.getItem('token')
            }
        }).then(function mySuccess(response) {
            alert(JSON.stringify(response.data));
            // var username = JSON.parse(atob($window.localStorage.getItem('token').split('.')[1])).username;
            // $scope.username = username
        }, function myError(response) {
            alert('ALARM ' + response.statusText);
            $location.path('/login')
        })};
    auth()

}]);

scotchApp.controller('BarController', ['$scope', '$http', '$window', '$location', function ($scope, $http, $window, $location) {

    $scope.logout = function () {
        $window.localStorage.removeItem('token');
        $location.path('/login');
    };

    $scope.show_logout = function () {
        console.log($window.localStorage.getItem('token'));
        return !($window.localStorage.getItem('token') === null);
    };

    var auth = function () {
        $http({
            method: 'GET',
            url: host + 'tasks/',
            headers: {
                'Authorization': 'JWT '+ $window.localStorage.getItem('token')
            }
        }).then(function mySuccess(response) {
            var message = '';
            response.data.forEach(function (x) {
                message = message + JSON.stringify(x)
            });
            var username = JSON.parse(atob($window.localStorage.getItem('token').split('.')[1])).username;
            $scope.username = username
        }, function myError(response) {
            $scope.username = 'Not Authenticated'
        })};
    auth()

}]);

scotchApp.controller('LoginController', ['$scope', '$http', '$window', '$location', function ($scope, $http, $window, $location) {
    $scope.get_token = function () {
        $http({
            method: 'POST',
            url: host + 'api-token-auth/',
            data: {
                username: $scope.login,
                password: $scope.pwd
            }
        }).then(function mySuccess(response) {
            $window.localStorage.token = response.data.token;
            console.log($window.localStorage);
            $location.path('/')

        }, function myError(response) {
            console.log(response)
        });
    };

    $scope.get_tasks = function () {
        $http({
            method: 'GET',
            url: host + 'tasks/',
            headers: {
                'Authorization': 'JWT '+ $window.localStorage.getItem('token')
            }
        }).then(function mySuccess(response) {
            var message = '';
            response.data.forEach(function (x) {
                message = message + JSON.stringify(x)
            });
            alert(message)
        }, function myError(response) {
            alert('ALARM ' + response.statusText)
        })
    }

}]);
