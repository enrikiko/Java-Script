/*	
	*	Programming	Quiz	-	Navigating	the	Food	Chain	
*	
	*	Use	a	series	of	ternary	operator	to	set	the	category	to	one	of				
	*	the	following:
	*
	*			-	"herbivore"	if	an	animal	eats	plants	
	*			-	"carnivore"	if	an	animal	eats	animals	
	*			-	"omnivore"	if	an	animal	eats	plants	and	animals	
	*			-	undefined	if	an	animal	doesn't	eat	plants	or	animals	
	*	
	*	Notes	
	*			-	use	the	variables	`eatsPlants`	and	`eatsAnimals`	in	your	
	*	ternary	expressions
	*
	*			-	`if`	statements	aren't	allowed	;-)	
	*/	
//	change	the	values	of	`eatsPlants`	and	`eatsAnimals`	to	test	
//your	code
var	eatsPlants	=	false;	
var	eatsAnimals	=	true;	
var	category	=	function(){
	if(eatsPlants&&eatsAnimals){return  "omnivore"}
	else if(eatsPlants){return "herbivore"}
	else if(eatsAnimals){return "carnivore"}
	else {return undefined}
}
//console.log(category());
document.write('<br/>'+category())


eatsPlants&&eatsAnimals ? console.log("omnivore") : eatsPlants ? console.log("herbivore") : eatsAnimals ? console.log("carnivore") : console.log(undefined)