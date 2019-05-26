function get(arg) { return arg; }
string = "{\"name\":\"Enrique\", \"surmana\":\"Pilar\"}"
json = JSON.parse(string)
json.new="new"
newJson={}
for (key in json) { console.log("{\""+key+"\":\""+json[key]+"\"}")}
for (key in json) { newJson.(get(key))=json[key] }
console.log(newJson);
