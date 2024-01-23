function submitt(){
    if((document.getElementById("myfor").value != ""))
    {
    if((document.getElementById("myfor").value == "yaswanth123@gmail.com")||(document.getElementById("myfor").value == "9640668092")){
    
         alert("Reset link send Successfully");
      setTimeout(()=>document.location.href="index.html" , 1000);
      }
      else{
        alert("Emali or phone number does not match");
      }
    }
      else{
      alert("Please fill sthe Emali or phone number");
      }
  
    }