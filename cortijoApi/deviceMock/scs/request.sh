ID="id"
NAME="Enrique"
IP="192.168.1.50:8000"
STATUS="true"
SERVERIP="192.168.1.50:3371"
DESCRIPTION="A_text_is_any_object_that_can_be_read,_including:_Documents:_Religious_text,_a_writing_that_a_religious_tradition_considers_to_be_sacred"
RES=$(curl "$SERVERIP"/device/new/"$NAME/$STATUS/$IP")
echo $RES
