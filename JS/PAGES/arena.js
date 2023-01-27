import {
  renderArmoryPlayer,
  renderBattlePlayer,
  renderQuadPlayer,
  renderTownPlayer,
} from "/JS/player.js";
import { hideInv, renderArenaInv } from "/JS/UTIL/inventory.js";
import { town, quad, armory, battledome } from "/JS/UTIL/navs.js";
import { arenaCont } from "/JS/UTIL/cont.js";
import { beggarDeny, beggarGive } from "/JS/CHARACTERS/beggar.js";
document.getElementById("arenaTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("arenaQuad").addEventListener("click", () => {
  quad();
  renderQuadPlayer();
});
document.getElementById("arenaArmory").addEventListener("click", () => {
  armory();
  renderArmoryPlayer();
});
document.getElementById("arenaBattle").addEventListener("click", () => {
  battledome();
  renderBattlePlayer();
});
document.getElementById("expArena").addEventListener("click", () => {
  arenaCont();
  document.getElementById("expArena").style.display = "none";
});
document.getElementById("viewArenaInv").addEventListener("click", () => {
  renderArenaInv();
});
document.getElementById("hideArenaInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("begYes").addEventListener("click", () => {
  beggarGive();
});
document.getElementById("begNo").addEventListener("click", () => {
  beggarDeny();
});
export default {};
