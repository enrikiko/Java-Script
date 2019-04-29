url="http://88.7.71.88:3377"
device="testFP"
echo
echo "Create New Device"
curl -X GET $url"/device/new/"$device"/Status/Description"
echo
echo
echo "View Device"
curl -X GET $url"/device/name/"$device
echo
echo
echo "Change Device Status"
curl -X GET $url"/device/update/"$device"/NewStatus"
echo
echo
echo "Create An Existing Device"
curl -X GET $url"/device/new/"$device"/Status/Description"
echo
echo
echo "Remove Device"
curl -X GET $url"/device/remove/"$device
echo
echo
echo "Remove Device"
curl -X GET $url"/device/remove/"$device
echo
echo
