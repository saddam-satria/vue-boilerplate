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

RUN bun run build

FROM oven/bun:latest AS prod

WORKDIR /vue-boilerplate

COPY public ./public

ENV DEBUG=false

COPY --from=builder /vue-boilerplate/build /vue-boilerplate/build

COPY server.js ./

CMD [ "bun", "server.js" ]