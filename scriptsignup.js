function submit(){
    if((document.getElementById("myname").value != "") && (document.getElementById("mysurname").value !="")&&(document.getElementById("mail").value !="")&&(document.getElementById("pass").value !="")&&(document.getElementById("repass").value !="")){
      if(document.getElementById("pass").value == document.getElementById("repass").value){
         alert("Signup Successful");
      setTimeout(()=>document.location.href="index.html" , 1000);
      }
      else{
        alert("Passwords do not match");
      }
    }
      else{
      alert("Please fill all the details");
      }
  
    }