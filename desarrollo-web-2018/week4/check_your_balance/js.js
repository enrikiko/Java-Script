var checkBalance =true;
var isActive=true;
var balance=-40;

document.getElementById("text").innerHTML = "Wellcome to ATM"+'<br/>'+"Do you want to check your balance?"+'<br/>'+"Yes/No"
document.getByElementId("input").innerHTML=checkBalance;
document.getElementById("input").addEventListener("Search", function(){
    document.getElementById("input").innerHTML = checkBalance;
});

//checkBalance=prompt("Check your balance");
if(checkBalance=="Yes"||checkBalance=="yes"||checkBalance=="y"){
if(isActive&&balance>0){document.write("Your balance is $"+balance+".");}
else if(!isActive){document.write("Your account is no longer active");}
else if(balance>=0){document.write("Your account is empty");}
else if(balance==0){document.write("Your account is empty");}
else {document.write("Your balance is negative.Please contact bank.");}
}
else {document.write("Thank you. Have a nice day!");}


