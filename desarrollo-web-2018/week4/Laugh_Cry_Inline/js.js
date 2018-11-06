/*	
	*	Programming	Quiz:	Laugh	
	*/	

var	laugh	=	function(certain){
	var has= "";
	for(var x = 0; x<certain; x++)
	{has+="ha";}
	has+="!";
	return has
}
var	cry	=	function(){return "boohoo!"}


function emotions(text,sound){console.log(text+sound);}
console.log(laugh(10));	
console.log(cry());	