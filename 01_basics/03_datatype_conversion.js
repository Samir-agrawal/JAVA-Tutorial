let id = "33" // 33 as string here
console.log(typeof(id))
console.log(id)

let id1 = Number(id)  //33 converted to number now 
console.log(typeof(id1))
console.log(id1)

// if the string is not convertable to a no. like ex:- "33abs" , then the data type converted to number but value of it stored to be NaN(Not a Number) in number datatypes

// if string is null then Number(null)=0;

id=null
console.log(typeof id) //object
console.log(id) //null
id1=Number(id)
console.log(typeof id1) //number
console.log(id1) //0

//if string is boolean then number = 1 for string = true and number = 0 for string = false
let a=true
let b=false

let a1=Number(a);
let b1=Number(b);

console.log(typeof a1)  //number
console.log(a1)         //1
console.log(typeof b1)  //number
console.log(b1)         //0

// Number(undefined) = NaN

let c;
let d=Number(c);
console.log(typeof d)     //number
console.log(d)            //NaN