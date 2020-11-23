const heartbeats = require('heartbeats');
const axios = require('axios');

let heart = heartbeats.createHeart(1000);
let http = axios.create({
    baseURL: 'http://localhost:3000/'
});


heart.createEvent(30, function(count, last) {

    http.get('/12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

});
