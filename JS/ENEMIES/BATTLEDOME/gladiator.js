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
let gladiatorA1Score = gladiatorAtkRoll();
let gladiatorA2Score = gladiatorAtkRoll();
let gladiatorA3Score = gladiatorAtkRoll();
let gladiatorD1Score = gladiatorDefRoll();
let gladiatorD2Score = gladiatorDefRoll();
let gladiatorD3Score = gladiatorDefRoll();
let gladiatorAtkScore = gladiatorA1Score + gladiatorA2Score + gladiatorA3Score;
let gladiatorDefScore = gladiatorD1Score + gladiatorD2Score + gladiatorD3Score;
function gladiatorAtkRoll(min = 1, max = enemies.Gladiator.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Gladiator.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function gladiatorDefRoll(min = 1, max = enemies.Gladiator.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Gladiator.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function gladiatorAtkDice() {
  document.getElementById("enD1").innerText = gladiatorA1Score;
  document.getElementById("enD2").innerText = gladiatorA2Score;
  document.getElementById("enD3").innerText = gladiatorA3Score;
}
function gladiatorDefDice() {
  document.getElementById("enD1").innerText = gladiatorD1Score;
  document.getElementById("enD2").innerText = gladiatorD2Score;
  document.getElementById("enD3").innerText = gladiatorD3Score;
}
function dispGladiatorFight() {
  showBattFight();
  document.getElementById("gladAtk").style.display = "block";
  document.getElementById("gladDef").style.display = "block";
}
function dispGladiatorAtk() {
  document.getElementById("gladAtk").style.display = "block";
  document.getElementById("gladDef").style.display = "none";
}
function dispGladiatorDef() {
  document.getElementById("gladAtk").style.display = "none";
  document.getElementById("gladDef").style.display = "block";
}
function gladiatorAppear() {
  gladiatorHP();
  renderGladiator();
  gladiatorTalk();
}
function renderGladiator() {
  document.getElementById("gladiator").style.display = "block";
  document.getElementById("gladiatorStat").style.display = "block";
  document.getElementById(
    "gladiatorStat"
  ).innerText = `NAME: ${enemies.Gladiator.name} | HP: ${enemies.Gladiator.hp} | STR: ${enemies.Gladiator.str} | DEF: ${enemies.Gladiator.def}| AB: ${enemies.Gladiator.ab}|  `;
}
function killGladiator() {
  document.getElementById("gladiator").style.display = "none";
  document.getElementById("gladiatorStat").style.display = "none";
  enemies.Gladiator.alive = false;
  players.Player1.vanquished.push(` ${enemies.Gladiator.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function gladiatorHP() {
  if (enemies.Gladiator.hp >= 1) {
    renderGladiator();
  } else {
    killGladiator();
  }
}
// --------- DIALOGUES ---------------------------------------
function gladiatorTalk() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.chat[
      Math.floor(Math.random() * enemies.Gladiator.chat.length)
    ]
  }`;
}
function gladiatorHurt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.hits[
      Math.floor(Math.random() * enemies.Gladiator.hits.length)
    ]
  }`;
}
function gladiatorBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.miss[
      Math.floor(Math.random() * enemies.Gladiator.miss.length)
    ]
  }`;
}
function gladiatorTaunt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.taunt[
      Math.floor(Math.random() * enemies.Gladiator.taunt.length)
    ]
  }`;
}
function gladiatorDodge() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Gladiator.name
  }: ${
    enemies.Gladiator.dodge[
      Math.floor(Math.random() * enemies.Gladiator.dodge.length)
    ]
  }`;
}
// ---------  REACTIONS---------------------------------------
function renderGladiatorMatch() {
  gladiatorHP();
  pointCheck();
  renderBattlePlayer();
}
function hitGladiator() {
  enemies.Gladiator.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Gladiator.name}!`;
  gladiatorHurt();
  renderGladiatorMatch();
  dispGladiatorAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missGladiator() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Gladiator.name}!`;
  gladiatorBlock();
  renderGladiatorMatch();
  dispGladiatorDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function gladiatorHit() {
  players.Player1.hp -= enemies.Gladiator.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Gladiator.name} hit you!`;
  gladiatorTaunt();
  renderGladiatorMatch();
  dispGladiatorDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function gladiatorMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Gladiator.name}!`;
  gladiatorDodge();
  renderGladiatorMatch();
  dispGladiatorAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkGladiator() {
  const atkGladS1 = atkRoll();
  const atkGladS2 = atkRoll();
  const atkGladS3 = atkRoll();
  const atkGladiatorScore = atkGladS1 + atkGladS2 + atkGladS3;
  document.getElementById("bD1").innerText = atkGladS1;
  document.getElementById("bD2").innerText = atkGladS2;
  document.getElementById("bD3").innerText = atkGladS3;
  rollMatchDice();
  gladiatorDefDice();
  if (atkGladiatorScore > gladiatorDefScore) {
    hitGladiator();
  } else if (atkGladiatorScore < gladiatorDefScore) {
    missGladiator();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Gladiator.name} are well matched!`;
    setTimeout(dispGladiatorFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defGladiator() {
  const defGladS1 = defRoll();
  const defGladS2 = defRoll();
  const defGladS3 = defRoll();
  const defGladiatorScore = defGladS1 + defGladS2 + defGladS3;
  document.getElementById("bD1").innerText = defGladS1;
  document.getElementById("bD2").innerText = defGladS2;
  document.getElementById("bD3").innerText = defGladS3;
  rollMatchDice();
  gladiatorAtkDice();
  if (defGladiatorScore > gladiatorAtkScore) {
    gladiatorMiss();
  } else if (defGladiatorScore < gladiatorAtkScore) {
    gladiatorHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Gladiator.name} are well matched!`;
    setTimeout(dispGladiatorFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkGladiator, defGladiator, gladiatorAppear };
