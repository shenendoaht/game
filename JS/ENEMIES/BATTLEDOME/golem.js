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
// ---------GOLEM DECLARATIONS---------------------------------------
let golemA1Score = golemAtkRoll();
let golemA2Score = golemAtkRoll();
let golemA3Score = golemAtkRoll();
let golemD1Score = golemDefRoll();
let golemD2Score = golemDefRoll();
let golemD3Score = golemDefRoll();
let golemAtkScore = golemA1Score + golemA2Score + golemA3Score;
let golemDefScore = golemD1Score + golemD2Score + golemD3Score;
function golemAtkRoll(min = 1, max = enemies.Golem.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Golem.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function golemDefRoll(min = 1, max = enemies.Golem.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Golem.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------GOLEM BASIC ---------------------------------------
function golemAtkDice() {
  document.getElementById("enD1").innerText = golemA1Score;
  document.getElementById("enD2").innerText = golemA2Score;
  document.getElementById("enD3").innerText = golemA3Score;
}
function golemDefDice() {
  document.getElementById("enD1").innerText = golemD1Score;
  document.getElementById("enD2").innerText = golemD2Score;
  document.getElementById("enD3").innerText = golemD3Score;
}
function dispGolemFight() {
  showBattFight();
  document.getElementById("golAtk").style.display = "block";
  document.getElementById("golDef").style.display = "block";
}
function dispGolemAtk() {
  document.getElementById("golAtk").style.display = "block";
  document.getElementById("golDef").style.display = "none";
}
function dispGolemDef() {
  document.getElementById("golAtk").style.display = "none";
  document.getElementById("golDef").style.display = "block";
}
function golemAppear() {
  golemHP();
  renderGolem();
  golemTalk();
}
function renderGolem() {
  document.getElementById("golem").style.display = "block";
  document.getElementById("golemStat").style.display = "block";
  document.getElementById(
    "golemStat"
  ).innerText = `NAME: ${enemies.Golem.name} | HP: ${enemies.Golem.hp} | STR: ${enemies.Golem.str} | DEF: ${enemies.Golem.def}| AB: ${enemies.Golem.ab}|  `;
}
function killGolem() {
  document.getElementById("golem").style.display = "none";
  document.getElementById("golemStat").style.display = "none";
  enemies.Golem.alive = false;
  players.Player1.vanquished.push(` ${enemies.Golem.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function golemHP() {
  if (enemies.Golem.hp >= 1) {
    renderGolem();
  } else {
    killGolem();
  }
}
// --------- DIALOGUES ---------------------------------------
function golemTalk() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.chat[Math.floor(Math.random() * enemies.Golem.chat.length)]
  }`;
}
function golemHurt() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.hits[Math.floor(Math.random() * enemies.Golem.hits.length)]
  }`;
}
function golemBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.miss[Math.floor(Math.random() * enemies.Golem.miss.length)]
  }`;
}
function golemTaunt() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.taunt[Math.floor(Math.random() * enemies.Golem.taunt.length)]
  }`;
}
function golemDodge() {
  document.getElementById("battleTalk").innerText = `${enemies.Golem.name}: ${
    enemies.Golem.dodge[Math.floor(Math.random() * enemies.Golem.dodge.length)]
  }`;
}
// --------- GOLEM REACTIONS---------------------------------------
function renderGolemMatch() {
  golemHP();
  pointCheck();
  renderBattlePlayer();
}
function hitGolem() {
  enemies.Golem.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Golem.name}!`;
  golemHurt();
  renderGolemMatch();
  dispGolemAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missGolem() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Golem.name}!`;
  golemBlock();
  renderGolemMatch();
  dispGolemDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function golemHit() {
  players.Player1.hp -= enemies.Golem.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Golem.name} hit you!`;
  golemTaunt();
  renderGolemMatch();
  dispGolemDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function golemMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Golem.name}!`;
  golemDodge();
  renderGolemMatch();
  dispGolemAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkGolem() {
  const atkGolS1 = atkRoll();
  const atkGolS2 = atkRoll();
  const atkGolS3 = atkRoll();
  const atkGolemScore = atkGolS1 + atkGolS2 + atkGolS3;
  document.getElementById("bD1").innerText = atkGolS1;
  document.getElementById("bD2").innerText = atkGolS2;
  document.getElementById("bD3").innerText = atkGolS3;
  rollMatchDice();
  golemDefDice();
  if (atkGolemScore > golemDefScore) {
    hitGolem();
  } else if (atkGolemScore < golemDefScore) {
    missGolem();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Golem.name} are well matched!`;
    setTimeout(dispGolemFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defGolem() {
  const defGolS1 = defRoll();
  const defGolS2 = defRoll();
  const defGolS3 = defRoll();
  const defGolemScore = defGolS1 + defGolS2 + defGolS3;
  document.getElementById("bD1").innerText = defGolS1;
  document.getElementById("bD2").innerText = defGolS2;
  document.getElementById("bD3").innerText = defGolS3;
  rollMatchDice();
  golemAtkDice();
  if (defGolemScore > golemAtkScore) {
    golemMiss();
  } else if (defGolemScore < golemAtkScore) {
    golemHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Golem.name} are well matched!`;
    setTimeout(dispGolemFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkGolem, defGolem, golemAppear };
