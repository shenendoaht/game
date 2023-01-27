import { renderInnerIslePlayer } from "/JS/player.js";
import { beachCont } from "/JS/UTIL/cont.js";
import { hideInv, renderBeachInv } from "/JS/UTIL/inventory.js";
import { innerIsle } from "/JS/UTIL/navs.js";
import { renderCrab, crabChat } from "/JS/CHARACTERS/crab.js";
document.getElementById("expBeach").addEventListener("click", () => {
  document.getElementById("expBeach").style.display = "none";
  beachCont();
  setTimeout(renderCrab, 2000);
});
document.getElementById("crabBtn").addEventListener("click", () => {
  crabChat();
});
document.getElementById("viewBeachInv").addEventListener("click", () => {
  renderBeachInv();
});
document.getElementById("hideBeachInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("innerIsleBtn").addEventListener("click", () => {
  innerIsle();
  renderInnerIslePlayer();
});
export default {};
