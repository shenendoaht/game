import {
  renderDockPlayer,
  renderHullPlayer,
  renderIslandPlayer,
} from "/JS/player.js";
import { shipCont } from "/JS/UTIL/cont.js";
import { hideInv, renderShipInv } from "/JS/UTIL/inventory.js";
import { dock, hull, island } from "/JS/UTIL/navs.js";
import { capnChat } from "/JS/CHARACTERS/captain.js";
import { boatswainChat } from "/JS/CHARACTERS/boatswain.js";

document.getElementById("shipDock").addEventListener("click", () => {
  dock();
  renderDockPlayer();
});
document.getElementById("shipHull").addEventListener("click", () => {
  hull();
  renderHullPlayer();
});
document.getElementById("shipIsland").addEventListener("click", () => {
  island();
  renderIslandPlayer();
});
document.getElementById("expShip").addEventListener("click", () => {
  shipCont();
  document.getElementById("expShip").style.display = "none";
});
document.getElementById("viewShipInv").addEventListener("click", () => {
  renderShipInv();
});
document.getElementById("hideShipInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("captainBtn").addEventListener("click", () => {
  capnChat();
});
document.getElementById("boatswainBtn").addEventListener("click", () => {
  boatswainChat();
});
export default {};
