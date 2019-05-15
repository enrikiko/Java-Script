/*	
	*	Programming	Quiz:	Joining	the	Crew	(6-6)	
	*/	
var	captain	=	"Mal";	
var	second	=	"Zoe";	
var	pilot	=	"Wash";	
var	companion	=	"Inara";	
var	mercenary	=	"Jayne";	
var	mechanic	=	"Kaylee";	
var	crew	=	[captain,	second,	pilot,	companion,	mercenary,	
mechanic];	
var	doctor	=	"Simon";	
var	sister	=	"River";	
var	shepherd	=	"Book";	
//	your	code	goes	here
var newCrew = [doctor,sister,shepherd];
function add(){
	for(x=0;x<3;x++){crew.push(newCrew[x])}
}