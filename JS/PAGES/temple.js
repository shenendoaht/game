import {
  renderMtnPlayer,
  renderTemplePlayer,
  players,
  pointCheck,
} from "/JS/player.js";
import { characters } from "/JS/CHARACTERS/characters.js";
import { templeCont } from "/JS/UTIL/cont.js";
import { hideInv, renderTempleInv } from "/JS/UTIL/inventory.js";
import { mount } from "/JS/UTIL/navs.js";
import { hideGreatMonk, huTemple, huThank, insulted } from "/JS/CHATS/convo.js";
import { tempMsg } from "/JS/CHATS/msg.js";
import { weapons } from "/JS/UTIL/data.js";
document.getElementById("tempExit").addEventListener("click", () => {
  mount();
  renderMtnPlayer();
});
document.getElementById("expTemple").addEventListener("click", () => {
  templeCont();
  document.getElementById("expTemple").style.display = "none";
});
document.getElementById("viewTempleInv").addEventListener("click", () => {
  renderTempleInv();
});
document.getElementById("hideTempleInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("greatMonkBtn").addEventListener("click", () => {
  huTemple();
});
document.getElementById("huYes").addEventListener("click", () => {
  document.getElementById("huChoice").style.display = "none";
  huThank();
});
document.getElementById("huNo").addEventListener("click", () => {
  document.getElementById("huChoice").style.display = "none";
  insulted();
  setTimeout(tempMsg, 5000);
  hideGreatMonk();
});
function takeStick() {
  document.getElementById("magickStick").style.display = "none";
  players.Player1.weapons.push(` ${weapons.MagicStick.name}`);
  players.Player1.str += weapons.MagicStick.str;
  players.Player1.def += weapons.MagickStick.def;
  players.Player1.inventory.push(weapons.MagickStick);
  hideGreatMonk();
  pointCheck();
  renderTemplePlayer();
}
document.getElementById("magicStickBtn").addEventListener("click", () => {
  takeStick();
});
export default {};
