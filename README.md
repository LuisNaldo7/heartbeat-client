# Heartbeat-Client

## Run

    npm start "<ID>" "<URL>"

## Run in Docker

build image

    docker build -t luisnaldo7/heartbeat-client:latest .

execute image

    docker run -d -e ID="device-id" -e URL="http://localhost:3000" --rm --name heartbeat-client luisnaldo7/heartbeat-client:latest

run container on boot

    docker run -d -e ID="device-id" -e URL="http://localhost:3000" --restart always --name heartbeat-client luisnaldo7/heartbeat-client:latest

    