FROM node:lts

ENV ID="id"
ENV URL="http://localhost:3000"
ENV INTERVAL=30

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

CMD [ "npm", "start", "${ID}", "${URL}", "${INTERVAL}"]