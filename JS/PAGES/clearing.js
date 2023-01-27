import { renderBridgePlayer, renderHutPlayer } from "/JS/player.js";
import { clearCont } from "/JS/UTIL/cont.js";
import { hideInv, renderClearInv } from "/JS/UTIL/inventory.js";
import { bridge, hut } from "/JS/UTIL/navs.js";
import { atkWitch, defWitch } from "/JS/ENEMIES/AMBUSH/witch.js";
import { atkGuardOne, defGuardOne } from "/JS/ENEMIES/AMBUSH/guardOne.js";
import { atkGuardTwo, defGuardTwo } from "/JS/ENEMIES/AMBUSH/guardTwo.js";
document.getElementById("clearBridge").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("clearHut").addEventListener("click", () => {
  hut();
  renderHutPlayer();
});
document.getElementById("expClear").addEventListener("click", () => {
  clearCont();
  document.getElementById("expClear").style.display = "none";
});
document.getElementById("viewClearInv").addEventListener("click", () => {
  renderClearInv();
});
document.getElementById("hideClearInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("witchAtk").addEventListener("click", () => {
  atkWitch();
});
document.getElementById("witchDef").addEventListener("click", () => {
  defWitch();
});
document.getElementById("guardOneAtk").addEventListener("click", () => {
  atkGuardOne();
});
document.getElementById("guardOneDef").addEventListener("click", () => {
  defGuardOne();
});
document.getElementById("guardTwoAtk").addEventListener("click", () => {
  atkGuardTwo();
});
document.getElementById("guardTwoDef").addEventListener("click", () => {
  defGuardTwo();
});
export default {};
