FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn 

CMD [ "yarn", "dev" ]