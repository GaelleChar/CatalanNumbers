let $ = selector => document.querySelector(selector);
let $$ = selector => document.querySelectorAll(selector);

let cat = null;

class Cat{ 
    /*
    Equation for Catalan Number:
    (2n)!/((n+1)!n!)
    */
    constructor(){
        this.x = null;
        this.num = null;
    }
	
}
function main(){
    
    //to allow txt to change to Catalan
    const btn = $(`button`);
    const txt = $(`p`);

    btn.addEventListener("click", (factorial) =>{

        //let user input a num
        //TODO: should be in 'DOMContentLoaded' event
        var num = document.getElementById(`input`).value;

        function factorial(num){
            var res = 0;
            //Base case
            if (num<=1){
                return;
            }
            else{
                for (var i = 0; i < num; i++){
                    res += factorial(i) * factorial(num-i-1)
                }
            }
            return res;
        }
        function CatalanTop(num){
            var top = 2 * num;
            return factorial(top)
        }
        function CatalanBottom(num){
            var first = factorial(num + 1);
            var second = factorial(num)
            return first * second;
        }

        const top = CatalanTop(num);
        const bottom = CatalanBottom(num);
        const Catalan = top/bottom;
        
        //print out Catalan Number where "calculate" button is
        if (btn.textContent === 'Calculate') {
            txt.textContent = 'Answer: ' + Catalan;
        }
        else{
            //txt.textContent = 'Enter Another Number: ';
        }
    });
    
    //document.getElementById("answer").innerHTML = main();
}
function AttachEventsFor(parentElement) {
}

window.addEventListener('DOMContentLoaded', event => {
    cat = new Cat();
    //var x = document.getElementById(`input`).value;
    //let num = x;
})