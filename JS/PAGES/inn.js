import {
  players,
  renderInnPlayer,
  renderTavPlayer,
  pointCheck,
} from "/JS/player.js";
import { innCont } from "/JS/UTIL/cont.js";
import { items } from "/JS/UTIL/data.js";
import { hideInv, renderInnInv } from "/JS/UTIL/inventory.js";
import { innMsg } from "/JS/CHATS/msg.js";
import { tav } from "/JS/UTIL/navs.js";

document.getElementById("innTav").addEventListener("click", () => {
  tav();
  renderTavPlayer();
});
document.getElementById("expInn").addEventListener("click", () => {
  innCont();
  document.getElementById("expInn").style.display = "none";
});
document.getElementById("viewInnInv").addEventListener("click", () => {
  renderInnInv();
});
document.getElementById("hideInnInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("innRest").addEventListener("click", () => {
  document.getElementById(
    "innMsg"
  ).innerText = `${players.Player1.name}, has a quick rest!`;
  players.Player1.hp += 5;
  checkHP();
  renderInnPlayer();
  setTimeout(innMsg, 4000);
});
document.getElementById("searchInn").addEventListener("click", () => {
  document.getElementById("searchInn").style.display = "none";
  document.getElementById("potion").style.display = "block";
  document.getElementById("potionBtn").style.display = "block";
  document.getElementById(
    "innMsg"
  ).innerText = `${players.Player1.name}, you found a potion!`;
  setTimeout(innMsg, 4000);
});
document.getElementById("potionBtn").addEventListener("click", () => {
  document.getElementById("potion").style.display = "none";
  document.getElementById("potionBtn").style.display = "none";
  players.Player1.hp += items.Potion.hp;
  players.Player1.xp += items.Potion.xp;
  players.Player1.items.push(` ${items.Potion.name}`);
  players.Player1.inventory.push(items.Potion);
  pointCheck();
  renderInnPlayer();
});
export default {};
