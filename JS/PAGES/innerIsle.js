import {
  renderInnerIslePlayer,
  renderBeachPlayer,
  renderShipTwoPlayer,
  pointCheck,
  winMatch,
} from "/JS/player.js";
import { innerIsleCont } from "/JS/UTIL/cont.js";
import { hideInv, renderInnerIsleInv } from "/JS/UTIL/inventory.js";
import { beach, shipTwo } from "/JS/UTIL/navs.js";
document.getElementById("expInnerIsle").addEventListener("click", () => {
  document.getElementById("expInnerIsle").style.display = "none";
  innerIsleCont();
});
document.getElementById("viewInnerIsleInv").addEventListener("click", () => {
  renderInnerIsleInv();
});
document.getElementById("hideInnerIsleInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("innerIsleBeach").addEventListener("click", () => {
  beach();
  renderBeachPlayer();
});
// document.getElementById("").addEventListener("click", () => {});
export default {};
