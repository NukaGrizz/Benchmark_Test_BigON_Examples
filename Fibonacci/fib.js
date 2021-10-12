const fibonacci = (num) => {
    fib = [1,1]

    if (num === 1 || num === 2) {
        return fib[1]
    } else {
        for (i = 1; i <= (num - 2); i++) {
            fibby = fib[i] + fib[i-1];
            fib.push(fibby)
            console.log(fib);
        }
    }
}

fibonacci(8);