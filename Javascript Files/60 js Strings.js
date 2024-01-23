console.log("String in javascript")
let ab = "Harry" //Array of string
console.log(ab)  //Fetch each character by index values
console.log(ab[0])
console.log(ab.length) //Length of the string

let aname = "Abhishek"
let friend = "Rohan"
console.log(`Hi my name is ${aname} and his friends name is ${friend}`) //We can also use variables in the senetences using back ticks. which is typically helpful compared to double quotes with + and all..
console.log(`My name of size ${aname.length} and my friend name size is ${friend.length}`)

//Strings Functions
let a = "Arun"
let b = "Abhishek"

console.log(b.toUpperCase()) //Uppercaseing

console.log(b.toLowerCase()) //Lower casing

console.log(`The length of the string ${b} is ${b.length}`)//Length of the string

console.log(b.slice(2)) //Slicling with start postion.

console.log(b.slice(2, 7))//Slicing with start and end position.

console.log(b.replace("ek" , "lash"))//Replacing letters.

console.log(b.concat(a , "Kumar" , "Kulkarni")) //Concatination of strings.

console.log(b.charAt(2)) //To get the specific character

console.log(b.indexOf("ek")) // To get the exact index no. of the character.

console.log(b.lastIndexOf("h")) //To get the last index of character
 
 // **STRINGS  ARE IMMUTABLE MEANS WHICH CANT BE MANUPULATED ONCE MEMORY ALLOCATED **


