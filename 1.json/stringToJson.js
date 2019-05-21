
string = "{\"name\":\"Enrique\", \"surmana\":\"Pilar\"}"
json = JSON.parse(string)
json.new="new"
for (key in json) { console.log("{\""+key+"\":\""+json[key]+"\"}")}
