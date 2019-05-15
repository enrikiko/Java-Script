curl -v -X GET \
  'https://kzc6v71u5k.execute-api.eu-central-1.amazonaws.com/prod/form' \
  -H 'content-type: application/json' \
  -H 'day: Thursday' \
  -H 'x-amz-docs-region: us-west-2' \
  -d '{
	"text": "John"
}'
