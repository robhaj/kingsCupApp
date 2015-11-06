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
    }

    PlayersModalCtrl.$inject = ['players'];

    function PlayersModalCtrl(players) {
            var vm = this;
            vm.numPlayers = 2;

            vm.playerNames = [];

            vm.logPlayers = function() {
                console.log(vm.playerNames);
                players.storePlayers(vm.playerNames);
            };

            vm.range = function(num) {
                return new Array(num);
            };

        }
})();
