import {
  renderHutPlayer,
  renderIntHutPlayer,
  players,
  pointCheck,
} from "/JS/player.js";
import { intHutCont } from "/JS/UTIL/cont.js";
import { hideInv, renderIntHutInv } from "/JS/UTIL/inventory.js";
import { hut } from "/JS/UTIL/navs.js";
import { items } from "/JS/UTIL/data.js";
import { ambush } from "/JS/UTIL/ambush.js";
import { intHutMsg } from "/JS/CHATS/msg.js";
document.getElementById("hutExit").addEventListener("click", () => {
  hut();
  renderHutPlayer();
});
document.getElementById("expIntHut").addEventListener("click", () => {
  intHutCont();
  document.getElementById("expIntHut").style.display = "none";
});
document.getElementById("viewIntHutInv").addEventListener("click", () => {
  renderIntHutInv();
});
document.getElementById("hideIntHutInv").addEventListener("click", () => {
  hideInv();
});
function searchIntHut() {
  document.getElementById("megaPotion").style.display = "block";
  document.getElementById("megaPotionBtn").style.display = "block";
  document.getElementById(
    "intHutMsg"
  ).innerText = `${players.Player1.name} you found a mega-potion!`;
  setTimeout(intHutMsg, 4000);
}
function takeMegaPotion() {
  document.getElementById("megaPotion").style.display = "none";
  document.getElementById("megaPotionBtn").style.display = "none";
  players.Player1.items.push(` ${items.MegaPotion.name}`);
  players.Player1.inventory.push(items.MegaPotion);
  players.Player1.hp += items.MegaPotion.hp;
  players.Player1.xp += items.MegaPotion.xp;
  pointCheck();
  renderIntHutPlayer();
  setTimeout(ambush, 5000);
}
document.getElementById("searchIntHut").addEventListener("click", () => {
  searchIntHut();
});
document.getElementById("megaPotionBtn").addEventListener("click", () => {
  takeMegaPotion();
});
export default {};
