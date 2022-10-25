FROM node:12.13-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && rm -rf node_modules && npm install

COPY . .

COPY ./dist ./

CMD ["npm", "run", "start:dev"]