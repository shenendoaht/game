import {
  renderForestPlayer,
  renderClearingPlayer,
  renderRiverPlayer,
} from "/JS/player.js";
import { bridgeCont } from "/JS/UTIL/cont.js";
import { forest, river, clearing } from "/JS/UTIL/navs.js";
import { hideInv, renderBridgeInv } from "/JS/UTIL/inventory.js";
import {
  takeShield,
  atkTroll,
  defTroll,
  trollAppear,
} from "/JS/ENEMIES/troll.js";
document.getElementById("bridgeForest").addEventListener("click", () => {
  forest();
  renderForestPlayer();
});
document.getElementById("bridgeRiver").addEventListener("click", () => {
  river();
  renderRiverPlayer();
});
document.getElementById("bridgeClear").addEventListener("click", () => {
  clearing();
  renderClearingPlayer();
});
function expBridgeHide() {
  document.getElementById("expBridge").style.display = "none";
}
document.getElementById("expBridge").addEventListener("click", () => {
  bridgeCont();
  expBridgeHide();
  document.getElementById("expBridge").style.display = "none";
  setTimeout(trollAppear, 1500);
});
document.getElementById("viewBridgeInv").addEventListener("click", () => {
  renderBridgeInv();
});
document.getElementById("hideBridgeInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("trollAtk").addEventListener("click", () => {
  atkTroll();
});
document.getElementById("trollDef").addEventListener("click", () => {
  defTroll();
});
document.getElementById("shieldBtn").addEventListener("click", () => {
  takeShield();
});

export default {};
