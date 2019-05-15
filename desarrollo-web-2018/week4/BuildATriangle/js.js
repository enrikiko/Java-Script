/*	
	*	Programming	Quiz:	Build	A	Triangle	
	*/	
//	creates	a	line	of	*	for	a	given	length	
function	makeLine(length)	{	
				var	line	=	"";	
				for	(var	j	=	1;	j	<=	length;	j++)	{	
								line	+=	"*	";	
				}	
				return	line	+	"\n";	
}	
function	makeLine2(length)	{	
				var	line	=	"";	
				for	(var	j	=	1;	j	<=	length;	j++)	{	
								line	+=	"*	";	
				}	
				return	line	+	"<br/>";	
}	
//	your	code	goes	here.		Make	sure	you	call	makeLine()	in	your	own	code.	
//	test	your	code	by	uncommenting	the	following	line	
//console.log(buildTriangle(10));
function buildTriangle(width){
	for(var x = 1; x<=width; x++){
		console.log(makeLine(x));
		document.write(makeLine2(x));
	}
}