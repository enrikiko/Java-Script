NAME=$1
PORT=$2
docker run -p "$PORT":3000 --name "$NAME" mock_name=${NAME} mock_port=${PORT} -d mock
