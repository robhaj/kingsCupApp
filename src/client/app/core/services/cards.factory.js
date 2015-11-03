(function() {
    'use strict';

    angular.module('app.core.services')
        .factory('cards', cardsFactory);

    cardsFactory.$inject = ['$http'];

    function cardsFactory($http) {
        var factory = {};
        var cards = [];
        var discard = [];

        factory.populateDeck = function() {
            $http.get('/api/v1/cards')
            .then(function(result) {
                cards = result.data.cards;
            });
        };

        factory.draw = function() {
            var drawn = cards.splice(0, 1)[0];
            discard.unshift(drawn);
            return drawn;
        };

        factory.deck = function() {
            return cards;
        };

        factory.discarded = function() {
            return discard;
        };

        return factory;
    }
})();
