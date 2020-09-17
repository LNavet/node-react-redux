FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "sequelize-cli", "db:migrate" ]
CMD [ "npm", "start" ]