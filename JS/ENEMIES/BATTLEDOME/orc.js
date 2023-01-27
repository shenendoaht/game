import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  checkHP,
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
  rollBattDice,
  hideBattFight,
  showBattleChoice,
  battleDice,
  enemyDice,
} from "/JS/UTIL/battle.js";

// ORC
let orcA1Score = orcAtkRoll();
let orcA2Score = orcAtkRoll();
let orcA3Score = orcAtkRoll();
let orcD1Score = orcDefRoll();
let orcD2Score = orcDefRoll();
let orcD3Score = orcDefRoll();
let orcAtkScore = orcA1Score + orcA2Score + orcA3Score;
let orcDefScore = orcD1Score + orcD2Score + orcD3Score;
function orcAtkRoll(min = 1, max = enemies.Orc.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Orc.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function orcDefRoll(min = 1, max = enemies.Orc.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Orc.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------------ORC FUNCTIONS-------------------------------------------
function renderOrc() {
  document.getElementById("orc").style.display = "block";
  document.getElementById("orcStat").style.display = "block";
  document.getElementById(
    "orcStat"
  ).innerText = `NAME: ${enemies.Orc.name} | HP: ${enemies.Orc.hp} | STR: ${enemies.Orc.str} | DEF: ${enemies.Orc.def}| AB: ${enemies.Orc.ab}|  `;
}
function orcFight() {
  showBattFight();
  document.getElementById("orcFight").style.display = "flex";
  document.getElementById("orcAtk").style.display = "block";
  document.getElementById("orcDef").style.display = "block";
}
function hideOrcFight() {
  document.getElementById("orcFight").style.display = "none";
}
function orcTalk() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.chat[Math.floor(Math.random() * enemies.Orc.chat.length)]
  }`;
}
function orcHurt() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.hits[Math.floor(Math.random() * enemies.Orc.hits.length)]
  }`;
}
function orcBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.miss[Math.floor(Math.random() * enemies.Orc.miss.length)]
  }`;
}
function orcTaunt() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.taunt[Math.floor(Math.random() * enemies.Orc.taunt.length)]
  }`;
}
function orcDodge() {
  document.getElementById("battleTalk").innerText = `${enemies.Orc.name}: ${
    enemies.Orc.dodge[Math.floor(Math.random() * enemies.Orc.dodge.length)]
  }`;
}
function orcAtkDice() {
  document.getElementById("enD1").innerText = orcA1Score;
  document.getElementById("enD2").innerText = orcA2Score;
  document.getElementById("enD3").innerText = orcA3Score;
}
function orcDefDice() {
  document.getElementById("enD1").innerText = orcD1Score;
  document.getElementById("enD2").innerText = orcD2Score;
  document.getElementById("enD3").innerText = orcD3Score;
}
function orcHP() {
  if (enemies.Orc.hp >= 1) {
    renderOrc();
  } else {
    killOrc();
  }
}
function killOrc() {
  document.getElementById("orc").style.display = "none";
  document.getElementById("orcStat").style.display = "none";
  enemies.Orc.alive = false;
  console.log(enemies.Orc.alive);
  hideOrcFight();
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  players.Player1.vanquished.push(` ${enemies.Orc.name}`);
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function orcAppear() {
  orcHP();
  orcFight();
  orcTalk();
}
// --------------INTERACT/BUTTON DISPLAY FUNCTIONS-------------------------------------------
function orcAtkDisp() {
  orcFight();
  document.getElementById("orcAtk").style.display = "block";
  document.getElementById("orcDef").style.display = "none";
}
function orcDefDisp() {
  orcFight();
  document.getElementById("orcDef").style.display = "block";
  document.getElementById("orcAtk").style.display = "none";
}
// --------------PLAYER FUNCTIONS (RESPONSE ROLLS)-------------------------------------------
function renderOrcMatch() {
  orcHP();
  pointCheck();
  renderBattlePlayer();
}
function hitOrc() {
  enemies.Orc.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Orc.name}!`;
  orcHurt();
  renderOrcMatch();
  orcAtkDisp();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missOrc() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Orc.name}!`;
  orcBlock();
  renderOrcMatch();
  orcDefDisp();
  setTimeout(battleTalk, 4000);
  setTimeout(battleMsg, 4000);
}
function orcHit() {
  players.Player1.hp -= enemies.Orc.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Orc.name} hit you!`;
  orcTaunt();
  orcDefDisp();
  checkHP();
  renderOrcMatch();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function orcMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Orc.name}!`;
  orcDodge();
  orcAtkDisp();
  renderOrcMatch();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------------BUTTON FUNCTIONS-------------------------------------------
function atkOrc() {
  const orcAtkS1 = atkRoll();
  const orcAtkS2 = atkRoll();
  const orcAtkS3 = atkRoll();
  const orcAScoreTot = orcAtkS1 + orcAtkS2 + orcAtkS3;
  document.getElementById("bD1").innerText = orcAtkS1;
  document.getElementById("bD2").innerText = orcAtkS2;
  document.getElementById("bD3").innerText = orcAtkS3;
  hideBattFight();
  rollBattDice();
  orcDefDice();
  if (orcAScoreTot > orcDefScore) {
    hitOrc();
  } else if (orcAScoreTot < orcDefScore) {
    missOrc();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Orc.name} are well matched!`;
    setTimeout(orcFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defOrc() {
  const orcDefS1 = defRoll();
  const orcDefS2 = defRoll();
  const orcDefS3 = defRoll();
  const orcDScoreTot = orcDefS1 + orcDefS2 + orcDefS3;
  document.getElementById("bD1").innerText = orcDefS1;
  document.getElementById("bD2").innerText = orcDefS2;
  document.getElementById("bD3").innerText = orcDefS3;
  hideBattFight();
  rollBattDice();
  orcAtkDice();
  if (orcDScoreTot > orcAtkScore) {
    orcMiss();
  } else if (orcDScoreTot < orcAtkScore) {
    orcHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Orc.name} are well matched!`;
    setTimeout(orcFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}

export { orcAppear, atkOrc, defOrc };
