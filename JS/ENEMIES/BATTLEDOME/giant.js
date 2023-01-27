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
let giantA1Score = giantAtkRoll();
let giantA2Score = giantAtkRoll();
let giantA3Score = giantAtkRoll();
let giantD1Score = giantDefRoll();
let giantD2Score = giantDefRoll();
let giantD3Score = giantDefRoll();
let giantAtkScore = giantA1Score + giantA2Score + giantA3Score;
let giantDefScore = giantD1Score + giantD2Score + giantD3Score;
function giantAtkRoll(min = 1, max = enemies.Giant.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Giant.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function giantDefRoll(min = 1, max = enemies.Giant.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Giant.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function giantAtkDice() {
  document.getElementById("enD1").innerText = giantA1Score;
  document.getElementById("enD2").innerText = giantA2Score;
  document.getElementById("enD3").innerText = giantA3Score;
}
function giantDefDice() {
  document.getElementById("enD1").innerText = giantD1Score;
  document.getElementById("enD2").innerText = giantD2Score;
  document.getElementById("enD3").innerText = giantD3Score;
}
function dispGiantFight() {
  showBattFight();
  document.getElementById("giantAtk").style.display = "block";
  document.getElementById("giantDef").style.display = "block";
}
function dispGiantAtk() {
  document.getElementById("giantAtk").style.display = "block";
  document.getElementById("giantDef").style.display = "none";
}
function dispGiantDef() {
  document.getElementById("giantAtk").style.display = "none";
  document.getElementById("giantDef").style.display = "block";
}
function giantAppear() {
  giantHP();
  renderGiant();
  giantTalk();
}
function renderGiant() {
  document.getElementById("giant").style.display = "block";
  document.getElementById("giantStat").style.display = "block";
  document.getElementById(
    "giantStat"
  ).innerText = `NAME: ${enemies.Giant.name} | HP: ${enemies.Giant.hp} | STR: ${enemies.Giant.str} | DEF: ${enemies.Giant.def}| AB: ${enemies.Giant.ab}|  `;
}
function killGiant() {
  document.getElementById("giant").style.display = "none";
  document.getElementById("giantStat").style.display = "none";
  enemies.Giant.alive = false;
  players.Player1.vanquished.push(` ${enemies.Giant.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function giantHP() {
  if (enemies.Giant.hp >= 1) {
    renderGiant();
  } else {
    killGiant();
  }
}
// --------- DIALOGUES ---------------------------------------
function giantTalk() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.chat[Math.floor(Math.random() * enemies.Giant.chat.length)]
  }`;
}
function giantHurt() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.hits[Math.floor(Math.random() * enemies.Giant.hits.length)]
  }`;
}
function giantBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.miss[Math.floor(Math.random() * enemies.Giant.miss.length)]
  }`;
}
function giantTaunt() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.taunt[Math.floor(Math.random() * enemies.Giant.taunt.length)]
  }`;
}
function giantDodge() {
  document.getElementById("battleTalk").innerText = `${enemies.Giant.name}: ${
    enemies.Giant.dodge[Math.floor(Math.random() * enemies.Giant.dodge.length)]
  }`;
}
// ---------  REACTIONS---------------------------------------
function renderGiantMatch() {
  giantHP();
  pointCheck();
  renderBattlePlayer();
}
function hitGiant() {
  enemies.Giant.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Giant.name}!`;
  giantHurt();
  renderGiantMatch();
  dispGiantAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missGiant() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Giant.name}!`;
  giantBlock();
  renderGiantMatch();
  dispGiantDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function giantHit() {
  players.Player1.hp -= enemies.Giant.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Giant.name} hit you!`;
  giantTaunt();
  renderGiantMatch();
  dispGiantDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function giantMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Giant.name}!`;
  giantDodge();
  renderGiantMatch();
  dispGiantAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkGiant() {
  const atkGiantS1 = atkRoll();
  const atkGiantS2 = atkRoll();
  const atkGiantS3 = atkRoll();
  const atkGiantScore = atkGiantS1 + atkGiantS2 + atkGiantS3;
  document.getElementById("bD1").innerText = atkGiantS1;
  document.getElementById("bD2").innerText = atkGiantS2;
  document.getElementById("bD3").innerText = atkGiantS3;
  rollMatchDice();
  giantDefDice();
  if (atkGiantScore > giantDefScore) {
    hitGiant();
  } else if (atkGiantScore < giantDefScore) {
    missGiant();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Giant.name} are well matched!`;
    setTimeout(dispGiantFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defGiant() {
  const defGiantS1 = defRoll();
  const defGiantS2 = defRoll();
  const defGiantS3 = defRoll();
  const defGiantScore = defGiantS1 + defGiantS2 + defGiantS3;
  document.getElementById("bD1").innerText = defGiantS1;
  document.getElementById("bD2").innerText = defGiantS2;
  document.getElementById("bD3").innerText = defGiantS3;
  rollMatchDice();
  giantAtkDice();
  if (defGiantScore > giantAtkScore) {
    giantMiss();
  } else if (defGiantScore < giantAtkScore) {
    giantHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Giant.name} are well matched!`;
    setTimeout(dispGiantFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkGiant, defGiant, giantAppear };
