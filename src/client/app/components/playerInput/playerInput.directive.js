(function() {
    'use strict';

  angular.module('app.components.playerInput')
        .directive('playerInput', playerInputDirective);

    function playerInputDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/playerInput/playerInput.html',
            controller: PlayerInputCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function PlayerInputCtrl() {
        var vm = this;
        vm.numPlayers = 2;

        vm.testModel = function() {console.log('vm.numPlayers: ', vm.numPlayers);}

        vm.range = function(num) {
            return new Array(num);
        };
    }
})();
