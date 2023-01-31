FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm install
RUN npm install -g nodemon

COPY . /usr/src/app

EXPOSE 5001
EXPOSE 5757

CMD [ "npm", "run", "dev" ]
