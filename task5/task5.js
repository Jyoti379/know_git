var itemLIst =document.querySelector('#item');
//parent node
console.log(itemList.parentNode);
//div with id main
itemList.parentNode.style.backgroundColor='grey';
console.log(itemList.parentNode.parentNode);
//get div container as parent
console.log(itemList.parentNode.parentNode.parentNode);
//body
//parentElement
console.log(itemList.parentElement);
//
itemList.parentElement.style.backgroundColor='grey';
console.log(itemList.parentElement.parentElement);
//
console.log(itemList.parentElement.parentElement.parentElement);

//chidNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow';

//first child
console.log(itemList.firstChild);
//first eleemnt child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textontent ='hello1';
//lastElementChild
console.log(itemList.lastElementchild);
itemList.lastElementchild.textContent ='hello 4';


//next sibling
console.log(itemList.nextSibling);
//next element sibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//create element
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className ='hello';
//add id
newDiv.id ='hello1';
 
//add attribute
newDiv.setAttribute('title','hello Div');
//create textnode
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);



