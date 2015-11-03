var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/cards', function(req, res, next) {
    cardApi('new/shuffle/?deck_count=1')
    .then(function(result) {
        var deck_id = result.deck_id;
        return cardApi(deck_id + '/draw/?count=52');
    })
    .then(function(result) {
        res.json(result);
    })
    .catch(function(error) {
        res.json(error);
    });
});

module.exports = router;

function cardApi(endpoint) {
    var url = 'http://deckofcardsapi.com/api/deck/' + endpoint;

    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if (error) { reject(error); }

            if (response && response.statusCode === 200) {
                resolve(JSON.parse(body));
            }
            else { reject('Internet is on fire.'); }
        });
    });
}
