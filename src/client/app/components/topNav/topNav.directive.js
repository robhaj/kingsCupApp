(function() {
    'use strict';

    angular.module('app.components.topNav')
        .directive('topNav', topNavDirective);

    function topNavDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/topNav/topNav.html'
        };
    }
})();
