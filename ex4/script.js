// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
var arrayOfBoxes = document.querySelectorAll('.box');



button.addEventListener('click', function() {
  for(var i = 0; i < arrayOfBoxes.length; i++) {
  arrayOfBoxes[i].style.background = 'blue';
  
  // clicked.forEach(function(item){
  //   item.style.background = 'blue';
  // })
  }
})