import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  winMatch,
  renderBattlePlayer,
  atkRoll,
  defRoll,
  pointCheck,
} from "/JS/player.js";
import { battleTalk } from "/JS/CHATS/talk.js";
import { battleMsg } from "/JS/CHATS/msg.js";
import {
  battDiceReset,
  showBattFight,
  hideBattFight,
  showBattleChoice,
  rollMatchDice,
} from "/JS/UTIL/battle.js";
// --------- DECLARATIONS---------------------------------------
let guardianA1Score = guardianAtkRoll();
let guardianA2Score = guardianAtkRoll();
let guardianA3Score = guardianAtkRoll();
let guardianD1Score = guardianDefRoll();
let guardianD2Score = guardianDefRoll();
let guardianD3Score = guardianDefRoll();
let guardianAtkScore = guardianA1Score + guardianA2Score + guardianA3Score;
let guardianDefScore = guardianD1Score + guardianD2Score + guardianD3Score;
function guardianAtkRoll(min = 1, max = enemies.Guardian.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Guardian.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function guardianDefRoll(min = 1, max = enemies.Guardian.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Guardian.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function guardianAtkDice() {
  document.getElementById("enD1").innerText = guardianA1Score;
  document.getElementById("enD2").innerText = guardianA2Score;
  document.getElementById("enD3").innerText = guardianA3Score;
}
function guardianDefDice() {
  document.getElementById("enD1").innerText = guardianD1Score;
  document.getElementById("enD2").innerText = guardianD2Score;
  document.getElementById("enD3").innerText = guardianD3Score;
}
function dispGuardianFight() {
  showBattFight();
  document.getElementById("guarAtk").style.display = "block";
  document.getElementById("guarDef").style.display = "block";
}
function dispGuardianAtk() {
  document.getElementById("guarAtk").style.display = "block";
  document.getElementById("guarDef").style.display = "none";
}
function dispGuardianDef() {
  document.getElementById("guarAtk").style.display = "none";
  document.getElementById("guarDef").style.display = "block";
}
function guardianAppear() {
  guardianHP();
  renderGuardian();
  guardianTalk();
}
function renderGuardian() {
  document.getElementById("guardian").style.display = "block";
  document.getElementById("guardianStat").style.display = "block";
  document.getElementById(
    "guardianStat"
  ).innerText = `NAME: ${enemies.Guardian.name} | HP: ${enemies.Guardian.hp} | STR: ${enemies.Guardian.str} | DEF: ${enemies.Guardian.def}| AB: ${enemies.Guardian.ab}|  `;
}
function killGuardian() {
  document.getElementById("guardian").style.display = "none";
  document.getElementById("guardianStat").style.display = "none";
  enemies.Guardian.alive = false;
  players.Player1.vanquished.push(` ${enemies.Guardian.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function guardianHP() {
  if (enemies.Guardian.hp >= 1) {
    renderGuardian();
  } else {
    killGuardian();
  }
}
// --------- DIALOGUES ---------------------------------------
function guardianTalk() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.chat[
      Math.floor(Math.random() * enemies.Guardian.chat.length)
    ]
  }`;
}
function guardianHurt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.hits[
      Math.floor(Math.random() * enemies.Guardian.hits.length)
    ]
  }`;
}
function guardianBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.miss[
      Math.floor(Math.random() * enemies.Guardian.miss.length)
    ]
  }`;
}
function guardianTaunt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.taunt[
      Math.floor(Math.random() * enemies.Guardian.taunt.length)
    ]
  }`;
}
function guardianDodge() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Guardian.name
  }: ${
    enemies.Guardian.dodge[
      Math.floor(Math.random() * enemies.Guardian.dodge.length)
    ]
  }`;
}
// ---------  REACTIONS---------------------------------------
function renderGuardianMatch() {
  guardianHP();
  pointCheck();
  renderBattlePlayer();
}
function hitGuardian() {
  enemies.Guardian.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Guardian.name}!`;
  guardianHurt();
  renderGuardianMatch();
  dispGuardianAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missGuardian() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Guardian.name}!`;
  guardianBlock();
  renderGuardianMatch();
  dispGuardianDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function guardianHit() {
  players.Player1.hp -= enemies.Guardian.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Guardian.name} hit you!`;
  guardianTaunt();
  renderGuardianMatch();
  dispGuardianDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function guardianMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Guardian.name}!`;
  guardianDodge();
  renderGuardianMatch();
  dispGuardianAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkGuardian() {
  const atkGuarS1 = atkRoll();
  const atkGuarS2 = atkRoll();
  const atkGuarS3 = atkRoll();
  const atkGuardianScore = atkGuarS1 + atkGuarS2 + atkGuarS3;
  document.getElementById("bD1").innerText = atkGuarS1;
  document.getElementById("bD2").innerText = atkGuarS2;
  document.getElementById("bD3").innerText = atkGuarS3;
  rollMatchDice();
  guardianDefDice();
  if (atkGuardianScore > guardianDefScore) {
    hitGuardian();
  } else if (atkGuardianScore < guardianDefScore) {
    missGuardian();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Guardian.name} are well matched!`;
    setTimeout(dispGuardianFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defGuardian() {
  const defGuarS1 = defRoll();
  const defGuarS2 = defRoll();
  const defGuarS3 = defRoll();
  const defGuardianScore = defGuarS1 + defGuarS2 + defGuarS3;
  document.getElementById("bD1").innerText = defGuarS1;
  document.getElementById("bD2").innerText = defGuarS2;
  document.getElementById("bD3").innerText = defGuarS3;
  rollMatchDice();
  guardianAtkDice();
  if (defGuardianScore > guardianAtkScore) {
    guardianMiss();
  } else if (defGuardianScore < guardianAtkScore) {
    guardianHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Guardian.name} are well matched!`;
    setTimeout(dispGuardianFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkGuardian, defGuardian, guardianAppear };
