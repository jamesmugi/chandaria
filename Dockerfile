FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "preview"]