const myForm = document.querySelector('#my-form');
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
 showNewUserOnScreen(obj);
    console.log(localStorage);
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
function showNewUserOnScreen(obj){
    const parentNode=document.getElementById('users');
    const childHTML =`<li>${users.N}-${users.em}</li>`
    parentNode.innerHTML=parentNode.innerHTML + childHTML; 
}