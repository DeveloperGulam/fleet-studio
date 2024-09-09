function* fibonacciGenerator() {
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < 20; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const fib = fibonacciGenerator();
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)

// Or we can loop the result
// for (let value of fib) {
//     console.log(value);
// }