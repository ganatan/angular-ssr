FROM node:latest

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

RUN rm -rf node_modules

EXPOSE 4000

CMD ["node", "dist/angular-starter/server/server.mjs"]




# FROM node:latest AS angular-starter
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# FROM nginx:alpine
# COPY --from=angular-starter /app/dist/angular-starter/browser /usr/share/nginx/html
# COPY --from=angular-starter /app/dist/angular-starter/server /usr/share/nginx/html/server
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
