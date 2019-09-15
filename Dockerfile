FROM node:lts
WORKDIR /home/node/app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

ENV PORT=8080
EXPOSE 8080

CMD [ "node", "./dist/backend/server.react-ts-seed.js" ]
