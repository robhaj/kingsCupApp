(function() {
    'use strict';

    angular.module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['$uibModal'];

    function LandingCtrl($uibModal) {
        var vm = this;

        vm.openModal = function() {
            var modal = $uibModal.open({
                templateUrl: 'app/views/landingPage/players.modal.html',
                controller: PlayersModalCtrl,
                controllerAs: 'vm'
            });
        };

        function PlayersModalCtrl() {
            var vm = this;
            vm.numPlayers = 2;

            vm.range = function(num) {
                return new Array(num);
            };
        }
    }
})();
