import { renderVillagePlayer, renderMtnPlayer } from "/JS/player.js";
import { outCont } from "/JS/UTIL/cont.js";
import { hideInv, renderOutInv } from "/JS/UTIL/inventory.js";
import { village, mount } from "/JS/UTIL/navs.js";
import {
  invadersAppear,
  atkInvaders,
  defInvaders,
} from "/JS/ENEMIES/INVASION/invaders.js";
document.getElementById("outVillage").addEventListener("click", () => {
  village();
  renderVillagePlayer();
});
document.getElementById("outMount").addEventListener("click", () => {
  mount();
  renderMtnPlayer();
});
document.getElementById("expOut").addEventListener("click", () => {
  document.getElementById("expOut").style.display = "none";
  outCont();
  setTimeout(invadersAppear, 1500);
});
document.getElementById("viewOutInv").addEventListener("click", () => {
  renderOutInv();
});
document.getElementById("hideOutInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("invaderAtk").addEventListener("click", () => {
  atkInvaders();
});
document.getElementById("invaderDef").addEventListener("click", () => {
  defInvaders();
});
export default {};
