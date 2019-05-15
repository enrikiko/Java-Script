/*	
	*	Programming	Quiz:	Donuts	Revisited
*/	
var	donuts	=	[	
				{	type:	"Jelly",	cost:	1.22	},	
				{	type:	"Chocolate",	cost:	2.45	},	
				{	type:	"Cider",	cost:	1.59	},	
				{	type:	"Boston	Cream",	cost:	5.99	}	
];	
//	your	code	goes	here

function forEach(){
	length = donuts.length;
	for(x=0;x<length;x++){
		console.log(donuts[x].type+"	donuts	cost	$"+donuts[x].cost+"each");
	}
}