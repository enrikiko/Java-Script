const functions = require('firebase-functions');
const express = require("express");
const admin = require("firebase-admin")

const app = express();
// const qwe = express();
admin.initializeApp(functions.config().firebase);


// app.get('/writes', (request, response) => {
//   console.log('writing')
//   // response.send('hola')
//     admin.database().ref('homes').push().set('hola')
//     response.send('ok')
//      }
//    );
// app.get('/read', (request, response) => {
//  console.log('reading')
//    admin.database().ref('homes').once("value", snap => {
//       var res = snap.val();
//       response.send(res)
//     })
//   }
// );
// app.get('/trigger', (request, response) => {
//  console.log('Some one trigger this function')
//  admin.database().ref('users').once("value", snap => {
//
//    //Declaration of variables//--------------------------------->
//        var res = snap.val();
//        var key;
//        var home=[];
//        var certainly =[];
//        var desiredObj = [];
//        var desiredArray = [];
//        var currentArray = [];
//        var citiesList = [];
//        var uidList = [];
//        var countDown;
//
//     //Convert DB in Arraies//--------------------------------->
//        for(key in res)
//        {
//          var desiredObj = {
//            id: key,
//            city: res[key].dHome
//          }
//          var currentObj = {
//            id: key,
//            city: res[key].cHome
//          }
//          desiredArray.push(desiredObj)
//          currentArray.push(currentObj)
//        }
//
//     //Jokers Functions//--------------------------------->
//        function checkElementInList(element,list){
//          if(list.includes(element)){
//            list.splice(list.indexOf(element),1)
//          }
//          else {
//            list.push(element)
//          }
//          return list
//        }
//
//        function checkCityInCurrentArray(element,citiesList,countDown,uidList){
//          var thisCity = element.city;
//          var thisId = element.id;
//          var thoseCity = res[thisId].cHome;
//          var listOfCities = checkElementInList(thisCity,citiesList);
//          var listOfCities = checkElementInList(thoseCity,citiesList);
//          var thisUidList = uidList;
//          thisUidList.push(thisId);
//          var id = '';
//          var city;
//          var data;
//          countDown--;
//          var newElement;
//          var citiesList =[];
//          currentArray.forEach( (item) => {
//            citiesList.push(item.city)
//          })
//          if(listOfCities.length<=0){
//            data = {thisUidList}
//            return data
//          }
//          else if(countDown==0){
//            var answer = 'Lack of element in exchange chain'
//            data = {answer,thisUidList,listOfCities}
//            return data
//          }
//           else if(citiesList.includes(thisCity)){
//             id = currentArray[citiesList.indexOf(thisCity)].id
//             city = res[id].dHome
//             newElement = {id,city}
//             data = checkCityInCurrentArray(newElement,listOfCities,countDown,thisUidList)
//             return data
//          }
//          else{
//            var answer = 'no possible solution'
//            data = {answer}
//            return data
//          }
//        }
//     //Execute the functions for each element in DB//------------------>
//        desiredArray.forEach( (city) => {
//          citiesList = [];
//          countDown = 4;
//          uidList = [];
//          certainly.push(checkCityInCurrentArray(city,citiesList,countDown,uidList))
//        })
//     //Write info in DB//----------------------->
//        admin.database().ref('combination').set(certainly)
//     //Send the response//----------------------->
//        response.status(201).send(certainly)
//
//     })
//   }
// );





// exports.icyh = functions.https.onRequest(app)
exports.combinations = functions.database.ref('/users').onUpdate((change, context) => {

  //Declaration of variables//--------------------------------->
      var res = change.after.val();
      var key;
      var home=[];
      var certainly ={};
      var desiredObj = [];
      var desiredArray = [];
      var currentArray = [];
      var citiesList = [];
      var uidList = [];
      var countDown;
      var val;

   //Convert DB in Arraies//--------------------------------->
      for(key in res)
      {
        var desiredObj = {
          id: key,
          city: res[key].dHome
        }
        var currentObj = {
          id: key,
          city: res[key].cHome
        }
        desiredArray.push(desiredObj)
        currentArray.push(currentObj)
      }

   //Jokers Functions//--------------------------------->
      function checkElementInList(element,list){
        if(list.includes(element)){
          list.splice(list.indexOf(element),1)
        }
        else {
          list.push(element)
        }
        return list
      }

      function checkCityInCurrentArray(element,citiesList,countDown,uidList){
        var thisCity = element.city;
        var thisId = element.id;
        var thoseCity = res[thisId].cHome;
        var listOfCities = checkElementInList(thisCity,citiesList);
        var listOfCities = checkElementInList(thoseCity,citiesList);
        var thisUidList = uidList;
        thisUidList.push(thisId);
        var id = '';
        var city;
        var data;
        countDown--;
        var newElement;
        var citiesList =[];
        currentArray.forEach( (item) => {
          citiesList.push(item.city)
        })
        if(listOfCities.length<=0){
          data = {thisUidList}
          return data
        }
        else if(countDown==0){
          var answer = 'Lack of element in exchange chain'
          data = {answer}
          return data
        }
         else if(citiesList.includes(thisCity)){
           id = currentArray[citiesList.indexOf(thisCity)].id
           city = res[id].dHome
           newElement = {id,city}
           data = checkCityInCurrentArray(newElement,listOfCities,countDown,thisUidList)
           return data
        }
        else{
          var answer = 'no possible solution'
          data = {answer}
          return data
        }
      }
   //Execute the functions for each element in DB//------------------>
      desiredArray.forEach( (city) => {
        citiesList = [];
        countDown = 4;
        uidList = [];
        val = city.id
        certainly[val] = (checkCityInCurrentArray(city,citiesList,countDown,uidList))
      })
   //Write info in DB//----------------------->
      admin.database().ref('combination').update(certainly)
   //Send the response//----------------------->
      // response.status(201).send(certainly)

   })
