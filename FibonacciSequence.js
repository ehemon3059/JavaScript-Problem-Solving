// Using Iteration
// This approach uses a loop to calculate Fibonacci numbers up to a certain position.
// function fibonacci(n){
//     let fib = [0,1];

//     for(let i=2; i <= n; i++){
//         fib[i] = fib[i - 1] + fib[ i - 2];
//     }
//     return fib[n]
// }

// console.log(fibonacci(7))

function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}
const n = 10;
console.log(fibonacci(n));