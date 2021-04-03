require('dotenv').config();
const heartbeats = require('heartbeats');
const axios = require('axios');

let heart = heartbeats.createHeart(1000);
let http = axios.create({
  baseURL: process.env['HEARTBEAT_SERVER_BASE_URL'],
});

heart.createEvent(
  process.env['HEARTBEAT_CLIENT_INTERVAL'],
  function (count, last) {
    http
      .get('/pulse/beat/' + process.env['HEARTBEAT_CLIENT_ID'])
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
);
