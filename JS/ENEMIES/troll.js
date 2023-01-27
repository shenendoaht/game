import { enemies } from "/JS/ENEMIES/enemies.js";
import { bridgeMsg } from "/JS/CHATS/msg.js";
import { bridgeTalk } from "/JS/CHATS/talk.js";
import { armor } from "/JS/UTIL/data.js";
import {
  players,
  renderBridgePlayer,
  pointCheck,
  winMatch,
  atkRoll,
  defRoll,
} from "/JS/player.js";

// --------------- DECLARATIONS ----------------------------
let trollA1Score = trollAtkRoll();
let trollA2Score = trollAtkRoll();
let trollA3Score = trollAtkRoll();
let trollD1Score = trollDefRoll();
let trollD2Score = trollDefRoll();
let trollD3Score = trollDefRoll();
let trollAtkScore = trollA1Score + trollA2Score + trollA3Score;
let trollDefScore = trollD1Score + trollD2Score + trollD3Score;
function trollAtkRoll(min = 1, max = enemies.Troll.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Troll.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function trollDefRoll(min = 1, max = enemies.Troll.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Troll.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------------- BASIC ----------------------------
function bridgeDice() {
  document.getElementById("bridgeDice").style.display = "block";
  trollDice();
  bridgePlayerDice();
}
function bridgeDiceReset() {
  document.getElementById("bridgeDice").style.display = "none";
}
function trollDice() {
  document.getElementById("trollDice").style.display = "flex";
  document.getElementById("trollD1").style.display = "block";
  document.getElementById("trollD2").style.display = "block";
  document.getElementById("trollD3").style.display = "block";
}
function bridgePlayerDice() {
  document.getElementById("bridgePlayerDice").style.display = "flex";
  document.getElementById("bridgeD1").style.display = "block";
  document.getElementById("bridgeD2").style.display = "block";
  document.getElementById("bridgeD3").style.display = "block";
}
function trollAtkDice() {
  document.getElementById("trollD1").innerText = trollA1Score;
  document.getElementById("trollD2").innerText = trollA2Score;
  document.getElementById("trollD3").innerText = trollA3Score;
}
function trollDefDice() {
  document.getElementById("trollD1").innerText = trollD1Score;
  document.getElementById("trollD2").innerText = trollD2Score;
  document.getElementById("trollD3").innerText = trollD3Score;
}
function displayTrollFight() {
  document.getElementById("trollFight").style.display = "flex";
  document.getElementById("trollAtk").style.display = "block";
  document.getElementById("trollDef").style.display = "block";
}
function displayTrollAtk() {
  document.getElementById("trollAtk").style.display = "block";
  document.getElementById("trollDef").style.display = "none";
}
function displayTrollDef() {
  document.getElementById("trollAtk").style.display = "none";
  document.getElementById("trollDef").style.display = "block";
}
function trollAppear() {
  trollHP();
  trollTalk();
  displayTrollFight();
}
function trollHide() {
  document.getElementById("troll").style.display = "none";
  document.getElementById("trollStat").style.display = "none";
  document.getElementById("trollFight").style.display = "none";
}
function renderTroll() {
  document.getElementById("troll").style.display = "block";
  document.getElementById("trollStat").style.display = "block";
  document.getElementById(
    "trollStat"
  ).innerText = `NAME: ${enemies.Troll.name} | HP: ${enemies.Troll.hp} | STR: ${enemies.Troll.str} | DEF: ${enemies.Troll.def}| AB: ${enemies.Troll.ab}|  `;
}
function killTroll() {
  enemies.Troll.alive = false;
  players.Player1.vanquished.push(` ${enemies.Troll.name}`);
  trollHide();
  winMatch();
  pointCheck();
  renderBridgePlayer();
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${players.Player1.name} well done!`;
  setTimeout(bridgeMsg, 3500);
  setTimeout(dropShield, 4000);
}
function trollHP() {
  if (enemies.Troll.hp >= 1) {
    renderTroll();
  } else {
    killTroll();
  }
}
function dropShield() {
  document.getElementById("shield").style.display = "block";
  document.getElementById("shieldBtn").style.display = "block";
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${enemies.Troll.name} dropped their shield!`;
  setTimeout(bridgeMsg, 4000);
}
function takeShield() {
  document.getElementById("shield").style.display = "none";
  document.getElementById("shieldBtn").style.display = "none";
  players.Player1.armor.push(` ${armor.Shield.name}`);
  players.Player1.inventory.push(armor.Shield);
  players.Player1.def += armor.Shield.def;
  players.Player1.xp += armor.Shield.xp;
  pointCheck();
  renderBridgePlayer();
}
// --------------- DIALOGUE ----------------------------
function trollTalk() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.chat[Math.floor(Math.random() * enemies.Troll.chat.length)]
  }`;
}
function trollHurt() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.hits[Math.floor(Math.random() * enemies.Troll.hits.length)]
  }`;
}
function trollBlock() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.miss[Math.floor(Math.random() * enemies.Troll.miss.length)]
  }`;
}
function trollTaunt() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.taunt[Math.floor(Math.random() * enemies.Troll.taunt.length)]
  }`;
}
function trollDodge() {
  document.getElementById("bridgeTalk").innerText = `${enemies.Troll.name}: ${
    enemies.Troll.dodge[Math.floor(Math.random() * enemies.Troll.dodge.length)]
  }`;
}
// --------------- REACTIONS ----------------------------
function renderTrollMatch() {
  trollHP();
  pointCheck();
  renderBridgePlayer();
}
function hitTroll() {
  enemies.Troll.hp -= players.Player1.str;
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Troll.name}!`;
  trollHurt();
  renderTrollMatch();
  displayTrollAtk();
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeTalk, 4000);
}
function missTroll() {
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Troll.name}!`;
  trollBlock();
  renderTrollMatch();
  displayTrollDef();
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeTalk, 4000);
}
function trollHit() {
  players.Player1.hp -= enemies.Troll.str;
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Troll.name} hit you!`;
  trollTaunt();
  renderTrollMatch();
  displayTrollDef();
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeTalk, 4000);
}
function trollMiss() {
  document.getElementById(
    "bridgeMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Troll.name}!`;
  trollDodge();
  renderTrollMatch();
  displayTrollAtk();
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeTalk, 4000);
}
// --------------- PLAYER FUNCTIONS ----------------------------
function atkTroll() {
  const atkTrollS1 = atkRoll();
  const atkTrollS2 = atkRoll();
  const atkTrollS3 = atkRoll();
  const atkTrollScore = atkTrollS1 + atkTrollS2 + atkTrollS3;
  document.getElementById("bridgeD1").innerText = atkTrollS1;
  document.getElementById("bridgeD2").innerText = atkTrollS2;
  document.getElementById("bridgeD3").innerText = atkTrollS3;
  bridgeDice();
  trollDefDice();
  console.log(atkTrollScore);
  console.log(trollDefScore);
  if (atkTrollScore > trollDefScore) {
    hitTroll();
  } else if (atkTrollScore < trollDefScore) {
    missTroll();
  } else {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Troll.name} are well matched!`;
    setTimeout(displayTrollFight, 4000);
  }
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeDiceReset, 5000);
}
function defTroll() {
  const defTrollS1 = defRoll();
  const defTrollS2 = defRoll();
  const defTrollS3 = defRoll();
  const defTrollScore = defTrollS1 + defTrollS2 + defTrollS3;
  document.getElementById("bridgeD1").innerText = defTrollS1;
  document.getElementById("bridgeD2").innerText = defTrollS2;
  document.getElementById("bridgeD3").innerText = defTrollS3;
  bridgeDice();
  trollAtkDice();
  console.log(trollAtkScore);
  console.log(defTrollScore);
  if (defTrollScore < trollAtkScore) {
    trollHit();
  } else if (defTrollScore > trollAtkScore) {
    trollMiss();
  } else {
    document.getElementById(
      "bridgeMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Troll.name} are well matched!`;
    setTimeout(displayTrollFight, 4000);
  }
  setTimeout(bridgeMsg, 4000);
  setTimeout(bridgeDiceReset, 5000);
}
export { trollAppear, atkTroll, defTroll, takeShield };
