# Heartbeat-Client


## Run

Copy .env.example to .env and adjust values.

install dependencies
```bash
npm i
```

start app
```bash
npm start
```
## Run in Docker

pull image
```bash
docker pull luisnaldo7/heartbeat-client:latest
```

or build image
```bash
docker build -t luisnaldo7/heartbeat-client:latest .
```

execute container
```bash
docker run -d -e HEARTBEAT_CLIENT_ID="device-id" -e HEARTBEAT_SERVER_BASE_URL="http://localhost:3000" --rm --name heartbeat-client luisnaldo7/heartbeat-client:latest
```

execute container on boot
```bash
docker run -d -e HEARTBEAT_CLIENT_ID="device-id" -e HEARTBEAT_SERVER_BASE_URL="http://localhost:3000" --restart always --name heartbeat-client luisnaldo7/heartbeat-client:latest
```
    