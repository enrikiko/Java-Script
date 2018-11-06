for(var x=99;x>1;x--){
	document.write('<br/>'+x+"	bottles	of	juice	on	the	wall!	"+x+
		"	bottles	of	juice!	Take	one	down,	pass	it	around... "+x+
		"	bottles	of	juice	on	the	wall!	")	
}
document.write('<br/>'+"1"+"	bottle	of	juice	on	the	wall!	"+"1"+
		"	bottle	of	juice!	Take	one	down,	pass	it	around... "+"1"+
		"	bottle	of	juice	on	the	wall!	")

document.write('<br/>');document.write('<br/>');
document.write('<br/>');document.write('<br/>');

/*	
	*	Programming	Quiz:	99	Bottles	of	Juice	
	*	
	*	Use	the	following	`while`	loop	to	write	out	the	song	"99	
bottles	of	juice".	
	*	Log	the	your	lyrics	to	the	console.	
	*	
	*	Note	
	*			-	Each	line	of	the	lyrics	needs	to	be	logged	to	the	same	
line.	
	*			-	The	pluralization	of	the	word	"bottle"	changes	from	"2	
bottles"	to	"1	bottle"	to	"0	bottles".	
	*/	
var	num	=	99;	
while	(num>1)	{	
	document.write('<br/>'+num+"	bottles	of	juice	on	the	wall!	"+num+
		"	bottles	of	juice!	Take	one	down,	pass	it	around... "+num+
		"	bottles	of	juice	on	the	wall!	")	
	num--;
}
document.write('<br/>'+num+"	bottle	of	juice	on	the	wall!	"+num+
		"	bottle	of	juice!	Take	one	down,	pass	it	around... "+num+
		"	bottle	of	juice	on	the	wall!	")