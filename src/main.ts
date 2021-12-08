import dotenv from 'dotenv';
import * as heartbeats from 'heartbeats';
import axios from 'axios';
import { fallback } from './fallback-values';
import date from 'date-and-time';

dotenv.config();
const heart = heartbeats.createHeart(toMilliSec(1));
const intervalInSec = getInterval();

const http = axios.create({
  baseURL:
    process.env.HEARTBEAT_SERVER_BASE_URL || fallback.HEARTBEAT_SERVER_BASE_URL,
  timeout: toMilliSec(intervalInSec),
});

heart.createEvent(intervalInSec, (count: number) => {
  http
    .post('/pulse', {
      deviceId: process.env.HEARTBEAT_CLIENT_ID || fallback.HEARTBEAT_CLIENT_ID,
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
});

function getInterval(): number {
  if (process.env.HEARTBEAT_CLIENT_INTERVAL) {
    return parseInt(process.env.HEARTBEAT_CLIENT_INTERVAL);
  }

  return fallback.HEARTBEAT_CLIENT_INTERVAL;
}

function getTimestamp(): string {
  return date.format(
    new Date(),
    process.env.HEARTBEAT_CLIENT_DATE_FORMAT ||
      fallback.HEARTBEAT_CLIENT_DATE_FORMAT,
  );
}

function toMilliSec(val: number): number {
  return val * 1000;
}
