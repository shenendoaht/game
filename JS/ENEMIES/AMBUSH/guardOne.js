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
import { ambushDice, ambushDiceReset } from "/JS/UTIL/ambush.js";
import { guardTwoAppear } from "/JS/ENEMIES/AMBUSH/guardTwo.js";
// -------------- DECLARATIONS----------------------------
let guardOneA1Score = guardOneAtkRoll();
let guardOneA2Score = guardOneAtkRoll();
let guardOneA3Score = guardOneAtkRoll();
let guardOneD1Score = guardOneDefRoll();
let guardOneD2Score = guardOneDefRoll();
let guardOneD3Score = guardOneDefRoll();
let guardOneAtkScore = guardOneA1Score + guardOneA2Score + guardOneA3Score;
let guardOneDefScore = guardOneD1Score + guardOneD2Score + guardOneD3Score;
function guardOneAtkRoll(min = 1, max = enemies.GuardOne.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.GuardOne.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function guardOneDefRoll(min = 1, max = enemies.GuardOne.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.GuardOne.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------------- BASIC----------------------------
function guardOneAtkDice() {
  document.getElementById("clrD1").innerText = guardOneA1Score;
  document.getElementById("clrD2").innerText = guardOneA2Score;
  document.getElementById("clrD3").innerText = guardOneA3Score;
}
function guardOneDefDice() {
  document.getElementById("clrD1").innerText = guardOneD1Score;
  document.getElementById("clrD2").innerText = guardOneD2Score;
  document.getElementById("clrD3").innerText = guardOneD3Score;
}
function displayGuardOneFight() {
  document.getElementById("guardOneFight").style.display = "flex";
  document.getElementById("guardOneAtk").style.display = "block";
  document.getElementById("guardOneDef").style.display = "block";
}
function displayGuardOneAtk() {
  document.getElementById("guardOneAtk").style.display = "block";
  document.getElementById("guardOneDef").style.display = "none";
}
function displayGuardOneDef() {
  document.getElementById("guardOneAtk").style.display = "none";
  document.getElementById("guardOneDef").style.display = "block";
}
function guardOneAppear() {
  guardOneHP();
  renderGuardOne();
  guardOneTalk();
}
function guardOneHide() {
  document.getElementById("guardOne").style.display = "none";
  document.getElementById("guardOneStat").style.display = "none";
}
function renderGuardOne() {
  document.getElementById("guardOne").style.display = "block";
  document.getElementById("guardOneStat").style.display = "block";
  document.getElementById(
    "guardOneStat"
  ).innerText = `NAME: ${enemies.GuardOne.name} | HP: ${enemies.GuardOne.hp} | STR: ${enemies.GuardOne.str} | DEF: ${enemies.GuardOne.def}| AB: ${enemies.GuardOne.ab}|  `;
}
function killGuardOne() {
  guardOneHide();
  enemies.GuardOne.alive = false;
  players.Player1.vanquished.push(` ${enemies.GuardOne.name}`);
  winMatch();
  pointCheck();
  renderClearingPlayer();
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, get ready!`;
  setTimeout(clearMsg, 4000);
  setTimeout(guardTwoAppear, 4500);
}
function guardOneHP() {
  if (enemies.GuardOne.hp >= 1) {
    renderGuardOne();
  } else {
    killGuardOne();
  }
}
// -------------- DIALOGUES----------------------------
function guardOneTalk() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardOne.name}: ${
    enemies.GuardOne.chat[
      Math.floor(Math.random() * enemies.GuardOne.chat.length)
    ]
  }`;
}
function guardOneHurt() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardOne.name}: ${
    enemies.GuardOne.hits[
      Math.floor(Math.random() * enemies.GuardOne.hits.length)
    ]
  }`;
}
function guardOneBlock() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardOne.name}: ${
    enemies.GuardOne.miss[
      Math.floor(Math.random() * enemies.GuardOne.miss.length)
    ]
  }`;
}
function guardOneTaunt() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardOne.name}: ${
    enemies.GuardOne.taunt[
      Math.floor(Math.random() * enemies.GuardOne.taunt.length)
    ]
  }`;
}
function guardOneDodge() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardOne.name}: ${
    enemies.GuardOne.dodge[
      Math.floor(Math.random() * enemies.GuardOne.dodge.length)
    ]
  }`;
}
// -------------- REACTIONS----------------------------
function renderGuardOneMatch() {
  guardOneHP();
  pointCheck();
  renderClearingPlayer();
}
function hitGuardOne() {
  enemies.GuardOne.hp -= players.Player1.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.GuardOne.name}!`;
  guardOneHurt();
  renderGuardOneMatch();
  displayGuardOneAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function missGuardOne() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.GuardOne.name}!`;
  guardOneBlock();
  renderGuardOneMatch();
  displayGuardOneDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function guardOneHit() {
  players.Player1.hp -= enemies.GuardOne.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, ${enemies.GuardOne.name} hit you!`;
  guardOneTaunt();
  renderGuardOneMatch();
  displayGuardOneDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function guardOneMiss() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.GuardOne.name}!`;
  guardOneDodge();
  renderGuardOneMatch();
  displayGuardOneAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
// -------------- PLAYER FUNCTIONS----------------------------
function atkGuardOne() {
  const atkGuardOneS1 = atkRoll();
  const atkGuardOneS2 = atkRoll();
  const atkGuardOneS3 = atkRoll();
  const atkGuardOneScore = atkGuardOneS1 + atkGuardOneS2 + atkGuardOneS3;
  document.getElementById("apD1").innerText = atkGuardOneS1;
  document.getElementById("apD2").innerText = atkGuardOneS2;
  document.getElementById("apD3").innerText = atkGuardOneS3;
  ambushDice();
  guardOneDefDice();
  if (atkGuardOneScore > guardOneDefScore) {
    hitGuardOne();
  } else if (atkGuardOneScore < guardOneDefScore) {
    missGuardOne();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.GuardOne.name} are well matched!`;
    setTimeout(displayGuardOneFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
function defGuardOne() {
  const defGuardOneS1 = defRoll();
  const defGuardOneS2 = defRoll();
  const defGuardOneS3 = defRoll();
  const defGuardOneScore = defGuardOneS1 + defGuardOneS2 + defGuardOneS3;
  document.getElementById("apD1").innerText = defGuardOneS1;
  document.getElementById("apD2").innerText = defGuardOneS2;
  document.getElementById("apD3").innerText = defGuardOneS3;
  ambushDice();
  guardOneAtkDice();
  if (defGuardOneScore > guardOneAtkScore) {
    guardOneHit();
  } else if (defGuardOneScore < guardOneAtkScore) {
    guardOneMiss();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.GuardOne.name} are well matched!`;
    setTimeout(displayGuardOneFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
export { guardOneAppear, atkGuardOne, defGuardOne };
