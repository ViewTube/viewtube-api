FROM node:14.3-alpine
WORKDIR /home/app/api

COPY . .
RUN \
  apk add yarn && \
  yarn install && \
  yarn build

EXPOSE 3030
CMD ["npm", "start"]