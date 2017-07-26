document.body.querySelector(".start").addEventListener("click",start);

function start () {

	if((document.body.querySelector(".start").myAttribyte==="0")){
		return;
	}

	document.body.querySelector(".start").myAttribyte="0";


	var minute=document.body.querySelector(".minute");
	var seconds=document.body.querySelector(".seconds");
	var mseconds=document.body.querySelector(".mseconds");

	

	timmerIdMsseconds=setInterval(magnification, 1, mseconds,1);
	timmerIdSeconds=setInterval(magnification, 1000, seconds,2);
	timmerIdMinute=setInterval(magnification, 60000, minute,3);


	 function stop () {
	 	document.body.querySelector(".start").myAttribyte="1";
		clearInterval(timmerIdMsseconds);
		clearInterval(timmerIdSeconds);
		clearInterval(timmerIdMinute);
	}

	document.body.querySelector(".stop").addEventListener("click", stop);
}

function magnification (element,id) {
	if((id==1 && element.innerHTML>98) || (id==2 && element.innerHTML>58) || (id==3 && element.innerHTML>58)){
		element.innerHTML=00;
	}else { 
		if(+element.innerHTML<10){
			element.innerHTML=+element.innerHTML+1;
		}
		else{
			element.innerHTML=+element.innerHTML+1;
		}
	}
}
