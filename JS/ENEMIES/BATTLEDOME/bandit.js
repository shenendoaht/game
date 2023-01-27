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
let banA1Score = banAtkRoll();
let banA2Score = banAtkRoll();
let banA3Score = banAtkRoll();
let banD1Score = banDefRoll();
let banD2Score = banDefRoll();
let banD3Score = banDefRoll();
let banAtkScore = banA1Score + banA2Score + banA3Score;
let banDefScore = banD1Score + banD2Score + banD3Score;
function banAtkRoll(min = 1, max = enemies.Bandit.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Bandit.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function banDefRoll(min = 1, max = enemies.Bandit.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Bandit.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// -------- BASIC ---------------------------------------
function banditAtkDice() {
  document.getElementById("enD1").innerText = banA1Score;
  document.getElementById("enD2").innerText = banA2Score;
  document.getElementById("enD3").innerText = banA3Score;
}
function banditDefDice() {
  document.getElementById("enD1").innerText = banD1Score;
  document.getElementById("enD2").innerText = banD2Score;
  document.getElementById("enD3").innerText = banD3Score;
}
function dispBanditFight() {
  showBattFight();
  document.getElementById("banAtk").style.display = "block";
  document.getElementById("banDef").style.display = "block";
}
function dispBanditAtk() {
  document.getElementById("banAtk").style.display = "block";
  document.getElementById("banDef").style.display = "none";
}
function dispBanditDef() {
  document.getElementById("banAtk").style.display = "none";
  document.getElementById("banDef").style.display = "block";
}
function banditAppear() {
  banditHP();
  renderBandit();
  banditTalk();
}
function renderBandit() {
  document.getElementById("bandit").style.display = "block";
  document.getElementById("banditStat").style.display = "block";
  document.getElementById(
    "banditStat"
  ).innerText = `NAME: ${enemies.Bandit.name} | HP: ${enemies.Bandit.hp} | STR: ${enemies.Bandit.str} | DEF: ${enemies.Bandit.def}| AB: ${enemies.Bandit.ab}|  `;
}
function killBandit() {
  document.getElementById("bandit").style.display = "none";
  document.getElementById("banditStat").style.display = "none";
  enemies.Bandit.alive = false;
  players.Player1.vanquished.push(` ${enemies.Bandit.name}`);
  hideBattFight();
  winMatch();
  pointCheck();
  renderBattlePlayer();
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name} would you like to continue?`;
  showBattleChoice();
}
function banditHP() {
  if (enemies.Bandit.hp >= 1) {
    renderBandit();
  } else {
    killBandit();
  }
}
// --------- DIALOGUES ---------------------------------------
function banditTalk() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.chat[Math.floor(Math.random() * enemies.Bandit.chat.length)]
  }`;
}
function banditHurt() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.hits[Math.floor(Math.random() * enemies.Bandit.hits.length)]
  }`;
}
function banditBlock() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.miss[Math.floor(Math.random() * enemies.Bandit.miss.length)]
  }`;
}
function banditTaunt() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.taunt[
      Math.floor(Math.random() * enemies.Bandit.taunt.length)
    ]
  }`;
}
function banditDodge() {
  document.getElementById("battleTalk").innerText = `${enemies.Bandit.name}: ${
    enemies.Bandit.dodge[
      Math.floor(Math.random() * enemies.Bandit.dodge.length)
    ]
  }`;
}
// --------- BANDIT REACTIONS---------------------------------------
function renderBanditMatch() {
  banditHP();
  pointCheck();
  renderBattlePlayer();
}
function hitBandit() {
  enemies.Bandit.hp -= players.Player1.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Bandit.name}!`;
  banditHurt();
  renderBanditMatch();
  dispBanditAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function missBandit() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Bandit.name}!`;
  banditBlock();
  renderBanditMatch();
  dispBanditDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function banditHit() {
  players.Player1.hp -= enemies.Bandit.str;
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Bandit.name} hit you!`;
  banditTaunt();
  renderBanditMatch();
  dispBanditDef();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
function banditMiss() {
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Bandit.name}!`;
  banditDodge();
  renderBanditMatch();
  dispBanditAtk();
  setTimeout(battleMsg, 4000);
  setTimeout(battleTalk, 4000);
}
// --------- PLAYER FUNCTIONS---------------------------------------
function atkBandit() {
  const atkBanS1 = atkRoll();
  const atkBanS2 = atkRoll();
  const atkBanS3 = atkRoll();
  const atkBanScore = atkBanS1 + atkBanS2 + atkBanS3;
  document.getElementById("bD1").innerText = atkBanS1;
  document.getElementById("bD2").innerText = atkBanS2;
  document.getElementById("bD3").innerText = atkBanS3;
  rollMatchDice();
  banditDefDice();
  if (atkBanScore > banDefScore) {
    hitBandit();
  } else if (atkBanScore < banDefScore) {
    missBandit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Bandit.name} are well matched!`;
    setTimeout(dispBanditFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
function defBandit() {
  const defBanS1 = defRoll();
  const defBanS2 = defRoll();
  const defBanS3 = defRoll();
  const defBanScore = defBanS1 + defBanS2 + defBanS3;
  document.getElementById("bD1").innerText = defBanS1;
  document.getElementById("bD2").innerText = defBanS2;
  document.getElementById("bD3").innerText = defBanS3;
  rollMatchDice();
  banditAtkDice();
  if (defBanScore > banAtkScore) {
    banditMiss();
  } else if (defBanScore < banAtkScore) {
    banditHit();
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Bandit.name} are well matched!`;
    setTimeout(dispBanditFight, 4000);
  }
  setTimeout(battleMsg, 4000);
  setTimeout(battDiceReset, 5000);
}
export { atkBandit, defBandit, banditAppear };
