FROM node:8
RUN mkdir shell
WORKDIR /root/shell
RUN apt update
COPY index.js ./
COPY package.json ./
COPY init.sh ./
RUN npm install
ENTRYPOINT ["sh", "init.sh"]
# COPY . .
# WORKDIR /usr/src/app/vue
# RUN npm install
# CMD [ "npm", "run", "dev" ]
