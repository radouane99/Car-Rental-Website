ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

COPY . /app

WORKDIR /app

RUN touch webpack.config.js && npm install path-browserify os-browserify && npm install && npm install --save path-browserify os-browserify && npx webpack --config webpack.config.js





EXPOSE 3000

CMD ["npm", "start"]
