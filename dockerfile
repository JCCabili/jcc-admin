FROM --platform=linux/amd64 node:alpine3.16

RUN mkdir -p /app
ENV PORT 3000

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /app

RUN yarn build

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]