import { renderVillagePlayer, renderShipPlayer } from "/JS/player.js";
import { islandCont } from "/JS/UTIL/cont.js";
import { hideInv, renderIslandInv } from "/JS/UTIL/inventory.js";
import { village, ship } from "/JS/UTIL/navs.js";
document.getElementById("islandVillage").addEventListener("click", () => {
  village();
  renderVillagePlayer();
});
document.getElementById("islandShip").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("expIsland").addEventListener("click", () => {
  islandCont();
  document.getElementById("expIsland").style.display = "none";
});
document.getElementById("viewIslandInv").addEventListener("click", () => {
  renderIslandInv();
});
document.getElementById("hideIslandInv").addEventListener("click", () => {
  hideInv();
});
export default {};
