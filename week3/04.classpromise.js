let conditionalPromise = new Promise((resolve,reject) => {
const num = Math.random();
if(num>0.5){

    resolve(`Resolved successfully: The Number is: ${num}`);
}
else{
    reject(`Rejected: The Number is: ${num}`)
}
})
conditionalPromise.then(message => {
console.log(message);
})
.catch(error => {
    console.log(error);
})
