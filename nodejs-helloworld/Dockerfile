FROM node:12-buster-slim as install_dependency
WORKDIR /app
COPY package.json /app/
RUN npm install

FROM install_dependency 
WORKDIR /app
COPY --from=install_dependency  /app   /app
COPY  app.js /app
CMD [ "node", "app.js" ]

