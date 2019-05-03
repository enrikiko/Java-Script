FROM ubuntu:18.04
RUN mkdir /data
RUN mkdir /data/db
WORKDIR /root
COPY . .
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install
RUN apt install -y software-properties-common dirmngr
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
RUN add-apt-repository 'deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main'
RUN apt update
#RUN apt install -y mongodb-org
#RUN mongod
#RUN node serve.js
