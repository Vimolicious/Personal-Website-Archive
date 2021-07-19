FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install \ 
    && npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "serve", "-p", "8080", "-s", "build" ]
