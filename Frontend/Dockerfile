ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

COPY . /app

WORKDIR /app

RUN npm install


EXPOSE 3000

CMD ["npm", "start"]
