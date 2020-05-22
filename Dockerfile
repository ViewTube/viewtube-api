FROM node:14.2-alpine3.11
WORKDIR /usr/src/app

COPY . .
RUN \
  apk add yarn && \
  yarn install && \
  yarn build

EXPOSE 3030
CMD ["npm", "start"]