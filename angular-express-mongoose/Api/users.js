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
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  select: {
    type: String,
    required: true
  },
  subscribe: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  postCode: {
    type: String,
    required: false
  },
  region: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  observacion: {
    type: String,
    required: false
  },
});

// definicion del modelo de dato de nuevos articulos
let userModel = mongoose.model('User', usersSchema);

module.exports = {

   getUsers: () => { return userModel.find() },
   getUserByEmail: (Email) => { return userModel.find({email: Email})},
   getUserByDni: (Dni) => { return userModel.find({dni: Dni})},
   newUser: (Name, Email, Dni, Select, Subscribe, Address, PostCode, Region, City, Country, Observacion) => {
     let user = new userModel(
       {
         name: Name,
         email: Email,
         dni: Dni,
         select: Select,
         subscribe: Subscribe,
         address: Address,
         postCode: PostCode,
         region: Region,
         city: City,
         country: Country,
         observacion: Observacion
       });
     user.save(function(err) {
       if (err) throw err;
       else {
         return('User Created successfully');
       }
     });
   },
   updateUser: (id, Name, Email, Dni, Select, Subscribe, Address, PostCode, Region, City, Country, Observacion) => {
     userModel.findById(id, function(err, result) {
       if (err) throw err;
       if(result){
         result.name = Name;
         result.email = Email
         result.dni = Dni;
         result.select = Select;
         result.subscribe = Subscribe;
         result.address = Address;
         result.postCode = PostCode;
         result.region = Region;
         result.city = City;
         result.country = Country;
         result.observacion = Observacion;
         result.save();
         console.log(result);
       }
     });
   },
   removeUsersById: (id) => {
    userModel.findByIdAndRemove(id, function(err, result) {
      if (err) throw err;
      if(result){
        console.log("Usuario eliminado.");
        }
      });
    }
}
