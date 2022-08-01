//get Elements By className
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent= "Hello 2";
items[1].style.fontWeight ='bold';
items[1].style.fontWeight = 'yellow';
//gives error
//items.style.backgroundColor ='#f4f4f4';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor ='#f4f4f4';

}
var li = document.getElementsByClassName('list-group-item');
li[3].style.backgroundColor='green';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight ='bold';

}