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
let minotaurA1Score = minotaurAtkRoll();
let minotaurA2Score = minotaurAtkRoll();
let minotaurA3Score = minotaurAtkRoll();
let minotaurD1Score = minotaurDefRoll();
let minotaurD2Score = minotaurDefRoll();
let minotaurD3Score = minotaurDefRoll();
let minotaurAtkScore = minotaurA1Score + minotaurA2Score + minotaurA3Score;
let minotaurDefScore = minotaurD1Score + minotaurD2Score + minotaurD3Score;
function minotaurAtkRoll(min = 1, max = enemies.Minotaur.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Minotaur.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function minotaurDefRoll(min = 1, max = enemies.Minotaur.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Minotaur.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function minotaurAtkDice() {
  document.getElementById("enD1").innerText = minotaurA1Score;
  document.getElementById("enD2").innerText = minotaurA2Score;
  document.getElementById("enD3").innerText = minotaurA3Score;
}
function minotaurDefDice() {
  document.getElementById("enD1").innerText = minotaurD1Score;
  document.getElementById("enD2").innerText = minotaurD2Score;
  document.getElementById("enD3").innerText = minotaurD3Score;
}
function dispMinotaurFight() {
  showBattFight();
  document.getElementById("minoAtk").style.display = "block";
  document.getElementById("minoDef").style.display = "block";
}
function dispMinotaurAtk() {
  document.getElementById("minoAtk").style.display = "block";
  document.getElementById("minoDef").style.display = "none";
}
function dispMinotaurDef() {
  document.getElementById("minoAtk").style.display = "none";
  document.getElementById("minoDef").style.display = "block";
}
function minotaurAppear() {
  minotaurHP();
  renderMinotaur();
  minotaurTalk();
}
function renderMinotaur() {
  document.getElementById("minotaur").style.display = "block";
  document.getElementById("minotaurStat").style.display = "block";
  document.getElementById(
    "minotaurStat"
  ).innerText = `NAME: ${enemies.Minotaur.name} | HP: ${enemies.Minotaur.hp} | STR: ${enemies.Minotaur.str} | DEF: ${enemies.Minotaur.def}| AB: ${enemies.Minotaur.ab}|  `;
}
function killMinotaur() {
  document.getElementById("minotaur").style.display = "none";
  document.getElementById("minotaurStat").style.display = "none";
  enemies.Minotaur.alive = false;
  players.Player1.vanquished.push(` ${enemies.Minotaur.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function minotaurHP() {
  if (enemies.Minotaur.hp >= 1) {
    renderMinotaur();
  } else {
    killMinotaur();
  }
}
// --------- DIALOGUES ---------------------------------------
function minotaurTalk() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.chat[
      Math.floor(Math.random() * enemies.Minotaur.chat.length)
    ]
  }`;
}
function minotaurHurt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.hits[
      Math.floor(Math.random() * enemies.Minotaur.hits.length)
    ]
  }`;
}
function minotaurBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.miss[
      Math.floor(Math.random() * enemies.Minotaur.miss.length)
    ]
  }`;
}
function minotaurTaunt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.taunt[
      Math.floor(Math.random() * enemies.Minotaur.taunt.length)
    ]
  }`;
}
function minotaurDodge() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Minotaur.name
  }: ${
    enemies.Minotaur.dodge[
      Math.floor(Math.random() * enemies.Minotaur.dodge.length)
    ]
  }`;
}
// ---------  REACTIONS---------------------------------------
function renderMinotaurMatch() {
  minotaurHP();
  pointCheck();
  renderBattlePlayer();
}
function hitMinotaur() {
  enemies.Minotaur.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Minotaur.name}!`;
  minotaurHurt();
  renderMinotaurMatch();
  dispMinotaurAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missMinotaur() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Minotaur.name}!`;
  minotaurBlock();
  renderMinotaurMatch();
  dispMinotaurDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function minotaurHit() {
  players.Player1.hp -= enemies.Minotaur.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Minotaur.name} hit you!`;
  minotaurTaunt();
  renderMinotaurMatch();
  dispMinotaurDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function minotaurMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Minotaur.name}!`;
  minotaurDodge();
  renderMinotaurMatch();
  dispMinotaurAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkMinotaur() {
  const atkMinoS1 = atkRoll();
  const atkMinoS2 = atkRoll();
  const atkMinoS3 = atkRoll();
  const atkMinotaurScore = atkMinoS1 + atkMinoS2 + atkMinoS3;
  document.getElementById("bD1").innerText = atkMinoS1;
  document.getElementById("bD2").innerText = atkMinoS2;
  document.getElementById("bD3").innerText = atkMinoS3;
  rollMatchDice();
  minotaurDefDice();
  if (atkMinotaurScore > minotaurDefScore) {
    hitMinotaur();
  } else if (atkMinotaurScore < minotaurDefScore) {
    missMinotaur();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Minotaur.name} are well matched!`;
    setTimeout(dispMinotaurFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defMinotaur() {
  const defMinoS1 = defRoll();
  const defMinoS2 = defRoll();
  const defMinoS3 = defRoll();
  const defMinotaurScore = defMinoS1 + defMinoS2 + defMinoS3;
  document.getElementById("bD1").innerText = defMinoS1;
  document.getElementById("bD2").innerText = defMinoS2;
  document.getElementById("bD3").innerText = defMinoS3;
  rollMatchDice();
  minotaurAtkDice();
  if (defMinotaurScore > minotaurAtkScore) {
    minotaurMiss();
  } else if (defMinotaurScore < minotaurAtkScore) {
    minotaurHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Minotaur.name} are well matched!`;
    setTimeout(dispMinotaurFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkMinotaur, defMinotaur, minotaurAppear };
