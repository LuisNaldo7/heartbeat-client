import dotenv from 'dotenv';
import * as heartbeats from 'heartbeats';
import axios from 'axios';
import { fallback } from './fallback-values';
import date from 'date-and-time';

dotenv.config();
const MILLI_SECS = 1000;
const heart = heartbeats.createHeart(MILLI_SECS);
const http = axios.create({
  baseURL:
    process.env.HEARTBEAT_SERVER_BASE_URL || fallback.HEARTBEAT_SERVER_BASE_URL,
});

heart.createEvent(
  process.env.HEARTBEAT_CLIENT_INTERVAL || fallback.HEARTBEAT_CLIENT_INTERVAL,
  (count: number) => {
    http
      .post('/pulse', {
        deviceId:
          process.env.HEARTBEAT_CLIENT_ID || fallback.HEARTBEAT_CLIENT_ID,
        type: 'BEAT',
      })
      .then(() => {
        console.info(getTimestamp() + ' - beat #' + count + ': successful');
      })
      .catch((error) => {
        console.error(
          getTimestamp() + ' - beat #' + count + ': failed - ' + error,
        );
      });
  },
);

function getTimestamp() {
  return date.format(
    new Date(),
    process.env.HEARTBEAT_CLIENT_DATE_FORMAT ||
      fallback.HEARTBEAT_CLIENT_DATE_FORMAT,
  );
}
