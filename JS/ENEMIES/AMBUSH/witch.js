import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  renderClearingPlayer,
  pointCheck,
  winMatch,
  atkRoll,
  defRoll,
} from "/JS/player.js";
import { clearMsg } from "/JS/CHATS/msg.js";
import { clearTalk } from "/JS/CHATS/talk.js";
import { endAmbush, ambushDice, ambushDiceReset } from "/JS/UTIL/ambush.js";

// -------------- DECLARATIONS----------------------------
let witchA1Score = witchAtkRoll();
let witchA2Score = witchAtkRoll();
let witchA3Score = witchAtkRoll();
let witchD1Score = witchDefRoll();
let witchD2Score = witchDefRoll();
let witchD3Score = witchDefRoll();
let witchAtkScore = witchA1Score + witchA2Score + witchA3Score;
let witchDefScore = witchD1Score + witchD2Score + witchD3Score;
function witchAtkRoll(min = 1, max = enemies.Witch.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Witch.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function witchDefRoll(min = 1, max = enemies.Witch.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Witch.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------------- BASIC----------------------------
function witchAtkDice() {
  document.getElementById("clrD1").innerText = witchA1Score;
  document.getElementById("clrD2").innerText = witchA2Score;
  document.getElementById("clrD3").innerText = witchA3Score;
}
function witchDefDice() {
  document.getElementById("clrD1").innerText = witchD1Score;
  document.getElementById("clrD2").innerText = witchD2Score;
  document.getElementById("clrD3").innerText = witchD3Score;
}
function displayWitchFight() {
  document.getElementById("witchFight").style.display = "flex";
  document.getElementById("witchAtk").style.display = "block";
  document.getElementById("witchDef").style.display = "block";
}
function displayWitchAtk() {
  document.getElementById("witchAtk").style.display = "block";
  document.getElementById("witchDef").style.display = "none";
}
function displayWitchDef() {
  document.getElementById("witchAtk").style.display = "none";
  document.getElementById("witchDef").style.display = "block";
}
function witchAppear() {
  witchHP();
  renderWitch();
  witchTalk();
}
function witchHide() {
  document.getElementById("witch").style.display = "none";
  document.getElementById("witchStat").style.display = "none";
}
function renderWitch() {
  document.getElementById("witch").style.display = "block";
  document.getElementById("witchStat").style.display = "block";
  document.getElementById(
    "witchStat"
  ).innerText = `NAME: ${enemies.Witch.name} | HP: ${enemies.Witch.hp} | STR: ${enemies.Witch.str} | DEF: ${enemies.Witch.def}| AB: ${enemies.Witch.ab}|  `;
}
function killWitch() {
  witchHide();
  enemies.Witch.alive = false;
  players.Player1.vanquished.push(` ${enemies.Witch.name}`);
  winMatch();
  pointCheck();
  renderClearingPlayer();
  endAmbush();
  document.getElementById(
    "clearMsg"
  ).innerText = `Good job, ${players.Player1.name}!`;
  setTimeout(clearMsg, 4000);
}
function witchHP() {
  if (enemies.Witch.hp >= 1) {
    renderWitch();
  } else {
    killWitch();
  }
}
// -------------- DIALOGUES----------------------------
function witchTalk() {
  document.getElementById("clearTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.chat[Math.floor(Math.random() * enemies.Witch.chat.length)]
  }`;
}
function witchHurt() {
  document.getElementById("clearTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.hits[Math.floor(Math.random() * enemies.Witch.hits.length)]
  }`;
}
function witchBlock() {
  document.getElementById("clearTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.miss[Math.floor(Math.random() * enemies.Witch.miss.length)]
  }`;
}
function witchTaunt() {
  document.getElementById("clearTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.taunt[Math.floor(Math.random() * enemies.Witch.taunt.length)]
  }`;
}
function witchDodge() {
  document.getElementById("clearTalk").innerText = `${enemies.Witch.name}: ${
    enemies.Witch.dodge[Math.floor(Math.random() * enemies.Witch.dodge.length)]
  }`;
}
// -------------- REACTIONS----------------------------
function renderWitchMatch() {
  witchHP();
  pointCheck();
  renderClearingPlayer();
}
function hitWitch() {
  enemies.Witch.hp -= players.Player1.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Witch.name}!`;
  witchHurt();
  renderWitchMatch();
  displayWitchAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function missWitch() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Witch.name}!`;
  witchBlock();
  renderWitchMatch();
  displayWitchDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function witchHit() {
  players.Player1.hp -= enemies.Witch.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Witch.name} hit you!`;
  witchTaunt();
  renderWitchMatch();
  displayWitchDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function witchMiss() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Witch.name}!`;
  witchDodge();
  renderWitchMatch();
  displayWitchAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
// -------------- PLAYER FUNCTIONS----------------------------
function atkWitch() {
  const atkWitchS1 = atkRoll();
  const atkWitchS2 = atkRoll();
  const atkWitchS3 = atkRoll();
  const atkWitchScore = atkWitchS1 + atkWitchS2 + atkWitchS3;
  document.getElementById("apD1").innerText = atkWitchS1;
  document.getElementById("apD2").innerText = atkWitchS2;
  document.getElementById("apD3").innerText = atkWitchS3;
  ambushDice();
  witchDefDice();
  if (atkWitchScore > witchDefScore) {
    hitWitch();
  } else if (atkWitchScore < witchDefScore) {
    missWitch();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Witch.name} are well matched!`;
    setTimeout(displayWitchFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
function defWitch() {
  const defWitchS1 = defRoll();
  const defWitchS2 = defRoll();
  const defWitchS3 = defRoll();
  const defWitchScore = defWitchS1 + defWitchS2 + defWitchS3;
  document.getElementById("apD1").innerText = defWitchS1;
  document.getElementById("apD2").innerText = defWitchS2;
  document.getElementById("apD3").innerText = defWitchS3;
  ambushDice();
  witchAtkDice();
  if (defWitchScore > witchAtkScore) {
    witchHit();
  } else if (defWitchScore < witchAtkScore) {
    witchMiss();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Witch.name} are well matched!`;
    setTimeout(displayWitchFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
export { witchAppear, witchHide, atkWitch, defWitch };
