FROM node:8
RUN mkdir shell
WORKDIR /root/shell
RUN apt update
RUN apt install git
RUN git clone https://github.com/enrikiko/Java-Script
WORKDIR /root/shell/Java-Script/shellApi
RUN git pull
RUN npm install
#ENTRYPOINT ['node', 'index.js']
# COPY . .
# WORKDIR /usr/src/app/vue
# RUN npm install
# CMD [ "npm", "run", "dev" ]
