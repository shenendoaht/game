import {
  players,
  renderArenaPlayer,
  renderArmoryPlayer,
  checkHP,
} from "/JS/player.js";
import {
  armoryWelc,
  armoryQuote,
  armoryThank,
  armoryReject,
  armoryThreat,
  armoryWeapons,
  armoryArmor,
  buyBow,
  buyBowlingShoes,
  buyBroadsword,
  buyChainmail,
  buyCrossbow,
  buyDager,
  buyGauntlet,
  buyTopHat,
  armorerShove,
  closeArmory,
} from "/JS/CHARACTERS/armorer.js";
import { armor, weapons } from "/JS/UTIL/data.js";
import { armoryCont } from "/JS/UTIL/cont.js";
import { hideInv, renderArmoryInv } from "/JS/UTIL/inventory.js";
import { armoryMsg } from "/JS/CHATS/msg.js";
import { armoryTalk } from "/JS/CHATS/talk.js";
import { arena } from "/JS/UTIL/navs.js";
document.getElementById("armoryArena").addEventListener("click", () => {
  closeArmory();
  arena();
  renderArenaPlayer();
});
document.getElementById("expArmory").addEventListener("click", () => {
  armoryCont();
  armoryWelc();
  document.getElementById("expArmory").style.display = "none";
  setTimeout(armoryTalk, 5000);
});
document.getElementById("viewArmoryInv").addEventListener("click", () => {
  renderArmoryInv();
});
document.getElementById("hideArmoryInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("armoryWaresBtn").addEventListener("click", () => {
  document.getElementById("armorBtn").style.display = "flex";
  document.getElementById("weaponBtn").style.display = "flex";
  armoryQuote();
  setTimeout(armoryTalk, 4000);
});
document.getElementById("armorBtn").addEventListener("click", () => {
  armoryArmor();
  armoryQuote();
  setTimeout(armoryTalk, 4000);
});
document.getElementById("weaponBtn").addEventListener("click", () => {
  armoryWeapons();
  armoryQuote();
  setTimeout(armoryTalk, 4000);
});
// ARMORY ITEM FUNCTIONS---------------------------------
document.getElementById("bowBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Bow.gp) {
    buyBow();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= weapons.Bow.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("daggerBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Dagger.gp) {
    buyDager();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= weapons.Dagger.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("crossbowBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.CrossBow.gp) {
    buyCrossbow();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= weapons.CrossBow.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("broadswordBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.Broadsword.gp) {
    buyBroadsword();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= weapons.Broadsword.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("gauntletBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.Gauntlet.gp) {
    buyGauntlet();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= armor.Gauntlet.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("chainmailBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.Chainmaill.gp) {
    buyChainmail();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= armor.Chainmaill.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("bowlingShoesBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.BowlingShoes.gp) {
    buyBowlingShoes();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= armor.BowlingShoes.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
document.getElementById("topHatBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.TopHat.gp) {
    buyTopHat();
    renderArmoryPlayer();
    armoryThank();
  } else if (players.Player1.gp <= armor.TopHat.gp % 2) {
    armoryThreat();
    armorerShove();
    checkHP();
    renderArmoryPlayer();
  } else {
    armoryReject();
  }
  setTimeout(armoryTalk, 4000);
  setTimeout(armoryMsg, 5000);
});
export default {};
