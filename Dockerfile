FROM node:14.3-alpine
WORKDIR /home/app/api

COPY package.json yarn.lock ./
RUN \
  apk add yarn ffmpeg && \
  yarn install

COPY . .
RUN yarn build

EXPOSE 3030
CMD ["npm", "start"]