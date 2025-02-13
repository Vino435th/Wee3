function fibonacci(n) {
    if (n < 0) {
        console.log("Input the non-integer number");
        return;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    var a = 0;
    var b = 1;
    var result = 0;
    for (var index = 2; index <= n; index++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fibonacci(5));
console.log(fibonacci(-9));
