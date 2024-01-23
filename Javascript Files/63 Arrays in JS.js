Arrays in javascript

let a = [1, 2,3,4,5,6]
console.log(a.length) //Length of the string
console.log(a[2])
console.log(a[3])

console.log(a , typeof a) //check type of data

console.log(a.toString(a)) //convert array to string

console.log(a.join(" and ")) //this function adds "and" by replacing comma

console.log(a.pop()) //Which deletes the last element in the array

console.log(a.shift()) //Which deletes the first element from the array

console.log(a.push("harry")) //which inserts an element at the end

console.log( a.unshift("Abhishek")) //Which inserts array at first
console.log(delete a[5]) 

let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]
console.log(a.concat( b ,c ))  //Concatination of strings a,b ,c

let s = [ 8,6,4,3,2,1]
console.log(s.sort()) //Sorting of elements using sort function.

let  newone = [1,2,3,4,5,6,7,6]
console.log(newone.splice(1,3)) //It delete the elements on the specific index

console.log(newone.splice(0 , 1 , 200 ,400)) //it delete the elements at the specific index and also add the specific number you given in the brackets.
console.log(newone)

let  a = [1,2,3,4,5,6,7,6]

//PRINTING ARRAY ELEMENTS
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

//FOR EACH LOOP
a.forEach(value , index , arr)=>{
    console.log(value , index , arr)
}


// FOR IN LOOP
let object = {  
    a : 1,
     b : 2,
     c : 4,
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element , key)
        
    }
}

// DISPLAY ARRAYS USING FOR OF LOOP
let arr = [1,2,43,4,5,5,6]
for (const iterator of arr) {
    console.log(iterator)
}
//CREATING A NEW ARRAY USING EXISTED ARRAY FOR LOOP
let arr = [1,2,3,4,5]
let newarr =[];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newarr.push(element **2);
    
}
console.log(newarr)

//CREATING A NEW ARRAY USING EXISTED ARRAY USING MAP FUNCTION
let arr = [1,2,3,4,5]
let newarr = arr.map((ele)=>{
    return ele**2
}
)
console.log(newarr)


//FILTER THE ELEMENTS FROM THE ARRAY BY CREATING A GREATER FUNCTION
let arr = [1,2,3,4,5]
const greater = (ele)=>{
    if(ele > 3)
        return true;
    return false;
}

console.log(arr.filter(greater))

//FILTER THE ELEMENTS FROM THE ARRAY WITHOUT USING FUNCTION.
console.log(arr.filter((ele)=> {
    if(ele < 5)
        return true
    return false
}))