function fibonacci(n : number) {

if(n<0){

 console.log("Input the non-integer number");
 return;
}

if(n===0){
    return 0;
}

if(n===1){
    return 1;
}
let a = 0;
let b = 1;
let result =0;

for(let index = 2;index<=n;index++){
result = a+b;
a= b;
b = result;
}
return result;
}
console.log(fibonacci(5));
console.log(fibonacci(-9));
