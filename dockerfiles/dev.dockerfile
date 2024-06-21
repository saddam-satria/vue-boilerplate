FROM oven/bun:latest AS builder

WORKDIR /vue-boilerplate

COPY package*.json ./

COPY bun*.lockb ./

RUN bun install

COPY tailwind.config.js ./

COPY postcss.config.js ./

COPY tsconfig.json ./

COPY tsconfig.node.json ./

COPY vite.config.mts ./

COPY vite-production.config.mts ./

COPY src ./src

COPY public ./public


CMD [ "bun" ,"start" ]