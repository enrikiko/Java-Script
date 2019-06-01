FROM node:8
RUN apt update
RUN apt install curl -y
WORKDIR /usr/src/app
COPY scs/package/. .
RUN npm install
COPY scs/. .
ENTRYPOINT ["sh", "init.sh"]
