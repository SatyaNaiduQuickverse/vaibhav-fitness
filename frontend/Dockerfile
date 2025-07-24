FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve@14

COPY --from=build /app/dist ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
