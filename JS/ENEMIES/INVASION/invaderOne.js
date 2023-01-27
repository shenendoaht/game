import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  renderOutskirtPlayer,
  pointCheck,
  winMatch,
} from "/JS/player.js";

// --------- INVADER ONE DELCARATIONS ---------------
let invaderOneA1 = invaderOneAtkRoll();
let invaderOneA2 = invaderOneAtkRoll();
let invaderOneD1 = invaderOneDefRoll();
let invaderOneD2 = invaderOneDefRoll();
let invaderOneAScore = invaderOneA1 + invaderOneA2;
let invaderOneDScore = invaderOneD1 + invaderOneD2;
function invaderOneAtkRoll(min = 1, max = enemies.InvaderOne.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.InvaderOne.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function invaderOneDefRoll(min = 1, max = enemies.InvaderOne.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.InvaderOne.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// --------- BASIC ---------------
function invaderOneAppear() {
  invaderOneHP();
  invaderOneTalk();
}
function invaderOneHide() {
  document.getElementById("invaderOne").style.display = "none";
  document.getElementById("invaderOneStat").style.display = "none";
}
function renderInvaderOne() {
  document.getElementById("invaderOne").style.display = "block";
  document.getElementById("invaderOneStat").style.display = "block";
  document.getElementById(
    "invaderOneStat"
  ).innerText = `NAME: ${enemies.InvaderOne.name} | HP: ${enemies.InvaderOne.hp} | STR: ${enemies.InvaderOne.str} | DEF: ${enemies.InvaderOne.def}| AB: ${enemies.InvaderOne.ab}|  `;
}
function killInvaderOne() {
  enemies.InvaderOne.alive = false;
  players.Player1.vanquished.push(` ${enemies.invaderOne.name}`);
  invaderOneHide();
  winMatch();
  pointCheck();
  renderOutskirtPlayer();
}
function invaderOneHP() {
  if (enemies.InvaderOne.hp >= 1) {
    renderInvaderOne();
  } else {
    killInvaderOne();
  }
}
// --------- DIALOGUES ---------------
function invaderOneTalk() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderOne.name}: ${
    enemies.InvaderOne.chat[
      Math.floor(Math.random() * enemies.InvaderOne.chat.length)
    ]
  }`;
}
function invaderOneHurt() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderOne.name}: ${
    enemies.InvaderOne.hits[
      Math.floor(Math.random() * enemies.InvaderOne.hits.length)
    ]
  }`;
}
function invaderOneBlock() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderOne.name}: ${
    enemies.InvaderOne.miss[
      Math.floor(Math.random() * enemies.InvaderOne.miss.length)
    ]
  }`;
}
function invaderOneTaunt() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderOne.name}: ${
    enemies.InvaderOne.taunt[
      Math.floor(Math.random() * enemies.InvaderOne.taunt.length)
    ]
  }`;
}
function invaderOneDodge() {
  document.getElementById("outTalk").innerText = `${enemies.InvaderOne.name}: ${
    enemies.InvaderOne.dodge[
      Math.floor(Math.random() * enemies.InvaderOne.dodge.length)
    ]
  }`;
}
// --------- REACTIONS ---------------
function hitInvaderOne() {
  enemies.InvaderOne.hp -= players.Player1.str;
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.InvaderOne.name}!`;
  invaderOneHurt();
  invaderOneHP();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}
function missInvaderOne() {
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.InvaderOne.name}!`;
  invaderOneBlock();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}
function invaderOneHit() {
  invaderOneTaunt();
  setTimeout(outTalk, 4000);
}
function invaderOneMiss() {
  document.getElementById(
    "outMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.InvaderOne.name}!`;
  invaderOneDodge();
  setTimeout(outMsg, 4000);
  setTimeout(outTalk, 4000);
}

export {
  invaderOneAScore,
  invaderOneDScore,
  invaderOneAppear,
  hitInvaderOne,
  missInvaderOne,
  invaderOneHit,
  invaderOneMiss,
};
