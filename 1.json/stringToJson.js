
string = "{\"name\":\"Enrique\", \"surmana\":\"Pilar\"}"
json = JSON.parse(string)
for (key in json) { console.log("{\""+key+"\":\""+json[key]+"\"}")}
