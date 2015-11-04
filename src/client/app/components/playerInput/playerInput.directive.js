(function() {
    'use strict';

  angular.module('app.components.playerInput')
        .directive('playerInput', playerInputDirective);

    function playerInputDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/playerInput/playerInput.html'
        };
    }
})();
