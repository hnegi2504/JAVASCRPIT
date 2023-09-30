const accountId = 12345
let email = "hn@gmail.com"
var pass = "123"
accountcity = "jaipur"
let state;

// accountId= 2 // not allowed
email= "abc"
pass= "345"
accountcity = "delhi"
 /*
prefer not to use var coz of issue in block and functional scope
 */
console.log(accountId);
console.table([accountId,email,pass,accountcity, state]);