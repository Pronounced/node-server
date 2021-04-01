FROM node:latest
WORKDIR D:\GitHub\my-new-app\node-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD [ "node", "index.js" ]