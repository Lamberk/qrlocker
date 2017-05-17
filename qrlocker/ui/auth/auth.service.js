(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomAuthService', CustomAuthService);

    CustomAuthService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UserService', 'AuthenticationService'];
    function CustomAuthService($http, $cookies, $rootScope, $timeout, UserService) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = AuthenticationService.SetCredentials;
        service.ClearCredentials = AuthenticationService.ClearCredentials;

        return service;

        function Login(username, password, callback) {

            console.log('i am in Login function');
            $http.post('http://localhost:8000/api-token-auth/', { username: username, password: password })
               .success(function (response) {
                   callback(response);
               }).error(function (error) {
                   console.log('error');
                   console.log(error)
            })
        }
    }
}());