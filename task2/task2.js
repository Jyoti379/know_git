//get element by tagname
var li=document.getElementsByTagName('li');
console.log(li);
console.log(items[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor ='yellow';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor ='#f4f4f4';

}
var li5=document.getElementByclassName('list1');
console.log(li5);