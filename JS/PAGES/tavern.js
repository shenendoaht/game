import {
  players,
  renderTavPlayer,
  renderInnPlayer,
  renderTownPlayer,
  checkHP,
  checkXP,
} from "/JS/player.js";
import { tavCont } from "/JS/UTIL/cont.js";
import { items } from "/JS/UTIL/data.js";
import { hideInv, renderTavInv } from "/JS/UTIL/inventory.js";
import { inn, town } from "/JS/UTIL/navs.js";
import { characters } from "/JS/CHARACTERS/characters.js";
import { tavMsg } from "/JS/CHATS/msg.js";
import { tavTalk } from "/JS/CHATS/talk.js";

document.getElementById("tavInn").addEventListener("click", () => {
  if (players.Player1.gp >= 4) {
    inn();
    renderInnPlayer();
  } else if (players.Player1.inventory.Key === true) {
    inn();
    renderInnPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).innerText = `${characters.Bartender.name}: If'n ya ain't got a key, it costs 4 coins to sleep inn!`;
  }
});
document.getElementById("tavTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("expTav").addEventListener("click", () => {
  tavCont();
  document.getElementById("expTav").style.display = "none";
});
document.getElementById("viewTavInv").addEventListener("click", () => {
  renderTavInv();
});
document.getElementById("hideTavInv").addEventListener("click", () => {
  hideInv();
});
// BARTENDER FUNCTIONS---------------------------------
document.getElementById("barTalk").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).innerText = `${characters.Bartender.name}: Would you like an ale?`;
  document.getElementById("barTalk").style.display = "none";
  document.getElementById("barChoice").style.display = "flex";
  setTimeout(tavTalk, 4000);
});
document.getElementById("barYes").addEventListener("click", () => {
  if (players.Player1.gp >= items.Ale.gp) {
    document.getElementById("ale").style.display = "block";
    document.getElementById("aleBtn").style.display = "block";
    document.getElementById(
      "tavTalk"
    ).innerText = `${characters.Bartender.name}: Here ya go!`;
    document.getElementById("barChoice").style.display = "none";
    document.getElementById("barTalk").style.display = "block";
    players.Player1.gp -= items.Ale.gp;
    renderTavPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).innerText = `${characters.Bartender.name}: This ale ain't free ya know!!`;
    document.getElementById("barChoice").style.display = "none";
    document.getElementById("barTalk").style.display = "block";
  }
  setTimeout(tavTalk, 4000);
});
document.getElementById("barNo").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).innerText = `${characters.Bartender.name}: Well let me know if you change your mind!!`;
  document.getElementById("barChoice").style.display = "none";
  document.getElementById("barTalk").style.display = "block";
  setTimeout(tavTalk, 4000);
});
// DRUNK FUNCTIONS---------------------------------
document.getElementById("drunkTalk").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).innerText = `${characters.Drunk.name}: Psssst!! **grumble grumble** Wanna try sum meeeead? **hic**`;
  document.getElementById("drunkTalk").style.display = "none";
  document.getElementById("drunkChoice").style.display = "flex";
  setTimeout(tavTalk, 4000);
});
document.getElementById("drunkYes").addEventListener("click", () => {
  if (players.Player1.gp >= items.Mead.gp) {
    document.getElementById("mead").style.display = "block";
    document.getElementById("meadBtn").style.display = "block";
    document.getElementById(
      "tavTalk"
    ).innerText = `${characters.Drunk.name}: **grumble** Careful widdat! *hic*`;
    document.getElementById("drunkChoice").style.display = "none";
    document.getElementById("drunkTalk").style.display = "block";
    players.Player1.gp -= items.Mead.gp;
    renderTavPlayer();
  } else {
    document.getElementById(
      "tavTalk"
    ).innerText = `${characters.Drunk.name}: ** grumble hic** Yer getting nothing less I gets 5 coins! **grumble**`;
    document.getElementById("drunkTalk").style.display = "block";
    document.getElementById("drunkChoice").style.display = "none";
  }
  setTimeout(tavTalk, 4000);
});
document.getElementById("drunkNo").addEventListener("click", () => {
  document.getElementById(
    "tavTalk"
  ).innerText = `${characters.Drunk.name}: ** grumble grumble hic** Wass wrong, you feared of muh meeead? **hic**`;
  document.getElementById("drunkTalk").style.display = "block";
  document.getElementById("drunkChoice").style.display = "none";
  setTimeout(tavTalk, 4000);
});
// ITEM FUNCTIONS---------------------------------
document.getElementById("aleBtn").addEventListener("click", () => {
  document.getElementById("ale").style.display = "none";
  document.getElementById("aleBtn").style.display = "none";
  players.Player1.items.push(` ${items.Ale.name}`);
  players.Player1.inventory.push(items.Ale);
  players.Player1.hp -= items.Ale.hp;
  players.Player1.xp += items.Ale.xp;
  checkHP();
  checkXP();
  renderTavPlayer();
});
document.getElementById("meadBtn").addEventListener("click", () => {
  document.getElementById("mead").style.display = "none";
  document.getElementById("meadBtn").style.display = "none";
  players.Player1.items.push(` ${items.Mead.name}`);
  players.Player1.inventory.push(items.Mead);
  players.Player1.hp -= items.Mead.hp;
  players.Player1.xp += items.Mead.xp;
  checkHP();
  checkXP();
  renderTavPlayer();
});
document.getElementById("searchTav").addEventListener("click", () => {
  document.getElementById(
    "tavMsg"
  ).innerText = `${players.Player1.name}, you found a purse!`;
  document.getElementById("purse").style.display = "block";
  document.getElementById("purseBtn").style.display = "block";
  document.getElementById("searchTav").style.display = "none";
  setTimeout(tavMsg, 4000);
});
document.getElementById("purseBtn").addEventListener("click", () => {
  document.getElementById("purse").style.display = "none";
  document.getElementById("purseBtn").style.display = "none";
  players.Player1.gp += items.Purse.gp;
  players.Player1.xp += items.Purse.xp;
  players.Player1.items.push(` ${items.Purse.name}`);
  players.Player1.inventory.push(items.Purse);
  checkXP();
  renderTavPlayer();
});
