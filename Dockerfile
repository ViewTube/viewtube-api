FROM node:14.5 AS build
WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:14.5-alpine
WORKDIR /home/app/

COPY --from=build /build ./

EXPOSE 3030
CMD ["npm", "start"]