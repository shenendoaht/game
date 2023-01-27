import {
  players,
  renderArenaPlayer,
  renderHousePlayer,
  renderDockPlayer,
  renderTavPlayer,
  renderTownPlayer,
  renderShopPlayer,
  checkXP,
} from "/JS/player.js";
import { townCont } from "/JS/UTIL/cont.js";
import { items } from "/JS/UTIL/data.js";
import { renderTownInv, hideInv } from "/JS/UTIL/inventory.js";
import { arena, dock, house, shop, tav } from "/JS/UTIL/navs.js";
import { characters } from "/JS/CHARACTERS/characters.js";
import { townTalk } from "/JS/CHATS/talk.js";
import { townMsg } from "/JS/CHATS/msg.js";

document.getElementById("townTav").addEventListener("click", () => {
  tav();
  renderTavPlayer();
});
document.getElementById("townHouse").addEventListener("click", () => {
  house();
  renderHousePlayer();
});
document.getElementById("townArena").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("townShop").addEventListener("click", () => {
  shop();
  renderShopPlayer();
});
document.getElementById("townDock").addEventListener("click", () => {
  dock();
  renderDockPlayer();
});
document.getElementById("expTown").addEventListener("click", () => {
  townCont();
  document.getElementById("expTown").style.display = "none";
});
document.getElementById("searchTown").addEventListener("click", () => {
  document.getElementById("coins").style.display = "block";
  document.getElementById("coinBtn").style.display = "block";
  document.getElementById("searchTown").style.display = "none";
  document.getElementById(
    "townMsg"
  ).innerText = `${players.Player1.name}, you found some coins!`;
  setTimeout(townMsg, 4000);
});
document.getElementById("monkTalk").addEventListener("click", () => {
  document.getElementById("townTalk").innerText = `${characters.Monk.name}: ${
    characters.Monk.quotes[
      Math.floor(Math.random() * characters.Monk.quotes.length)
    ]
  }`;
  setTimeout(townTalk, 5000);
});
document.getElementById("maidTalk").addEventListener("click", () => {
  document.getElementById("townTalk").innerText = `${characters.Maid.name}: ${
    characters.Maid.quotes[
      Math.floor(Math.random() * characters.Maid.quotes.length)
    ]
  }`;
  setTimeout(townTalk, 5000);
});
document.getElementById("coinBtn").addEventListener("click", () => {
  document.getElementById("coinBtn").style.display = "none";
  document.getElementById("coins").style.display = "none";
  players.Player1.gp += items.Coins.gp;
  players.Player1.xp += items.Coins.xp;
  players.Player1.items.push(` ${items.Coins.name}`);
  players.Player1.inventory.push(items.Coins);
  checkXP();
  townMsg();
  renderTownPlayer();
});
document.getElementById("viewTownInv").addEventListener("click", () => {
  renderTownInv();
});
document.getElementById("hideTownInv").addEventListener("click", () => {
  hideInv();
});

export default {};
