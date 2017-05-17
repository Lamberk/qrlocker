(function () {
    'use strict';

    angular
        .module('app')
        .controller('CustomLoginController', CustomLoginController);

    CustomLoginController.$inject = ['$location', 'CustomAuthService', 'FlashService'];
    function CustomLoginController($location, FlashService) {
        console.log('i am in custom controller, bithchh');

        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            CustomAuthService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            CustomAuthService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    CustomAuthService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }
})();
