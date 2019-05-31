const mongoose = require('mongoose');
let connString = 'mongodb://localhost/users';
const db = mongoose.connection;
mongoose.connect(connString);

db.on('error',function(){
console.log("Error al conectarse a Mongo");
});

db.once('open', function() {
console.log("Conectado a MongoDB");
});

// definicion de esquema del artículo
const deviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
});

// definicion del modelo de dato de nuevos articulos
let myDevice = mongoose.model('User', deviceSchema);

module.exports = {

   getDevice: () => { return myDevice.find() },

   getDeviceByName: (Name) => { return myDevice.find({name: Name})},

   getDeviceById: (id) => { return myDevice.findById(id)},

   newDevice: (Name, Status, Description) => {
     let device = new myDevice(
       {
         name: Name,
         status: Status,
         description: Description
       });
     device.save(function(err, result) {
       if (err) throw err;
       if(result) {
         console.log(result);
       }
     });
   },

   getIdbyName: async function(Name){
     async function getList(Name){
        return myDevice.find({name: Name})
     }
     var list = await getList(Name)
     if (list.length > 0) {
       var device = list[0]
       var id = device._id
       return id
     }else {
       return null
     }
   },

   getIpbyName: async function(Name){
     async function getList(Name){
        return myDevice.find({name: Name})
     }
     var list = await getList(Name)
     if (list.length > 0) {
       var device = list[0]
       var ip = device.description
       return ip
     }else {
       return null
     }
   },

   updateDevice: (Id, Status) => {
    return myDevice.findById(Id, function(err, result) {
       if (err) throw err
       if(result){
         result.status = Status
         result.save()
         console.log(result)
       }
     });
   },
   
   updateDeviceIp: (Id, Ip) => {
    return myDevice.findById(Id, function(err, result) {
       if (err) throw err
       if(result){
         result.description = Ip
         result.save()
         console.log(result)
       }
     });
   },

   removeDeviceByName: (Name) => {
    return myDevice.remove({name: Name}, function(err, result) {
      if (err) throw err
      if(result){
        console.log(result)
        }
      });
    }

}
