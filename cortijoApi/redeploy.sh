docker rm -f mock cortijo-api-2
git pull
docker build -t cortijo-api-2 .
docker run -d -p 3371:3000 --name cortijo-api-2 cortijo-api-2
sh createMock.sh
