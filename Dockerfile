FROM node:10
RUN mkdir -p /app
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json /app/
RUN npm install && mv /app/node_modules /node_modules
COPY . .
EXPOSE 8080
CMD [ "nodemon" ]
