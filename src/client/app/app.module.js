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
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/landingPage/landingPage.html'
        });
    }
})();
