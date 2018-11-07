FROM dockerhub.gemalto.com/gemalto/alpine.nodejs
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 80
