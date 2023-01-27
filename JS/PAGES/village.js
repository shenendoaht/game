import { renderIslandPlayer, renderOutskirtPlayer } from "/JS/player.js";
import { villageCont } from "/JS/UTIL/cont.js";
import { hideInv, renderVillageInv } from "/JS/UTIL/inventory.js";
import { island, outskirt } from "/JS/UTIL/navs.js";
document.getElementById("villageDock").addEventListener("click", () => {
  island();
  renderIslandPlayer();
});
document.getElementById("villageOut").addEventListener("click", () => {
  outskirt();
  renderOutskirtPlayer();
});
document.getElementById("expVillage").addEventListener("click", () => {
  villageCont();
  document.getElementById("expVillage").style.display = "none";
});
document.getElementById("viewVillageInv").addEventListener("click", () => {
  renderVillageInv();
});
document.getElementById("hideVillageInv").addEventListener("click", () => {
  hideInv();
});
export default {};
