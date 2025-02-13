function factorial(n) {
    if (n < 1) {
        console.log("Input must be a non-negative integer.");
    }
    var result = 1;
    for (var index = 2; index <= n; index++) {
        result *= index;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(-9));
console.log(factorial(3));
