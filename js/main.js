"use strict"

const numbersBtn = document.querySelectorAll(".number");
const operatorsBtn =document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const result = document.getElementById('result');



//variables

let displayOp = "";
let currentOp = "";
let previusOp = "";
let operationResult = undefined;


//Eventos

numbersBtn.forEach((number)=>{
	    number.addEventListener('click',()=>{
		  addNumber(number.innerText);
	})
})


operatorsBtn.forEach((operator)=>{
	operator.addEventListener('click',(e)=>{ 
  if(operator.innerText !== ''){
	  switch (operator.innerText){
		  case '=': calculator();
		  break;

		  case '+':
		  case '-' :
		  case '*' :
		  case '/' :
		  selectOperator(operator.innerText);
		  break;

		  case 'C': clear();
		  break;
	  }
  }
})
})

  //Funciones


function selectOperator(operator){
	
	if(previusOp !== ""){
		calculator()
	
	}
	operationResult = operator.toString();
	previusOp = currentOp;
	currentOp = "";
	
}


function calculator (){
	let calculation;
	if(isNaN(previusOp) || isNaN(currentOp)) return;
	switch (operationResult){
		case '+':
		calculation = parseFloat(previusOp) + parseFloat(currentOp);
		break;

		case '-':
		calculation = parseFloat(previusOp) - parseFloat(currentOp);
		break;

		case '*':
		calculation = parseFloat(previusOp) * parseFloat(currentOp);
		break;

		case '/':
		calculation = parseFloat(previusOp) / parseFloat(currentOp);
		break;

		default:
        return;
	}
	currentOp = calculation;
	operationResult = undefined;
	previusOp = "";
	refreshDisplay(); 
	
}

function addNumber(numb){
    currentOp +=  numb.toString();
	refreshDisplay();
}


function refreshDisplay (){
	result.value = currentOp;
}


function clear (){
	currentOp = "";
	previusOp = "";
	displayOp= "";
	operationResult = undefined;
   	result.value = "";
}






















