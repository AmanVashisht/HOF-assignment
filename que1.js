// The problem is to create a program that uses the setTimeout() function to reverse a given string
// after a delay of 2 seconds. The program should use a variable “input” storing a string as input and 
// then implement a delay of 2 seconds before reversing the string. The reversed string should then be 
// printed as output



function strRev(){
    let input="My name is Aman"
    console.log(input.split("").reverse().join(""))
}

setTimeout(strRev,2000)

console.log("hello")