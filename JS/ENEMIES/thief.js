import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  renderForestPlayer,
  pointCheck,
  winMatch,
  atkRoll,
  defRoll,
} from "/JS/player.js";
import { forestMsg } from "/JS/CHATS/msg.js";
import { forestTalk } from "/JS/CHATS/talk.js";
import { soldierAppear } from "/JS/CHARACTERS/soldier.js";

// --------------- DECLARATIONS ----------------------------
let thiefA1Score = thiefAtkRoll();
let thiefA2Score = thiefAtkRoll();
let thiefA3Score = thiefAtkRoll();
let thiefD1Score = thiefDefRoll();
let thiefD2Score = thiefDefRoll();
let thiefD3Score = thiefDefRoll();
let thiefAtkScore = thiefA1Score + thiefA2Score + thiefA3Score;
let thiefDefScore = thiefD1Score + thiefD2Score + thiefD3Score;
function thiefAtkRoll(min = 1, max = enemies.Thief.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Thief.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function thiefDefRoll(min = 1, max = enemies.Thief.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Thief.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------------- BASIC ----------------------------
function forestDice() {
  document.getElementById("forestDice").style.display = "block";
  thiefDice();
  forestPlayerDice();
}
function forestDiceReset() {
  document.getElementById("forestDice").style.display = "none";
}
function thiefDice() {
  document.getElementById("thiefDice").style.display = "flex";
  document.getElementById("thiefD1").style.display = "block";
  document.getElementById("thiefD2").style.display = "block";
  document.getElementById("thiefD3").style.display = "block";
}
function forestPlayerDice() {
  document.getElementById("forestPlayerDice").style.display = "flex";
  document.getElementById("forD1").style.display = "block";
  document.getElementById("forD2").style.display = "block";
  document.getElementById("forD3").style.display = "block";
}
function thiefAtkDice() {
  document.getElementById("thiefD1").innerText = thiefA1Score;
  document.getElementById("thiefD2").innerText = thiefA2Score;
  document.getElementById("thiefD3").innerText = thiefA3Score;
}
function thiefDefDice() {
  document.getElementById("thiefD1").innerText = thiefD1Score;
  document.getElementById("thiefD2").innerText = thiefD2Score;
  document.getElementById("thiefD3").innerText = thiefD3Score;
}
function displayThiefFight() {
  document.getElementById("thiefFight").style.display = "flex";
  document.getElementById("thiefAtk").style.display = "block";
  document.getElementById("thiefDef").style.display = "block";
}
function displayThiefAtk() {
  document.getElementById("thiefAtk").style.display = "block";
  document.getElementById("thiefDef").style.display = "none";
}
function displayThiefDef() {
  document.getElementById("thiefAtk").style.display = "none";
  document.getElementById("thiefDef").style.display = "block";
}
function thiefAppear() {
  thiefHP();
  renderThief();
  thiefTalk();
  displayThiefFight();
  document.getElementById("tree").style.display = "none";
  document.getElementById("searchTree").style.display = "none";
}
function thiefHide() {
  document.getElementById("thief").style.display = "none";
  document.getElementById("thiefStat").style.display = "none";
  document.getElementById("thiefFight").style.display = "none";
}
function renderThief() {
  document.getElementById("thief").style.display = "block";
  document.getElementById("thiefStat").style.display = "block";
  document.getElementById(
    "thiefStat"
  ).innerText = `NAME: ${enemies.Thief.name} | HP: ${enemies.Thief.hp} | STR: ${enemies.Thief.str} | DEF: ${enemies.Thief.def}| AB: ${enemies.Thief.ab}|  `;
}
function killThief() {
  enemies.Thief.alive = false;
  players.Player1.vanquished.push(` ${enemies.Thief.name}`);
  thiefHide();
  winMatch();
  pointCheck();
  renderForestPlayer();
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name} well done!`;
  setTimeout(soldierAppear, 3000);
}
function thiefHP() {
  if (enemies.Thief.hp >= 1) {
    renderThief();
  } else {
    killThief();
  }
}
// --------------- DIALOGUE ----------------------------
function thiefTalk() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.chat[Math.floor(Math.random() * enemies.Thief.chat.length)]
  }`;
}
function thiefHurt() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.hits[Math.floor(Math.random() * enemies.Thief.hits.length)]
  }`;
}
function thiefBlock() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.miss[Math.floor(Math.random() * enemies.Thief.miss.length)]
  }`;
}
function thiefTaunt() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.taunt[Math.floor(Math.random() * enemies.Thief.taunt.length)]
  }`;
}
function thiefDodge() {
  document.getElementById("forestTalk").innerText = `${enemies.Thief.name}: ${
    enemies.Thief.dodge[Math.floor(Math.random() * enemies.Thief.dodge.length)]
  }`;
}
// --------------- REACTIONS ----------------------------
function renderThiefMatch() {
  thiefHP();
  pointCheck();
  renderForestPlayer();
}
function hitThief() {
  enemies.Thief.hp -= players.Player1.str;
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Thief.name}!`;
  thiefHurt();
  renderThiefMatch();
  displayThiefAtk();
  setTimeout(forestMsg, 4000);
  setTimeout(forestTalk, 4000);
}
function missThief() {
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Thief.name}!`;
  thiefBlock();
  renderThiefMatch();
  displayThiefDef();
  setTimeout(forestMsg, 4000);
  setTimeout(forestTalk, 4000);
}
function thiefHit() {
  players.Player1.hp -= enemies.Thief.str;
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Thief.name} hit you!`;
  thiefTaunt();
  renderThiefMatch();
  displayThiefDef();
  setTimeout(forestMsg, 4000);
  setTimeout(forestTalk, 4000);
}
function thiefMiss() {
  document.getElementById(
    "forestMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Thief.name}!`;
  thiefDodge();
  renderThiefMatch();
  displayThiefAtk();
  setTimeout(forestMsg, 4000);
  setTimeout(forestTalk, 4000);
}
// --------------- PLAYER FUNCTIONS ----------------------------
function atkThief() {
  const atkThiefS1 = atkRoll();
  const atkThiefS2 = atkRoll();
  const atkThiefS3 = atkRoll();
  const atkThiefScore = atkThiefS1 + atkThiefS2 + atkThiefS3;
  document.getElementById("forD1").innerText = atkThiefS1;
  document.getElementById("forD2").innerText = atkThiefS2;
  document.getElementById("forD3").innerText = atkThiefS3;
  forestDice();
  thiefDefDice();
  if (atkThiefScore > thiefDefScore) {
    hitThief();
  } else if (atkThiefScore < thiefDefScore) {
    missThief();
  } else {
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Thief.name} are well matched!`;
    setTimeout(displayThiefFight, 4000);
  }
  setTimeout(forestMsg, 4000);
  setTimeout(forestDiceReset, 5000);
}
function defThief() {
  const defThiefS1 = defRoll();
  const defThiefS2 = defRoll();
  const defThiefS3 = defRoll();
  const defThiefScore = defThiefS1 + defThiefS2 + defThiefS3;
  document.getElementById("forD1").innerText = defThiefS1;
  document.getElementById("forD2").innerText = defThiefS2;
  document.getElementById("forD3").innerText = defThiefS3;
  forestDice();
  thiefAtkDice();
  if (defThiefScore > thiefAtkScore) {
    thiefHit();
  } else if (defThiefScore < thiefAtkScore) {
    thiefMiss();
  } else {
    document.getElementById(
      "forestMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Thief.name} are well matched!`;
    setTimeout(displayThiefFight, 4000);
  }
  setTimeout(forestMsg, 4000);
  setTimeout(forestDiceReset, 5000);
}
export { thiefAppear, atkThief, defThief };
