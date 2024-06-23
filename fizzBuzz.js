// fizzBuzz.js
function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            console.log("fizzBuzz 3 & 5")
        }else if(i % 3 === 0){
            console.log("Fizz-3")
        }else if(i % 5 === 0){
            console.log("Buzz - 5")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(10);
