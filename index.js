
function fibonacciGenerator(num){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for(let i = 2; i <= num; i+=1){
        fibonacci[i] = fibonacci[i -2] + fibonacci[i - 1];
    }

    return fibonacci;
}

console.log(fibonacciGenerator(6));
