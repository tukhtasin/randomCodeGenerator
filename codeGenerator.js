
var charset = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz1234567890!@#$%^&*(){}[]?><:;" ;
var paswordLeangth = 15;
var password = "";
for(var i=0;paswordLeangth;i++){
    var randomnum = Math.floor(Math.random()*charset.length);
    password  = charset.substring(randomnum,randomnum+1);
}

console.log(password);