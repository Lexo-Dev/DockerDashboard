FROM node:21-alpine

RUN apk update
RUN apk add build-base python3
RUN apk add docker

WORKDIR /src

# Install backend dependencies
COPY Backend/package.json Backend/package.json
RUN cd Backend && npm install

# Install client dependencies
COPY Client/package.json Client/package.json
RUN cd Client && npm install

COPY Backend Backend
COPY Client Client

# Production build of the client
RUN cd Client && npm run build

RUN mv Client/build Backend/web

COPY app.js app.js

ENTRYPOINT ["node", "/src/app.js"]

EXPOSE 3230
