import {
  renderForestPlayer,
  renderTownPlayer,
  renderShipPlayer,
} from "/JS/player.js";
import { dockCont } from "/JS/UTIL/cont.js";
import { hideInv, renderDockInv } from "/JS/UTIL/inventory.js";
import { forest, town, ship } from "/JS/UTIL/navs.js";
document.getElementById("dockForest").addEventListener("click", () => {
  forest();
  renderForestPlayer();
});
document.getElementById("dockTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("dockShip").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("expDock").addEventListener("click", () => {
  dockCont();
  document.getElementById("expDock").style.display = "none";
});
document.getElementById("viewDockInv").addEventListener("click", () => {
  renderDockInv();
});
document.getElementById("hideDockInv").addEventListener("click", () => {
  hideInv();
});
export default {};
