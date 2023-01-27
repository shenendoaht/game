import { renderMtnPlayer } from "/JS/player.js";
import { overCont } from "/JS/UTIL/cont.js";
import { hideInv, renderOverInv } from "/JS/UTIL/inventory.js";
import { mount } from "/JS/UTIL/navs.js";
document.getElementById("overMount").addEventListener("click", () => {
  mount();
  renderMtnPlayer();
});
document.getElementById("expOver").addEventListener("click", () => {
  overCont();
  document.getElementById("expOver").style.display = "none";
});
document.getElementById("viewOverInv").addEventListener("click", () => {
  renderOverInv();
});
document.getElementById("hideOverInv").addEventListener("click", () => {
  hideInv();
});
export default {};
