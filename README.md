# Heartbeat-Client

To monitor the online state of devices the Heartbeat-Client needs to be installed on the respective machine. It continuously sends notifications to the [Heartbeat-Server](https://github.com/LuisNaldo7/heartbeat-server).

## Components

[Heartbeat-Client](https://github.com/LuisNaldo7/heartbeat-client)

[Heartbeat-Server](https://github.com/LuisNaldo7/heartbeat-server)

[Heartbeat-Alert](https://github.com/LuisNaldo7/heartbeat-alert)

[Heartbeat-Dashboard](https://github.com/LuisNaldo7/heartbeat-dashboard)

![Diagram](https://github.com/LuisNaldo7/heartbeat-local-dev-env/blob/main/docs/components.png?raw=true)

---
A full integration can be set up using the [Local Development Environment](https://github.com/LuisNaldo7/heartbeat-local-dev-env).
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
    