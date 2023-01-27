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
import { witchAppear } from "/JS/ENEMIES/AMBUSH/witch.js";
// -------------- DECLARATIONS----------------------------
let guardTwoA1Score = guardTwoAtkRoll();
let guardTwoA2Score = guardTwoAtkRoll();
let guardTwoA3Score = guardTwoAtkRoll();
let guardTwoD1Score = guardTwoDefRoll();
let guardTwoD2Score = guardTwoDefRoll();
let guardTwoD3Score = guardTwoDefRoll();
let guardTwoAtkScore = guardTwoA1Score + guardTwoA2Score + guardTwoA3Score;
let guardTwoDefScore = guardTwoD1Score + guardTwoD2Score + guardTwoD3Score;
function guardTwoAtkRoll(min = 1, max = enemies.GuardTwo.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.GuardTwo.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function guardTwoDefRoll(min = 1, max = enemies.GuardTwo.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.GuardTwo.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------------- BASIC----------------------------
function guardTwoAtkDice() {
  document.getElementById("clrD1").innerText = guardTwoA1Score;
  document.getElementById("clrD2").innerText = guardTwoA2Score;
  document.getElementById("clrD3").innerText = guardTwoA3Score;
}
function guardTwoDefDice() {
  document.getElementById("clrD1").innerText = guardTwoD1Score;
  document.getElementById("clrD2").innerText = guardTwoD2Score;
  document.getElementById("clrD3").innerText = guardTwoD3Score;
}
function displayGuardTwoFight() {
  document.getElementById("guardTwoFight").style.display = "flex";
  document.getElementById("guardTwoAtk").style.display = "block";
  document.getElementById("guardTwoDef").style.display = "block";
}
function displayGuardTwoAtk() {
  document.getElementById("guardTwoAtk").style.display = "block";
  document.getElementById("guardTwoDef").style.display = "none";
}
function displayGuardTwoDef() {
  document.getElementById("guardTwoAtk").style.display = "none";
  document.getElementById("guardTwoDef").style.display = "block";
}
function guardTwoAppear() {
  guardTwoHP();
  renderGuardTwo();
  guardTwoTalk();
}
function guardTwoHide() {
  document.getElementById("guardTwo").style.display = "none";
  document.getElementById("guardTwoStat").style.display = "none";
}
function renderGuardTwo() {
  document.getElementById("guardTwo").style.display = "block";
  document.getElementById("guardTwoStat").style.display = "block";
  document.getElementById(
    "guardTwoStat"
  ).innerText = `NAME: ${enemies.GuardTwo.name} | HP: ${enemies.GuardTwo.hp} | STR: ${enemies.GuardTwo.str} | DEF: ${enemies.GuardTwo.def}| AB: ${enemies.GuardTwo.ab}|  `;
}
function killGuardTwo() {
  guardTwoHide();
  enemies.GuardTwo.alive = false;
  players.Player1.vanquished.push(` ${enemies.GuardTwo.name}`);
  winMatch();
  pointCheck();
  renderClearingPlayer();
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, get ready!`;
  setTimeout(clearMsg, 4000);
  setTimeout(witchAppear, 4500);
}
function guardTwoHP() {
  if (enemies.GuardTwo.hp >= 1) {
    renderGuardTwo();
  } else {
    killGuardTwo();
  }
}
// -------------- DIALOGUES----------------------------
function guardTwoTalk() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardTwo.name}: ${
    enemies.GuardTwo.chat[
      Math.floor(Math.random() * enemies.GuardTwo.chat.length)
    ]
  }`;
}
function guardTwoHurt() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardTwo.name}: ${
    enemies.GuardTwo.hits[
      Math.floor(Math.random() * enemies.GuardTwo.hits.length)
    ]
  }`;
}
function guardTwoBlock() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardTwo.name}: ${
    enemies.GuardTwo.miss[
      Math.floor(Math.random() * enemies.GuardTwo.miss.length)
    ]
  }`;
}
function guardTwoTaunt() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardTwo.name}: ${
    enemies.GuardTwo.taunt[
      Math.floor(Math.random() * enemies.GuardTwo.taunt.length)
    ]
  }`;
}
function guardTwoDodge() {
  document.getElementById("clearTalk").innerText = `${enemies.GuardTwo.name}: ${
    enemies.GuardTwo.dodge[
      Math.floor(Math.random() * enemies.GuardTwo.dodge.length)
    ]
  }`;
}
// -------------- REACTIONS----------------------------
function renderGuardTwoMatch() {
  guardTwoHP();
  pointCheck();
  renderClearingPlayer();
}
function hitGuardTwo() {
  enemies.GuardTwo.hp -= players.Player1.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.GuardTwo.name}!`;
  guardTwoHurt();
  renderGuardTwoMatch();
  displayGuardTwoAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function missGuardTwo() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.GuardTwo.name}!`;
  guardTwoBlock();
  renderGuardTwoMatch();
  displayGuardTwoDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function guardTwoHit() {
  players.Player1.hp -= enemies.GuardTwo.str;
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, ${enemies.GuardTwo.name} hit you!`;
  guardTwoTaunt();
  renderGuardTwoMatch();
  displayGuardTwoDef();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
function guardTwoMiss() {
  document.getElementById(
    "clearMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.GuardTwo.name}!`;
  guardTwoDodge();
  renderGuardTwoMatch();
  displayGuardTwoAtk();
  setTimeout(clearMsg, 4000);
  setTimeout(clearTalk, 4000);
}
// -------------- PLAYER FUNCTIONS----------------------------
function atkGuardTwo() {
  const atkGuardTwoS1 = atkRoll();
  const atkGuardTwoS2 = atkRoll();
  const atkGuardTwoS3 = atkRoll();
  const atkGuardTwoScore = atkGuardTwoS1 + atkGuardTwoS2 + atkGuardTwoS3;
  document.getElementById("apD1").innerText = atkGuardTwoS1;
  document.getElementById("apD2").innerText = atkGuardTwoS2;
  document.getElementById("apD3").innerText = atkGuardTwoS3;
  ambushDice();
  guardTwoDefDice();
  if (atkGuardTwoScore > guardTwoDefScore) {
    hitGuardTwo();
  } else if (atkGuardTwoScore < guardTwoDefScore) {
    missGuardTwo();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.GuardTwo.name} are well matched!`;
    setTimeout(displayGuardTwoFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
function defGuardTwo() {
  const defGuardTwoS1 = defRoll();
  const defGuardTwoS2 = defRoll();
  const defGuardTwoS3 = defRoll();
  const defGuardTwoScore = defGuardTwoS1 + defGuardTwoS2 + defGuardTwoS3;
  document.getElementById("apD1").innerText = defGuardTwoS1;
  document.getElementById("apD2").innerText = defGuardTwoS2;
  document.getElementById("apD3").innerText = defGuardTwoS3;
  ambushDice();
  guardTwoAtkDice();
  if (defGuardTwoScore > guardTwoAtkScore) {
    guardTwoHit();
  } else if (defGuardTwoScore < guardTwoAtkScore) {
    guardTwoMiss();
  } else {
    document.getElementById(
      "clearMsg"
    ).innerText = `${players.Player1.name} & ${enemies.GuardTwo.name} are well matched!`;
    setTimeout(displayGuardTwoFight, 4000);
  }
  setTimeout(clearMsg, 4000);
  setTimeout(ambushDiceReset, 5000);
}
export { guardTwoAppear, guardTwoHide, atkGuardTwo, defGuardTwo };
