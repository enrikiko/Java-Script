/*	
	*	Programming	Quiz:	Bank	Accounts	1		
	*/	
var	savingsAccount	=	{	
				balance:	1000,	
				interestRatePercent:	1,	
				deposit:	function	addMoney(amount)	{	
								if	(amount	>	0)	{	
												savingsAccount.balance	+=	amount;	
								}	
				},	
				withdraw:	function	removeMoney(amount)	{	
								var	verifyBalance	=	savingsAccount.balance	-	amount;	
								if	(amount	>	0	&&	verifyBalance	>=	0)	{	
												savingsAccount.balance	-=	amount;	
								}	
				},	
				printAccountSummary(){
					console.log("Welcome!")
					console.log("Your	balance	is	currently	$" + 
						savingsAccount.balance + "	and	your	interest	rate	is	" +
						savingsAccount.interestRatePercent + "%.")
				}
				




};	
console.log(savingsAccount.printAccountSummary());