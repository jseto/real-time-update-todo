FROM node:lts
WORKDIR /home/node/app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

ENV PORT=8080
EXPOSE 8080
EXPOSE 3000

CMD [ "node", "./dist/backend/server.real-time-update-todo.js" ]
