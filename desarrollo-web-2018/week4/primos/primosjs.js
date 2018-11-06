
function primo(n)
{
	document.write('<br/>');
	document.write("Searching...");
	var n,p;
	var w=3;
	var cousin = [2,3,5,7];
	var c = 3;
	var isTrue;
	for(x=0;x<=c;x++)
		{document.write('<br/>'+cousin[x]);}
	document.write('<br/>'+"Hasta aqui es facil...");
	for(x=8;x<=n;x++)
	{
		isTrue=true;
		p=0;
		while(isTrue)
		{
			if(x%cousin[p]==0){isTrue=false;}else{p++;}
			if(p>=(x-1)){cousin.push[x];w++;document.write('<br/>'+x);isTrue=false;}
		}
	}
}