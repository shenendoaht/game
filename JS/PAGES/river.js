import { renderBridgePlayer } from "/JS/player.js";
import { riverCont } from "/JS/UTIL/cont.js";
import { hideInv, renderRiverInv } from "/JS/UTIL/inventory.js";
import { bridge } from "/JS/UTIL/navs.js";
document.getElementById("riverBridge").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("expRiver").addEventListener("click", () => {
  riverCont();
  document.getElementById("expRiver").style.display = "none";
});
document.getElementById("viewRiverInv").addEventListener("click", () => {
  renderRiverInv();
});
document.getElementById("hideRiverInv").addEventListener("click", () => {
  hideInv();
});
export default {};
