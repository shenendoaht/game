import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  renderOutskirtPlayer,
  pointCheck,
  winMatch,
} from "/JS/player.js";

// --------- DELCARATIONS ---------------
let invaderTwoA1 = invaderTwoAtkRoll();
let invaderTwoA2 = invaderTwoAtkRoll();
let invaderTwoD1 = invaderTwoDefRoll();
let invaderTwoD2 = invaderTwoDefRoll();
let invaderTwoAScore = invaderTwoA1 + invaderTwoA2;
let invaderTwoDScore = invaderTwoD1 + invaderTwoD2;
function invaderTwoAtkRoll(min = 1, max = enemies.InvaderTwo.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.InvaderTwo.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function invaderTwoDefRoll(min = 1, max = enemies.InvaderTwo.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.InvaderTwo.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------- BASIC ---------------
function invaderTwoAppear() {
  invaderTwoHP();
  invaderTwoTalk();
}
function invaderTwoHide() {
  document.getElementById("invaderTwo").style.display = "none";
  document.getElementById("invaderTwoStat").style.display = "none";
}
function renderInvaderTwo() {
  document.getElementById("invaderTwo").style.display = "block";
  document.getElementById("invaderTwoStat").style.display = "block";
  document.getElementById(
    "invaderTwoStat"
  ).innerText = `NAME: ${enemies.InvaderTwo.name} | HP: ${enemies.InvaderTwo.hp} | STR: ${enemies.InvaderTwo.str} | DEF: ${enemies.InvaderTwo.def}| AB: ${enemies.InvaderTwo.ab}|  `;
}
function killInvaderTwo() {
  enemies.InvaderTwo.alive = false;
  players.Player1.vanquished.push(` ${enemies.invaderTwo.name}`);
  invaderTwoHide();
  winMatch();
  pointCheck();
  renderOutskirtPlayer();
}
function invaderTwoHP() {
  if (enemies.InvaderTwo.hp >= 1) {
    renderInvaderTwo();
  } else {
    killInvaderTwo();
  }
}
// --------- DIALOGUES ---------------
function invaderTwoTalk() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderTwo.name}: ${
    enemies.InvaderTwo.chat[
      Math.floor(Math.random() * enemies.InvaderTwo.chat.length)
    ]
  }`;
}
function invaderTwoHurt() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderTwo.name}: ${
    enemies.InvaderTwo.hits[
      Math.floor(Math.random() * enemies.InvaderTwo.hits.length)
    ]
  }`;
}
function invaderTwoBlock() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderTwo.name}: ${
    enemies.InvaderTwo.miss[
      Math.floor(Math.random() * enemies.InvaderTwo.miss.length)
    ]
  }`;
}
function invaderTwoTaunt() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderTwo.name}: ${
    enemies.InvaderTwo.taunt[
      Math.floor(Math.random() * enemies.InvaderTwo.taunt.length)
    ]
  }`;
}
function invaderTwoDodge() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderTwo.name}: ${
    enemies.InvaderTwo.dodge[
      Math.floor(Math.random() * enemies.InvaderTwo.dodge.length)
    ]
  }`;
}
// --------- REACTIONS ---------------
function hitInvaderTwo() {
  enemies.InvaderTwo.hp -= players.Player1.str;
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.InvaderTwo.name}!`;
  invaderTwoHurt();
  invaderTwoHP();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}
function missInvaderTwo() {
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.InvaderTwo.name}!`;
  invaderTwoBlock();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}
function invaderTwoHit() {
  invaderTwoTaunt();
  setTimeout(outTalk, 4000);
}
function invaderTwoMiss() {
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.InvaderTwo.name}!`;
  invaderTwoDodge();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}
// --------- PLAYER FUNCTIONS ---------------

export {
  invaderTwoAScore,
  invaderTwoDScore,
  invaderTwoAppear,
  hitInvaderTwo,
  missInvaderTwo,
  invaderTwoHit,
  invaderTwoMiss,
};
