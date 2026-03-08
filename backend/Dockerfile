FROM node:20-alpine AS build
# Requerido solo si se necesita compilar algunas dependencias con node-gyp
# RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm ci
WORKDIR /opt/app
COPY . .
RUN npm run build

FROM node:20-alpine
# RUN apk add --no-cache vips-dev
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
