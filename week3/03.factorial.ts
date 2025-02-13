function factorial(n: number): Number {

if(n<0){

    console.log("Input must be a non-negative integer.");
}

let result =1;

for(let index = 2;index<=n;index++){
    result *=index;
}
return result;
}

console.log(factorial(5));
console.log(factorial(-9));
console.log(factorial(3));