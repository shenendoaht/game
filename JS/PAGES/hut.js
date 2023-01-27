import { renderClearingPlayer, renderIntHutPlayer } from "/JS/player.js";
import { hutCont } from "/JS/UTIL/cont.js";
import { hideInv, renderHutInv } from "/JS/UTIL/inventory.js";
import { clearing, intHut } from "/JS/UTIL/navs.js";
document.getElementById("hutClear").addEventListener("click", () => {
  clearing();
  renderClearingPlayer();
});
document.getElementById("hutEnter").addEventListener("click", () => {
  intHut();
  renderIntHutPlayer();
});
document.getElementById("expHut").addEventListener("click", () => {
  hutCont();
  document.getElementById("expHut").style.display = "none";
});
document.getElementById("viewHutInv").addEventListener("click", () => {
  renderHutInv();
});
document.getElementById("hideHutInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("readSign").addEventListener("click", () => {
  document.getElementById("sign").style.display = "block";
  document.getElementById(
    "signText"
  ).innerText = ` Keep Out! Tresspassers Beware!`;
});
export default {};
