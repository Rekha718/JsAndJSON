var arr=[10,20,30,40,50]; 
console.log(arr); 

arr.push(100)
console.log(arr); //add element at the end of array
arr.pop() //remove last element of array
console.log(arr); //remove last element of array

let arr1 = ['a','b','c','d','e'];
arr1.unshift('x')
console.log(arr1); //add element at the beginning of array
arr1.shift() //remove first element of array
console.log(arr1); //remove first element of array

console.log(arr1.length)
console.log(arr1.indexOf('c'))
console.log(arr1.includes('c')) //check if element is present in array

var merge = arr.concat(arr1) //merge two arrays
console.log(merge); //merge two arrays


var string1 = arr.toString(arr)
console.log(string1); //convert array to string