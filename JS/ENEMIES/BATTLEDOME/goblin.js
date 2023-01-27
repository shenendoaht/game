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
  battleDice,
  enemyDice,
  rollMatchDice,
} from "/JS/UTIL/battle.js";
// --------- GOBLIN DECLARATIONS ---------------------------------------
let gobA1Score = gobAtkRoll();
let gobA2Score = gobAtkRoll();
let gobA3Score = gobAtkRoll();
let gobD1Score = gobDefRoll();
let gobD2Score = gobDefRoll();
let gobD3Score = gobDefRoll();
let gobAtkScore = gobA1Score + gobA2Score + gobA3Score;
let gobDefScore = gobD1Score + gobD2Score + gobD3Score;
function gobAtkRoll(min = 1, max = enemies.Goblin.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Goblin.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function gobDefRoll(min = 1, max = enemies.Goblin.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Goblin.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------- GOBLIN BASICS ---------------------------------------
function gobAtkDice() {
  document.getElementById("enD1").innerText = gobA1Score;
  document.getElementById("enD2").innerText = gobA2Score;
  document.getElementById("enD3").innerText = gobA3Score;
}
function gobDefDice() {
  document.getElementById("enD1").innerText = gobD1Score;
  document.getElementById("enD2").innerText = gobD2Score;
  document.getElementById("enD3").innerText = gobD3Score;
}
function dispGobFight() {
  showBattFight();
  document.getElementById("gobAtk").style.display = "block";
  document.getElementById("gobDef").style.display = "block";
}
function dispGobAtk() {
  document.getElementById("gobAtk").style.display = "block";
  document.getElementById("gobDef").style.display = "none";
}
function dispGobDef() {
  document.getElementById("gobAtk").style.display = "none";
  document.getElementById("gobDef").style.display = "block";
}
function gobAppear() {
  gobHP();
  renderGoblin();
  gobTalk();
}
function renderGoblin() {
  document.getElementById("goblin").style.display = "block";
  document.getElementById("gobStat").style.display = "block";
  document.getElementById(
    "gobStat"
  ).innerText = `NAME: ${enemies.Goblin.name} | HP: ${enemies.Goblin.hp} | STR: ${enemies.Goblin.str} | DEF: ${enemies.Goblin.def}| AB: ${enemies.Goblin.ab}|  `;
}
function gobHP() {
  if (enemies.Goblin.hp >= 1) {
    renderGoblin();
  } else {
    killGoblin();
  }
}
function killGoblin() {
  document.getElementById("goblin").style.display = "none";
  document.getElementById("gobStat").style.display = "none";
  enemies.Goblin.alive = false;
  players.Player1.vanquished.push(` ${enemies.Goblin.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}

// --------- DIALOGUES---------------------------------------
function gobTalk() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.chat[Math.floor(Math.random() * enemies.Goblin.chat.length)]
  }`;
}
function gobHurt() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.hits[Math.floor(Math.random() * enemies.Goblin.hits.length)]
  }`;
}
function gobBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.miss[Math.floor(Math.random() * enemies.Goblin.miss.length)]
  }`;
}
function gobTaunt() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.taunt[
      Math.floor(Math.random() * enemies.Goblin.taunt.length)
    ]
  }`;
}
function gobDodge() {
  document.getElementById("battleTalk").innerText = `${enemies.Goblin.name}: ${
    enemies.Goblin.dodge[
      Math.floor(Math.random() * enemies.Goblin.dodge.length)
    ]
  }`;
}
// --------- GOBLIN REACTIONS---------------------------------------
function renderGobMatch() {
  gobHP();
  pointCheck();
  renderBattlePlayer();
}
function hitGob() {
  enemies.Goblin.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Goblin.name}!`;
  gobHurt();
  renderGobMatch();
  dispGobAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missGob() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Goblin.name}!`;
  gobBlock();
  renderGobMatch();
  dispGobDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function gobHit() {
  players.Player1.hp -= enemies.Goblin.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Goblin.name} hit you!`;
  gobTaunt();
  renderGobMatch();
  dispGobDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function gobMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Goblin.name}!`;
  gobDodge();
  renderGobMatch();
  dispGobAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS ---------------------------------------
function atkGob() {
  const atkGobS1 = atkRoll();
  const atkGobS2 = atkRoll();
  const atkGobS3 = atkRoll();
  const atkGobScore = atkGobS1 + atkGobS2 + atkGobS3;
  document.getElementById("bD1").innerText = atkGobS1;
  document.getElementById("bD2").innerText = atkGobS2;
  document.getElementById("bD3").innerText = atkGobS3;
  rollMatchDice();
  gobDefDice();
  if (atkGobScore > gobDefScore) {
    hitGob();
  } else if (atkGobScore < gobDefScore) {
    missGob();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Goblin.name} are well matched!`;
    setTimeout(dispGobFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defGob() {
  const defGobS1 = defRoll();
  const defGobS2 = defRoll();
  const defGobS3 = defRoll();
  const defGobScore = defGobS1 + defGobS2 + defGobS3;
  document.getElementById("bD1").innerText = defGobS1;
  document.getElementById("bD2").innerText = defGobS2;
  document.getElementById("bD3").innerText = defGobS3;
  rollMatchDice();
  gobAtkDice();
  if (defGobScore > gobAtkScore) {
    gobMiss();
  } else if (defGobScore < gobAtkScore) {
    gobHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Goblin.name} are well matched!`;
    setTimeout(dispGobFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { gobAppear, atkGob, defGob };
