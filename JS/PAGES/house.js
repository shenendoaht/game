import { renderHouseInv, hideInv } from "/JS/UTIL/inventory.js";
import { bedroom, town } from "/JS/UTIL/navs.js";
import { renderBedPlayer, renderTownPlayer } from "/JS/player.js";
import { houseCont } from "/JS/UTIL/cont.js";

document.getElementById("upstairs").addEventListener("click", () => {
  bedroom();
  renderBedPlayer();
});
document.getElementById("houseTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("expHouse").addEventListener("click", () => {
  houseCont();
  document.getElementById("expHouse").style.display = "none";
});
document.getElementById("viewHouseInv").addEventListener("click", () => {
  renderHouseInv();
});
document.getElementById("hideHouseInv").addEventListener("click", () => {
  hideInv();
});
export default {};
