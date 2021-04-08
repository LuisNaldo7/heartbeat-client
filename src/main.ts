import dotenv from 'dotenv';
import * as heartbeats from 'heartbeats';
import axios from 'axios';

dotenv.config();
const MILLI_SECS = 1000;
const heart = heartbeats.createHeart(MILLI_SECS);
const http = axios.create({
  baseURL: process.env['HEARTBEAT_SERVER_BASE_URL'],
});

heart.createEvent(process.env['HEARTBEAT_CLIENT_INTERVAL'], (count: number) => {
  http
    .get('/pulse/beat/' + process.env['HEARTBEAT_CLIENT_ID'])
    .then(() => {
      console.info('beat #' + count + ' succeeded');
    })
    .catch((error) => {
      console.error('beat #' + count + ' failed (' + error + ')');
    });
});
