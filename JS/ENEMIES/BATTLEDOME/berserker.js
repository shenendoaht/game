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
let berserkerA1Score = berserkerAtkRoll();
let berserkerA2Score = berserkerAtkRoll();
let berserkerA3Score = berserkerAtkRoll();
let berserkerD1Score = berserkerDefRoll();
let berserkerD2Score = berserkerDefRoll();
let berserkerD3Score = berserkerDefRoll();
let berserkerAtkScore = berserkerA1Score + berserkerA2Score + berserkerA3Score;
let berserkerDefScore = berserkerD1Score + berserkerD2Score + berserkerD3Score;
function berserkerAtkRoll(min = 1, max = enemies.Berserker.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Berserker.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function berserkerDefRoll(min = 1, max = enemies.Berserker.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Berserker.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function berserkerAtkDice() {
  document.getElementById("enD1").innerText = berserkerA1Score;
  document.getElementById("enD2").innerText = berserkerA2Score;
  document.getElementById("enD3").innerText = berserkerA3Score;
}
function berserkerDefDice() {
  document.getElementById("enD1").innerText = berserkerD1Score;
  document.getElementById("enD2").innerText = berserkerD2Score;
  document.getElementById("enD3").innerText = berserkerD3Score;
}
function dispBerserkerFight() {
  showBattFight();
  document.getElementById("berAtk").style.display = "block";
  document.getElementById("berDef").style.display = "block";
}
function dispBerserkerAtk() {
  document.getElementById("berAtk").style.display = "block";
  document.getElementById("berDef").style.display = "none";
}
function dispBerserkerDef() {
  document.getElementById("berAtk").style.display = "none";
  document.getElementById("berDef").style.display = "block";
}
function berserkerAppear() {
  berserkerHP();
  renderBerserker();
  berserkerTalk();
}
function renderBerserker() {
  document.getElementById("berserker").style.display = "block";
  document.getElementById("berserkerStat").style.display = "block";
  document.getElementById(
    "berserkerStat"
  ).innerText = `NAME: ${enemies.Berserker.name} | HP: ${enemies.Berserker.hp} | STR: ${enemies.Berserker.str} | DEF: ${enemies.Berserker.def}| AB: ${enemies.Berserker.ab}|  `;
}
function killBerserker() {
  document.getElementById("berserker").style.display = "none";
  document.getElementById("berserkerStat").style.display = "none";
  enemies.Berserker.alive = false;
  players.Player1.vanquished.push(` ${enemies.Berserker.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function berserkerHP() {
  if (enemies.Berserker.hp >= 1) {
    renderBerserker();
  } else {
    killBerserker();
  }
}
// --------- DIALOGUES ---------------------------------------
function berserkerTalk() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.chat[
      Math.floor(Math.random() * enemies.Berserker.chat.length)
    ]
  }`;
}
function berserkerHurt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.hits[
      Math.floor(Math.random() * enemies.Berserker.hits.length)
    ]
  }`;
}
function berserkerBlock() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.miss[
      Math.floor(Math.random() * enemies.Berserker.miss.length)
    ]
  }`;
}
function berserkerTaunt() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.taunt[
      Math.floor(Math.random() * enemies.Berserker.taunt.length)
    ]
  }`;
}
function berserkerDodge() {
  document.getElementById("battleTalk").innerText = `${
    enemies.Berserker.name
  }: ${
    enemies.Berserker.dodge[
      Math.floor(Math.random() * enemies.Berserker.dodge.length)
    ]
  }`;
}
// ---------  REACTIONS---------------------------------------
function renderBerserkerMatch() {
  berserkerHP();
  pointCheck();
  renderBattlePlayer();
}
function hitBerserker() {
  enemies.Berserker.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Berserker.name}!`;
  berserkerHurt();
  renderBerserkerMatch();
  dispBerserkerAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missBerserker() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Berserker.name}!`;
  berserkerBlock();
  renderBerserkerMatch();
  dispBerserkerDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function berserkerHit() {
  players.Player1.hp -= enemies.Berserker.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Berserker.name} hit you!`;
  berserkerTaunt();
  renderBerserkerMatch();
  dispBerserkerDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function berserkerMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Berserker.name}!`;
  berserkerDodge();
  renderBerserkerMatch();
  dispBerserkerAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkBerserker() {
  const atkBerS1 = atkRoll();
  const atkBerS2 = atkRoll();
  const atkBerS3 = atkRoll();
  const atkBerserkerScore = atkBerS1 + atkBerS2 + atkBerS3;
  document.getElementById("bD1").innerText = atkBerS1;
  document.getElementById("bD2").innerText = atkBerS2;
  document.getElementById("bD3").innerText = atkBerS3;
  rollMatchDice();
  berserkerDefDice();
  if (atkBerserkerScore > berserkerDefScore) {
    hitBerserker();
  } else if (atkBerserkerScore < berserkerDefScore) {
    missBerserker();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Berserker.name} are well matched!`;
    setTimeout(dispBerserkerFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defBerserker() {
  const defBerS1 = defRoll();
  const defBerS2 = defRoll();
  const defBerS3 = defRoll();
  const defBerserkerScore = defBerS1 + defBerS2 + defBerS3;
  document.getElementById("bD1").innerText = defBerS1;
  document.getElementById("bD2").innerText = defBerS2;
  document.getElementById("bD3").innerText = defBerS3;
  rollMatchDice();
  berserkerAtkDice();
  if (defBerserkerScore > berserkerAtkScore) {
    berserkerMiss();
  } else if (defBerserkerScore < berserkerAtkScore) {
    berserkerHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Berserker.name} are well matched!`;
    setTimeout(dispBerserkerFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkBerserker, defBerserker, berserkerAppear };
