const decreaseBtn = document.getElementById("d");
const increaseBtn = document.getElementById("i");
const resetBtn = document.getElementById("r");
const pp = document.getElementById("pp");
let count = 0;
increaseBtn.onclick = function(){
  count++;
  pp.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  pp.textContent = count;
}
resetBtn.onclick = function(){
  count = 0;
  pp.textContent = count;
}