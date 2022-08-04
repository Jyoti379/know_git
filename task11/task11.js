const myForm = document.querySelector('#my-form');
/*function test(){
    let formData =[];
    formData.push({
        fname:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
    });
    localStorage.setItem('formData',JSON.stringyfy(formData));
     //dispData();
     //e.preventDefault();
}*/
 
   // const nameInput =(document.querySelector('#name').value) ;
    
    //alert(nameInput) ;
   // const emailInput = document.querySelector('#email').value;
    //const msg = document.querySelector('.msg').value;
   // const userList = document.querySelector('#users').value;
   // alert(nameInput+emailInput);
   // nameInput=JSON.parse(localStorage.getItem("userList"));
  
  //var user= localStorage.setItem("nameInput",nameInput);
 // var em= localStorage.setItem("emailInput",emailInput);
  /*for(var i=0;i<nameInput.length;i++){
    var li=document.createElement("li");
    li.innerHTML=nameInput['name'];
    document.getElementById(li);
  }*/
   // var em= localStorage.setItem("emailInput",emailInput);

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const N =document.querySelector('#name').value;
  const em =  document.querySelector('#email').value;
 let obj={
    N,
    em
 }
 localStorage.setItem(obj.N,JSON.stringify(obj));
 localStorage.setItem(obj,JSON.stringify(obj));
  
  //if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
   // msg.classList.add('error');
   // msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    //setTimeout(() => msg.remove(), 3000);
  //}
   //else {

    
   // localStorage.setItem('email',`${emailInput.value}`);
   showNewUserOnScreen(obj);
    console.log(localStorage);
     //Create new list item with user
   const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
     li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
//}
function showNewUserOnScreen(obj){
    if(localStorage.getItem(users.em)!==null){
        removeUserFromScreen(users.email); 
      }
    const parentNode=document.getElementById('users');
    const childHTML =`<li>${users.N}-${users.em}</li>`
    parentNode.innerHTML=parentNode.innerHTML + childHTML; 
    
}
function deleteUser(emailInput){
    console.log(emailInput);
    localStorage.removeItems(emailInput);
    removeUserFromScreen(emailInput);
}
function removeUserFromScreen(emailInput){
    const parentNode=document.getElementById('userList');
    const childNodeToBeDeleted =document.getElementById('email');
    parentNode.removeChild(childNodeToBeDeleted);
}