import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = null;
  email: string = null;
  dni: string = null;
  subscripted: string = null;
  select: string = null;
  address: string = null;
  postCode: string = null;
  region: string = null;
  city: string = null;
  country: string = null;
  observacion: string = null;
  id: string = null;
  update: boolean = false;
  sent: boolean = false;
  emptyName: boolean = false;
  emptyEmail: boolean = false;
  emptyDni: boolean = false;
  emptySelect: boolean = false;
  notFormatDni: boolean = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {}

  submit(){
    if(!this.name){ this.emptyName = true}
    else{this.emptyName = false}
    if(!this.email){ this.emptyEmail = true}
    else{this.emptyEmail = false}
    if(!this.dni){ this.emptyDni = true }
    else{
      this.emptyDni = false
      if(this.validar(this.dni))
        {this.notFormatDni = false}
      else{this.notFormatDni = true}
      }
    if(!this.select){ this.emptySelect = true}
    else{this.emptySelect = false}
    if(!this.emptyName && !this.emptyEmail && !this.emptyDni && !this.emptySelect)
    {
    if(this.update){this.updateUser(this.id)}
    else{this.getUserByEmail(this.email)}
    }
  }
  getUserByEmail(email){
    let url = "http://88.7.71.88:3379/api/user/email/" + email
    this.http.get(url).subscribe( data => {
      if(Object.keys(data).length == 1){
        this.name = data[0].name
        this.email = data[0].email
        this.dni = data[0].dni
        this.subscripted = data[0].subscripted
        this.select = data[0].select
        this.address = data[0].address
        this.postCode = data[0].postCode
        this.region = data[0].region
        this.city = data[0].city
        this.country = data[0].country
        this.observacion = data[0].observacion
        this.id = data[0]._id
        this.update = true
        this.sent = false
        // console.log(this.id)
      }
      else {
        // console.log('not email found')
        if(this.update){this.updateUser(this.id)}
        else{this.getUserByDni(this.dni)}
      }
    })
  }
  getUserByDni(dni){
    let url = "http://88.7.71.88:3379/api/user/dni/" + dni
    this.http.get(url).subscribe( data =>
    {
      if(Object.keys(data).length == 1){
        this.name = data[0].name
        this.email = data[0].email
        this.dni = data[0].dni
        this.subscripted = data[0].subscripted
        this.select = data[0].select
        this.address = data[0].address
        this.postCode = data[0].postCode
        this.region = data[0].region
        this.city = data[0].city
        this.country = data[0].country
        this.observacion = data[0].observacion
        this.id = data[0]._id
        this.update = true
        this.sent = false
        // console.log(this.id)
      }
      else {
        // console.log('not dni found')
        this.newUser()
      }
    })
  }
  newUser(){
    let url = "http://88.7.71.88:3379/api/new/user/"
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    let body = new HttpParams()
    .set('name', this.name)
    .set('email', this.email)
    .set('dni', this.dni)
    .set('select', this.select)
    .set('subscripted', this.subscripted)
    .set('address', this.address)
    .set('postCode', this.postCode)
    .set('region', this.region)
    .set('city', this.city)
    .set('country', this.country)
    .set('observacion', this.observacion);
    this.http.post(url, body, {headers}).subscribe( data => console.log(data))
    // console.log('new user sent')
    this.update = false
    this.sent = true
    this.setData()
  }
  updateUser(id){
    let url = "http://88.7.71.88:3379/api/update/user/" + id
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    let body = new HttpParams()
    .set('_id', id)
    .set('name', this.name)
    .set('email', this.email)
    .set('dni', this.dni)
    .set('subscripted', this.subscripted)
    .set('select', this.select)
    .set('address', this.address)
    .set('postCode', this.postCode)
    .set('region', this.region)
    .set('city', this.city)
    .set('country', this.country)
    .set('observacion', this.observacion);
    this.http.post(url, body, {headers}).subscribe( data => console.log(data))
    console.log('update sent')
    this.setData()
    this.update = false
    this.sent = false
  }
  setData(){
    this.name = null;
    this.email = null;
    this.dni = null;
    this.subscripted = null;
    this.select = null;
    this.address = null;
    this.postCode = null;
    this.region = null;
    this.city = null;
    this.country = null;
    this.observacion = null;
  }
  validar(value){
  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  var str = value.toString().toUpperCase();
  if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');
  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;
  if (validChars.charAt(charIndex) === letter) return true;
  return false;
  }
}
