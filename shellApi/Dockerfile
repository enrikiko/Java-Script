FROM node:8
RUN mkdir shell
WORKDIR /root/shell
RUN apt update
RUN apt install git
RUN apt clone
COPY . .
WORKDIR /usr/src/app/vue
RUN npm install
CMD [ "npm", "run", "dev" ]
