/*	
	*	Programming	Quiz:	Factorials
*/	
//	your	code	goes	here	
var factorial = function (number){
	var certain = 1;
	for(var x = number;x>=1;--x){
		certain *= x;
	}
	return certain;

}
for(var x = 0; x<=100; x++){
document.write('<br/>'+x+"! = "+factorial(x))
}