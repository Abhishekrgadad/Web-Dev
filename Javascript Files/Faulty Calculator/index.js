/*  FAULTY CALCULATOR 
Faulty calculator means which performs different opertions by clicking on the operators.
ex:
+ : *
- : +
/ : *
*/

console.log("Faulty Calculator")
let random = Math.random()
let a = prompt("Enter the first no.");
let c = prompt("Enter the operation to perform");
let b = prompt("Enter the second no.");

let Obj = {
    
    "+" : "*",
    "-" : "+",
    "/" : "*",
}



if (random > 0.1) {

    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
   
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}

