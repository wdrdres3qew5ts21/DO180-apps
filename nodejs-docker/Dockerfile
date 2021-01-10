FROM node:12-buster-slim as install_dependency
WORKDIR /app
COPY package.json /app/
RUN npm install

FROM node:12-buster-slim 
WORKDIR /app
COPY --from=install_dependency  /app   /app
COPY  app.js /app
EXPOSE 8080
CMD [ "node", "app.js" ]

