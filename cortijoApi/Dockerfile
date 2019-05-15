FROM enriqueramosmunoz/rolling:mongo
RUN mkdir /root/node
WORKDIR /root/node
COPY . .
RUN apt-get update
RUN apt update
RUN npm install
# RUN mongod --quiet
# ENTRYPOINT ['node', 'server.js']
