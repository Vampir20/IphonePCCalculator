let choice=["rock", "scissors", "paper"];
let answer;
let userChoice;
let computerChoice;
let userCounter=0;
let computerCounter=0;
let rock = new Audio('rock.mp3')
let paper = new Audio('paper.mp3')
let hi = new Audio('hi.mp3')

function userChoiceFunc(argument){
	//alert('u choosed '+argument);
	userChoice=argument;
	computerChoiceFunc();
	answer=userChoice+computerChoice;
	//alert(answer);
	checkAnswer()
	document.getElementById(argument).style.opacity=0;

	if (argument=='rock') {
		document.getElementById('pyt').src="rock.jpg";
		document.getElementById('pyt').style.opacity=1;
		rock.play()
	}

	if (argument=='paper') {
		document.getElementById('pyt').src="paper.jpg";
		document.getElementById('pyt').style.opacity=1;
		paper.play()
	}
	
	if (argument=='scissors') {
		document.getElementById('pyt').src="scissors.jpg";
		document.getElementById('pyt').style.opacity=1;
		hi.play()
	}
	setTimeout(restart,2000)
}

function computerChoiceFunc(argument){
	random=Math.floor(Math.random() * 3);
	computerChoice=choice[random];
	//alert('computer choosed ' + computerChoice);
	if (computerChoice=='rock') {
		document.getElementById('comp').src="rock.jpg";
		document.getElementById('comp').style.opacity=1;
	}
	if (computerChoice=='paper') {
		document.getElementById('comp').src="paper.jpg";
		document.getElementById('comp').style.opacity=1;
	}
	if (computerChoice=='scissors') {
		document.getElementById('comp').src="scissors.jpg";
		document.getElementById('comp').style.opacity=1;

	}
	
}

function checkAnswer(argument){
	if (answer=="rockrock"){
		document.getElementById("winner").innerHTML="dead heat";
		setTimeout(show,500)
		setTimeout(hide,1500)

	}


	if (answer=="rockpaper"){
		document.getElementById("winner").innerHTML="computer wins";
		setTimeout(show,500)
		setTimeout(hide,1500)
		computerCounter++;
		document.getElementById("termux").innerHTML=computerCounter;
	}

	if (answer=="rockscissors"){
		document.getElementById("winner").innerHTML="Human wins";
		setTimeout(show,500)
		setTimeout(hide,1500)
		userCounter++;
		document.getElementById("hack").innerHTML=userCounter;
	}
	
	
	if (answer=="paperrock"){
		document.getElementById("winner").innerHTML="Human wins";
		setTimeout(show,500)
		setTimeout(hide,1500)
		userCounter++;
		document.getElementById("hack").innerHTML=userCounter;
	}
	
	
	if (answer=="scissorsrock"){
		document.getElementById("winner").innerHTML="computer wins";
		setTimeout(show,500)
		setTimeout(hide,1500)
		computerCounter++;
		document.getElementById("termux").innerHTML=computerCounter;
	}
	
	if (answer=="paperpaper"){
		document.getElementById("winner").innerHTML="dead heat";
		setTimeout(show,500)
		setTimeout(hide,1500)
	}
	
	
	if (answer== "paperscissors") {
		document.getElementById("winner").innerHTML="computer wins";	
		setTimeout(show,500)
		setTimeout(hide,1500)
		computerCounter++;
		document.getElementById("termux").innerHTML=computerCounter;
	}
	



	if (answer=="scissorsrock") {
		document.getElementById("winner").innerHTML="computer wins";	
		setTimeout(show,500)
		setTimeout(hide,1500)
		computerCounter++;
		document.getElementById("termux").innerHTML=computerCounter;

	}
	

	if (answer=="scissorspaper") {
		document.getElementById("winner").innerHTML="human wins";	
		setTimeout(show,500)
		setTimeout(hide,1500)
		userCounter++;
		document.getElementById("hack").innerHTML=userCounter;

	}
	

	if (answer=="scissorsscissors") {
		document.getElementById("winner").innerHTML="dead heat";	
		setTimeout(show,500)
		setTimeout(hide,1500)
	}
}	

function show(argument){
	
	document.getElementById("test").style.height="100px";
}

function hide(argument){
	document.getElementById("test").style.height="0px";
}

function restart(argument){
	document.getElementById('pyt').style.opacity=0;
	document.getElementById('comp').style.opacity=0;
	document.getElementById('rock').style.opacity=1;
	document.getElementById('paper').style.opacity=1;
	document.getElementById('scissors').style.opacity=1;
}
