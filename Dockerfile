FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY . .

RUN yarn 

CMD [ "yarn", "dev" ]