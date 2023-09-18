// The goal of this program is to generate a random number after a delay of 3 seconds, and store the 
// delay in a variable so can be modified. The program displays a message every second indicating the 
// time remaining until the random number is generated and then outputs the generated number.

function res(){
    console.log(Math.floor(Math.random()*1000))
}

setTimeout(res,3000)


    function num1(){
        console.log(`The time remaining until the random number is generated ${1}`)
    }
    function num2(){
        console.log(`The time remaining until the random number is generated ${2}`)
    }
    setTimeout(num2,1000)
    setTimeout(num1,2000)




