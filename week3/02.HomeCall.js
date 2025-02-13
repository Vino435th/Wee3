const browser = "Chrome";  

function checkBrowserVersion(Callback){
  setTimeout(() => {
     Callback(browser);
  }, 2000);
}
function invoke(browser){
   
    console.log(`The browser version is: ${browser}`)
}
checkBrowserVersion(invoke);