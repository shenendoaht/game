import {
  renderTownPlayer,
  renderBridgePlayer,
  renderForestPlayer,
  players,
  pointCheck,
} from "/JS/player.js";
import { forestCont } from "/JS/UTIL/cont.js";
import { town, bridge } from "/JS/UTIL/navs.js";
import { characters } from "/JS/CHARACTERS/characters.js";
import { hideInv, renderForestInv } from "/JS/UTIL/inventory.js";
import { thiefAppear, atkThief, defThief } from "/JS/ENEMIES/thief.js";
import {
  showTree,
  soldierChoice,
  soldierYes,
  soldierNo,
  soldierName,
  soldierGift,
  soldierHint,
} from "/JS/CHARACTERS/soldier.js";
import { items } from "/JS/UTIL/data.js";

document.getElementById("forestTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("forestBridge").addEventListener("click", () => {
  bridge();
  renderBridgePlayer();
});
document.getElementById("expForest").addEventListener("click", () => {
  document.getElementById("expForest").style.display = "none";
  forestCont();
  showTree();
});
document.getElementById("viewForestInv").addEventListener("click", () => {
  renderForestInv();
});
document.getElementById("hideForestInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("searchTree").addEventListener("click", () => {
  thiefAppear();
});
document.getElementById("thiefAtk").addEventListener("click", () => {
  atkThief();
});
document.getElementById("thiefDef").addEventListener("click", () => {
  defThief();
});
document.getElementById("soldierBtn").addEventListener("click", () => {
  soldierChoice();
});
document.getElementById("soldierChoice1").addEventListener("click", () => {
  document.getElementById(
    "forestTalk"
  ).innerText = `${players.Player1.name}: I like swords!`;
  setTimeout(soldierYes, 3000);
});
document.getElementById("soldierChoice2").addEventListener("click", () => {
  document.getElementById(
    "forestTalk"
  ).innerText = `${players.Player1.name}: Who are you?`;
  setTimeout(soldierName, 4000);
});
document.getElementById("soldierChoice3").addEventListener("click", () => {
  document.getElementById(
    "forestTalk"
  ).innerText = `${players.Player1.name}: Can you help me?`;
  setTimeout(soldierHint, 4000);
});
document.getElementById("soldierYes").addEventListener("click", () => {
  if (characters.Soldier.yesCount <= 5) {
    soldierYes();
  } else {
    soldierGift();
  }
});
document.getElementById("soldierNo").addEventListener("click", () => {
  soldierNo();
});
document.getElementById("arrowBtn").addEventListener("click", () => {
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, you found some arrows!`;
  document.getElementById("arrows").style.display = "none";
  document.getElementById("arrowBtn").style.display = "none";
  players.Player1.items.push(` ${items.Arrows.name}`);
  players.Player1.inventory.push(items.Arrows);
  players.Player1.str += items.Arrows.str;
  players.Player1.xp += 5;
  pointCheck();
  renderForestPlayer();
});

export default {};
