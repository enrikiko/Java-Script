ID="id"
NAME=$mock_name
IP="192.168.1.50"
STATUS="on"
SERVERIP="192.168.1.50:3371"
echo "$SERVERIP"/new/"$NAME/$STATUS/$IP$mock_port"
RES=$(curl "$SERVERIP"/new/"$NAME/$STATUS/$IP$mock_port")
echo $RES
