FROM node:lts

ENV HEARTBEAT_CLIENT_ID="518cb4b7-058b-44c1-9d4a-f05a546b4f21"
ENV HEARTBEAT_CLIENT_INTERVAL=30
ENV HEARTBEAT_SERVER_BASE_URL="http://localhost:3000"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

CMD [ "npm", "start"]