let $ = selector => document.querySelector(selector);
let $$ = selector => document.querySelectorAll(selector);

let cat = null;
class Cat{ 
    /*
    Equation for Catalan Number:
    (2n)!/((n+1)!n!)
    */
    constructor(num){
        this.num = num;
    }
	
}
function main(){
}
    
    //to allow txt to change to Catalan
    const btn = $(`button`);
    const txt = document.getElementById(`hidden`);

    btn.addEventListener("click", (factorial) =>{

        const num = document.getElementById(`input`).value;

        function factorial(num) {
            let maxStack = num - 1;
            var x = num;

            if (maxStack > 0) {
                return x * factorial(maxStack);  
            }
            
            return x;
        }    
        function CatalanTop(num){
            var top = 2 * num;
            return factorial(top)
        }
        function CatalanBottom(num){
       			const one = parseInt(num) + 1;
            var first = factorial(one);
            var second = factorial(num)
            return first * second;
        }

        factorial(num);
        
        CatalanTop(num);
        
        CatalanBottom(num);

        const top = CatalanTop(num);
        const bottom = CatalanBottom(num);
        const Catalan = top/bottom;

        console.log("Num inserted: " + num)
        console.log("Catalan Num = " + Catalan)
        
        //print out Catalan Number where "calculate" button is
        if (btn.type === 'submit') {
            txt.textContent = 'Answer: ' + Catalan;
        }
        else{
            //txt.textContent = 'Enter Another Number: '
            console.log("button or paragraph text not working");
        }
    });
    
    //document.getElementById("answer").innerHTML = main();
function AttachEventsFor(parentElement) {
}
if(typeof window !== undefined){
    window.addEventListener('DOMContentLoaded', (event) => {
        cat = new Cat();
        cat.num = document.getElementById(`input`).value;
        console.log('DOM fully loaded and parsed');
    })
}
else{
    console.log('DOM not loaded');
}