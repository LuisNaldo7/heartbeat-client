FROM node:16.13.1

ENV HEARTBEAT_CLIENT_ID="518cb4b7-058b-44c1-9d4a-f05a546b4f21"
ENV HEARTBEAT_CLIENT_INTERVAL=10
ENV HEARTBEAT_CLIENT_DATE_FORMAT="YYYY-MM-DD HH:mm:ss:SSS Z"
ENV HEARTBEAT_SERVER_BASE_URL="http://localhost:3000"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json tsconfig*.json ./
RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

# Build app
RUN npm run build

CMD [ "node", "dist/main"]