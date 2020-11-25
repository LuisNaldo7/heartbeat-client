const heartbeats = require('heartbeats');
const axios = require('axios');

id = process.argv[2]
baseURL = process.argv[3]
interval = process.argv[4]

let heart = heartbeats.createHeart(1000);
let http = axios.create({
    baseURL: baseURL
});


heart.createEvent(interval, function(count, last) {

    http.get('/'+ id)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

});
