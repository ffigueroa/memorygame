FROM node:18.16.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install && \
    yarn cache clean

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
