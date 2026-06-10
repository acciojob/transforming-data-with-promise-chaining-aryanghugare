//your JS code here. If required.

const output = document.querySelector("#output") ;


// promise1.then((data)=>output.innerHTML = `Result: ${data}`)
function handleClick() {
const numr = document.querySelector("#ip") ;
function first(num) {
	return	 new Promise((resolve,reject)=>{
   setTimeout(()=>{
	// num =num.value;
   resolve(num.value) ;
   },2000)

})
}

function two(num) {
return	 new Promise((resolve,reject)=>{
   setTimeout(()=>{
	   num = num*2
	   resolve(num) ;
   },2000)
	
})
}

function three(num) {
	return  new Promise((resolve,reject)=>{
   setTimeout(()=>{
	   num = num - 3
	   resolve(num) ;
   },1000)
	
})
}

function four(num) {
	return  new Promise((resolve,reject)=>{
   setTimeout(()=>{
	   num = num / 2 ;
	   resolve(num) ;
   },1000)
	
})
}	

function five(num) {
	return  new Promise((resolve,reject)=>{
   setTimeout(()=>{
	   num = num + 10 ;
	   resolve(num) ;
   },1000)
	
})
}	

	
first(numr)

        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return two(data);
        })

        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return three(data);
        })

        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return four(data);
        })

        .then((data) => {
            output.innerHTML = `Result: ${data}`;
            return five(data);
        })

        .then((data) => {
            output.innerHTML = `Final Result: ${data}`;
        });

}
