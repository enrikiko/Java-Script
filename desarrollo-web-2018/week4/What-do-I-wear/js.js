/*
*	Programming	Quiz	-	What	do	I	wear
*/	
//	change	the	values	of	`shirtWidth`,	`shirtLength`,	and	
//	`shirtSleeve`	to	test	your	code	//to	test	your	code
var	shirtWidth	= 23;	
var	shirtLength	= 30;	
var	shirtSleeve	= 8.71;	
//	your	code	goes	here	
if(shirtWidth<20 & shirtLength<29 & shirtSleeve<8.38){document.write("S"+'<br/>');}
else if (shirtWidth<22 & shirtLength<30 & shirtSleeve<8.63){document.write("M"+'<br/>');}
else if (shirtWidth<24 & shirtLength<31 & shirtSleeve<8.88){document.write("L"+'<br/>');}
else if (shirtWidth<26 & shirtLength<32 & shirtSleeve<9.63){document.write("XL"+'<br/>');}
else if (shirtWidth<28 & shirtLength<33 & shirtSleeve<10.13){document.write("XXL"+'<br/>');}
else if (shirtWidth>=28 & shirtLength>=33 & shirtSleeve>=10.13){document.write("XXXL"+'<br/>');}
else {document.write("N/A");}

