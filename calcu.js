function addOne(argument) {
document.getElementById('input').value=document.getElementById('input').value+1;
}
function addTwo(argument){
document.getElementById('input').value=document.getElementById('input').value+2;

}
function addTree(argument){
document.getElementById('input').value=document.getElementById('input').value+3;
}

function addFour(argument){
document.getElementById('input').value=document.getElementById('input').value+4;
}

function addFive(argument){
document.getElementById('input').value=document.getElementById('input').value+5;
}

function addSix(argument){
document.getElementById('input').value=document.getElementById('input').value+6;
}

function addSeven(argument){
document.getElementById('input').value=document.getElementById('input').value+7;
}

function addEight(argument){
document.getElementById('input').value=document.getElementById('input').value+8;
}

function addNine(argument){
document.getElementById('input').value=document.getElementById('input').value+9;
}

function addNul(argument){
document.getElementById('input').value=document.getElementById('input').value+"0";
}

function addMinus(argument){
document.getElementById('input').value=document.getElementById('input').value+"-";
}


function addPlus(argument){
document.getElementById('input').value=document.getElementById('input').value+"+";
}

function addMultiplie(argument){
document.getElementById('input').value=document.getElementById('input').value+"*";
}

function addKomma(argument){
document.getElementById('input').value=document.getElementById('input').value+".";
}

function addDivision(argument){
document.getElementById('input').value=document.getElementById('input').value+"/";
}




function Answer(){
	document.getElementById('input').value = eval(document.getElementById('input').value)
}

function Delete(){
	document.getElementById('input').value=" ";
}