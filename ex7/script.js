// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var toggle = document.getElementById("section");
var section = document.getElementById("section-header");

section.addEventListener('click', function(){
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
})
