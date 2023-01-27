import {
  renderOutskirtPlayer,
  renderOverPlayer,
  renderTemplePlayer,
} from "/JS/player.js";
import { mountCont } from "/JS/UTIL/cont.js";
import { hideInv, renderMountInv } from "/JS/UTIL/inventory.js";
import { outskirt, overlook, temp } from "/JS/UTIL/navs.js";
document.getElementById("mountOut").addEventListener("click", () => {
  outskirt();
  renderOutskirtPlayer();
});
document.getElementById("mountOver").addEventListener("click", () => {
  overlook();
  renderOverPlayer();
});
document.getElementById("mountTemp").addEventListener("click", () => {
  temp();
  renderTemplePlayer();
});
document.getElementById("expMount").addEventListener("click", () => {
  mountCont();
  document.getElementById("expMount").style.display = "none";
});
document.getElementById("viewMountInv").addEventListener("click", () => {
  renderMountInv();
});
document.getElementById("hideMountInv").addEventListener("click", () => {
  hideInv();
});
export default {};
