var idtext = document.getElementById("tbID");
var patext = document.getElementById("tbPwd");
var cpatext = document.getElementById("cpass");
var mtext = document.getElementById("mail");
var nametext = document.getElementById("name");
var nicktext = document.getElementById("nick");



var id = idtext.value;
var password = patext.value;
var cpassword = cpatext.value;
var mail = mtext.value;
var name = nametext.value;
var nick = nicktext.value;

window.localStorage.setItem('id', id);
window.localStorage.setItem('pwd', password);
