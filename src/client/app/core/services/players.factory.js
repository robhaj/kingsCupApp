(function() {
    'use strict';

    angular.module('app.core.services')
        .factory('players', playerFactory);


    function playerFactory() {
        var factory = {};

        factory.storePlayers = function(playerArray) {
            console.log(playerArray);
            localStorage.setItem('Players', JSON.stringify(playerArray));
            // var retrievedObject = JSON.parse(localStorage.getItem('Players'));
        };


        return factory;
    }
})();
