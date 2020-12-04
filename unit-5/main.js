// Lesson 1:   

const numbers = [65, 44, 12, 4];
let sum = 0;
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;
}
console.log(sum);

// Lesson 2:

showDom = () => {
  let domHtml = document.getElementById('content').innerHTML = 'Hello2';
  let domCss = document.getElementById('content').style.color='red'; 
  let domOuter = document.getElementById('content');
  domOuter.outerHTML='<h2>Hello2</h2>'
}