import { champCont } from "/JS/UTIL/cont.js";
import { hideInv, renderChampInv } from "/JS/UTIL/inventory.js";
import { credits } from "/JS/UTIL/credits.js";
import { gameReset } from "/JS/UTIL/resetGame.js";

document.getElementById("expChamp").addEventListener("click", () => {
  document.getElementById("expChamp").style.display = "none";
  champCont();
  setTimeout(credits, 1500);
});
document.getElementById("viewChampInv").addEventListener("click", () => {
  renderChampInv();
});
document.getElementById("hideChampInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("champExit").addEventListener("click", () => {
  gameReset();
});
export default {};
