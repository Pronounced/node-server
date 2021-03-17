FROM node:latest
WORKDIR D:\GitHub\my-new-app\node-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]