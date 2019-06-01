NAME=$1
PORT=$2
docker run -p "$PORT":3000 --name "$NAME" -d mock 
