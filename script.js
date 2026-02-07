//your JS code here. If required.

const output = document.querySelector("#output");
let input = document.querySelector("#ip");
let startButton = document.querySelector("#btn");

let console = document.querySelector("#console");


startButton.addEventListener("click",(e)=>{
	e.preventDefault();
	let inputNumber = input.value ;
	
	setTimeout(()=>{
		output.innerHTML =`Result : ${inputNumber}`
		
		
	},2000)
	
	setTimeout(()=>{
		inputNumber = 2 * inputNumber ;
		output.innerHTML = ``
		output.innerHTML =`Result : ${inputNumber}`
	},3000)

	
	setTimeout(()=>{
		inputNumber -=3 ;
		output.innerHTML = ``
		output.innerHTML =`Result : ${inputNumber}`
	},4000)

	
	setTimeout(()=>{
		inputNumber = parseFloat(inputNumber/2) ;
		output.innerHTML = ``
		output.innerHTML =`Result : ${inputNumber}`
	},5000)

	setTimeout(()=>{
		inputNumber += 10 ; 
		output.innerHTML = ``
		output.innerHTML =`Result : ${inputNumber}`
	},6000)



	
	
	
})



