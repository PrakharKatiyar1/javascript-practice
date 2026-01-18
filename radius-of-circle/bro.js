//......circumference finder

const pi = 3.14;
let radius;
let circumference;

document.getElementById("b").onclick = function(){
  radius = document.getElementById("myText").value;
  circumference = 2 * pi * radius;    
  document.getElementById("myH3").textContent = circumference;
}   


