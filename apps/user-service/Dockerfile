FROM node:lts-alpine AS builder
WORKDIR /app
COPY dist/apps/user-service .
RUN npm install --production


FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
