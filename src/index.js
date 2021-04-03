require('dotenv').config();
const heartbeats = require('heartbeats');
const axios = require('axios');

const MILLI_SECS = 1000;
let heart = heartbeats.createHeart(MILLI_SECS);
let http = axios.create({
  baseURL: process.env['HEARTBEAT_SERVER_BASE_URL'],
});

heart.createEvent(process.env['HEARTBEAT_CLIENT_INTERVAL'], (count, last) => {
  http
    .get('/pulse/beat/' + process.env['HEARTBEAT_CLIENT_ID'])
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
