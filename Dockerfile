FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable

# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
