function myFunction(){
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
}
}
let counter=0
function openWin(){
  if((document.getElementById("myuser").value != "") && (document.getElementById("myInput").value !=""))
{
if((document.getElementById("myInput").value == "yash") && (document.getElementById("myuser").value == "yash1432")) {
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
}
else{
  alert("Wrong Password");
  if(myInput!="yash"){
    counter++;
    if(counter>=3){
      alert("You have reached the limit");
     }
  }
}
}
else {
  alert("Please enter username and password");
  }
}

