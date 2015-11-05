(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'app.core',
        'app.components'
    ])
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/test');

        $stateProvider
        .state('test', {
            url: '/test',
            templateUrl: 'app/views/test.html'
        });
    }
})();
