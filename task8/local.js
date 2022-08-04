function test(){
    const nameInput =(document.querySelector('#name').value) ;
    
    //alert(nameInput) ;
    const emailInput = document.querySelector('#email').value;
    //const msg = document.querySelector('.msg').value;
   // const userList = document.querySelector('#users').value;
   // alert(nameInput+emailInput);
   // nameInput=JSON.parse(localStorage.getItem("userList"));
  
  var user= localStorage.setItem("nameInput",nameInput);
  var em= localStorage.setItem("emailInput",emailInput);
  /*for(var i=0;i<nameInput.length;i++){
    var li=document.createElement("li");
    li.innerHTML=nameInput['name'];
    document.getElementById(li);
  }*/
   // var em= localStorage.setItem("emailInput",emailInput);
}