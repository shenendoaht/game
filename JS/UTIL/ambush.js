import { clearing } from "/JS/UTIL/navs.js";
import { witchAppear, witchHide } from "/JS/ENEMIES/AMBUSH/witch.js";
import { guardOneAppear } from "/JS/ENEMIES/AMBUSH/guardOne.js";
import { guardTwoAppear, guardTwoHide } from "/JS/ENEMIES/AMBUSH/guardTwo.js";

function ambush() {
  clearing();
  document.getElementById("ambush").style.display = "block";
  document.getElementById("clearHut").style.display = "none";
  document.getElementById("clearBridge").style.display = "none";
  witchAppear();
  guardOneAppear();
  guardTwoAppear();
  setTimeout(guardTwoHide, 4000);
  setTimeout(witchHide, 4500);
}
function endAmbush() {
  document.getElementById("ambush").style.display = "none";
  document.getElementById("clearHut").style.display = "block";
  document.getElementById("clearBridge").style.display = "block";
}
function clearDice() {
  document.getElementById("clearDice").style.display = "flex";
  document.getElementById("clrD1").style.display = "block";
  document.getElementById("clrD2").style.display = "block";
  document.getElementById("clrD3").style.display = "block";
}
function ambushPlayerDice() {
  document.getElementById("ambushPlayerDice").style.display = "flex";
  document.getElementById("apD1").style.display = "block";
  document.getElementById("apD2").style.display = "block";
  document.getElementById("apD3").style.display = "block";
}
function ambushDice() {
  document.getElementById("ambushDice").style.display = "block";
  clearDice();
  ambushPlayerDice();
}
function ambushDiceReset() {
  document.getElementById("ambushDice").style.display = "none";
}

export { ambush, endAmbush, ambushDice, ambushDiceReset };
