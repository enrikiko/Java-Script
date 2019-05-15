function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var Viking = function(name) {
  this.name = name;
  this.health = getRandomBetween(90,120);
  this.strength = getRandomBetween(5,20);
  this.age = getRandomInt(60)
  this.cry= 'arrg'
  this.attack = function(opponent) {
    opponent.health = opponent.health-this.strength
  }
  this.shout = function(cry) {
    console.log(this.cry);
  }
}

var Saxon =  function(name) {
   this.name = name;
   this.health = getRandomInt(100);
   this.strength = getRandomInt(20);
   this.attack = function(opponent) {
     opponent.health = opponent.health-this.strength
   }
}

var orda = function(type) {
    var ordaNumber = getRandomBetween(10,100)
    var orda = [];
    var unit;
    var name;
    for ( i = 0; i <= ordaNumber; i++){
      name = i;
      unit = new type(name);
      orda.push(unit)
      }
      return orda
    }

var ordaSaxon1 = orda(Saxon);
var ordaSaxon2 = orda(Saxon);
var ordaSaxon3 = orda(Saxon);
var ordaSaxon4 = orda(Saxon);
var ordaSaxon5 = orda(Saxon);
var ordaViking = orda(Viking);

var jarl = function(orda) {
  var list=[]
  for(var i=0;i<orda.length;i++)
  {
    if (orda[i].age<45&&orda[i].age>15)
    {
     orda[i].strength = orda[i].strength + 10;
     orda[i].weapon = ['sward']
     list.push(orda[i])
    }
  }
  return list
}

 var Pit = function(opponent1,opponent2){
   while(opponent1.health > opponent2.strength && opponent2.health > opponent1.strength)
   {
       opponent1.Attack(opponent2);
       if(opponent1.health <= opponent2.strength){break}
       opponent2.Attack(opponent1);
       if(opponent2.health <= opponent1.strength){break}
       console.log(opponent1.health);
       console.log(opponent2.health);
    }
   console.log(opponent1.health);
   console.log(opponent2.health);
   if(opponent1.health <= opponent2.strength){console.log(opponent2.Name+' wins');}
   else if(opponent2.health <= opponent1.strength){console.log(opponent1.Name+' wins');}
  }


function jenyFuncion() {
  // body...

  if (opponent1.health <= opponent2.strength) {
      console.log(opponent2.Name+' wins');
      vikingsThatDied.push(opponent1);
      vikings = vikings.slice(1, vikings.length);
      console.log( winner + '');
    }

    if (opponent2.health <= opponent1.strength) {
      console.log(opponent1.Name+' wins');
      saxonsThatDied.push(opponent2);
      saxons = saxons.slice(1, saxons.length);
      console.log( winner + '');
    }
}

var Battle = function (opponent1, opponent2){
  //Grito de ballata
  for(i=0;i<opponent1.length;i++){
    opponent1[i].shout();
  }
  var opponent1Death=0;
  var opponent2Death=0;
  var j;
  for(i=0;i<opponent1.length;i++){
    j=i;
    while(j>=opponent2.length&&opponent2.length!=0){j = j - opponent2.length}
    if (opponent2.length>0){opponent1[i].attack(opponent2[j]);
        if (opponent2[j].health<=0){
          opponent2Death++;
          console.log('the soldier number '+j+' in the 2º team has dead');
          opponent2.splice(j,1)}
        }
      }
  for(i=0;i<opponent2.length;i++){
    j=i;
    while(j>=opponent1.length&&opponent1.length!=0){j = j - opponent1.length}
    if (opponent1.length>0){opponent2[i].attack(opponent1[j]);
        if (opponent1[j].health<=0){
          opponent1Death++;
          console.log('the soldier number '+j+'in the 1º team has dead');
          opponent1.splice(j,1)}
        }
      }
  if (opponent1.length==0){console.log('Equipo 2 wins \n ha abido '+ opponent1Death +' en el equipo 1 y '+opponent2Death+' en el equipo 2 \n '+ opponent1Death/opponent2Death);}
  if (opponent2.length==0){console.log('Equipo 1 wins \n ha abido '+ opponent1Death +' en el equipo 1 y '+opponent2Death+' en el equipo 2 \n '+ opponent1Death/opponent2Death);}
    }
