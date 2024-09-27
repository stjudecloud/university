FROM node:15-buster

ENV NODE_ENV=development
RUN apt-get update && apt-get install -y libvips-dev

WORKDIR /app
