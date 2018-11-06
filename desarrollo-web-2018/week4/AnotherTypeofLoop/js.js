/*	
	*	Programming	Quiz:	Another	Type	of	Loop	(6-8)	
	*	
	*	Use	the	existing	`test`	variable	and	write	a	`forEach`	loop	
	*	that	adds	100	to	each	number	that	is	divisible	by	3.	
	*	
	*	Things	to	note:	
	*		-	you	must	use	an	`if`	statement	to	verify	code	is	divisible	
by	3	
	*		-	you	can	use	`console.log`	to	verify	the	`test`	variable	
when	you're	finished	looping	
	*/

	var	test	=	[12,	929,	11,	3,	199,	1000,	7,	1,	24,	37,	4,	19,	300,	 	 	
3775,	299,	36,	209,	148,	169,	299,	6,	109,	20,	58,	139,	59,	3,	1,		
139];		

function forEach(){
	for(x=0;x<test.length;x++){
		var number = test.slice(x,x+1);
		if(number%3==0){number=parseInt(number)+100;}
		console.log(number);
	}
}

function forEach2(){
	for(x=0;x<test.length;x++){
		var number = test.slice(x,x+1);
		if(number%3==0){number=parseInt(number)+100;test.fill(number,x,x+1)}
		console.log(number);
	}
}

test.forEach(function(number){
	if(number%3===0){console.log(number+100)}
		else{console.log(number)}

});