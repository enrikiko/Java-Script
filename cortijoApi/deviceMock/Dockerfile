FROM node:8
RUN apt update
RUN apt install curl -y
WORKDIR /usr/src/app
COPY scs/. .
RUN npm install
#ENTRYPOINT ["sh", "init.sh"]
