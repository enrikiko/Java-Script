/*	
	*	Programming	Quiz:	Facebook	Friends	
	*/	
	var facebookProfile = {
				name:"",
				friends:0,
				messages:["hola","adios"],
				postMessage:function(message){facebookProfile.messages.push(message);},
				deleteMessage:function(index){
					arrayMeassages = facebookProfile.messages;
					if(arrayMeassages.includes(index)){
					pos 				= arrayMeassages.indexOf(index);
					arrayMeassages.splice(pos,1);
					return arrayMeassages;}
				},
				//	if(index)
				addFriend:function(){facebookProfile.friends+=1;},
				removeFriend:function(){facebookProfile.friends-=1;},
	}