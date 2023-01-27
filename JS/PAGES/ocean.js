import { renderBeachPlayer } from "/JS/player.js";
import { hideInv, renderOceanInv } from "/JS/UTIL/inventory.js";
import { beach } from "/JS/UTIL/navs.js";

document.getElementById("oceanBeach").addEventListener("click", () => {
  beach();
  renderBeachPlayer();
});
document.getElementById("viewOceanInv").addEventListener("click", () => {
  renderOceanInv();
});
document.getElementById("hideOceanInv").addEventListener("click", () => {
  hideInv();
});
export default {};
