import { enemies } from "/JS/ENEMIES/enemies.js";
import {
  players,
  checkHP,
  renderQuadPlayer,
  winMatch,
  atkRoll,
  defRoll,
  pointCheck,
} from "/JS/player.js";
import { quadMsg } from "/JS/CHATS/msg.js";
import { weapons } from "/JS/UTIL/data.js";
// ------------------- QUAD BASICS-------------------------------
function showQuadDice() {
  document.getElementById("quadDice").style.display = "flex";
  quadDiceRoll();
}
function quadDiceRoll() {
  document.getElementById("qD1").style.display = "block";
  document.getElementById("qD2").style.display = "block";
  document.getElementById("qD3").style.display = "block";
}
function diceReset() {
  document.getElementById("quadDice").style.display = "none";
  document.getElementById("dummyDice").style.display = "none";
  document.getElementById("qD1").style.display = "none";
  document.getElementById("qD2").style.display = "none";
  document.getElementById("qD3").style.display = "none";
  document.getElementById("dumD1").style.display = "none";
  document.getElementById("dumD2").style.display = "none";
  document.getElementById("dumD3").style.display = "none";
}
function showQuadFight() {
  document.getElementById("quadFight").style.display = "block";
}
function hideQuadFight() {
  document.getElementById("quadFight").style.display = "none";
  document.getElementById("d1Fight").style.display = "none";
  document.getElementById("d2Fight").style.display = "none";
  document.getElementById("d3Fight").style.display = "none";
}
function quadCheck() {
  if (enemies.Dummy1.alive === true) {
    renderDum1();
  } else if (enemies.Dummy2.alive === true) {
    renderDum2();
  } else if (enemies.Dummy3.alive === true) {
    renderDum3();
  } else {
    noDummy();
  }
}
function showQuadChoice() {
  document.getElementById("quadChoice").style.display = "flex";
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, would you like to train?`;
  setTimeout(quadMsg, 4000);
}
function hideQuadChoice() {
  document.getElementById("quadChoice").style.display = "none";
}
function trainSword() {
  document.getElementById("trainingSword").style.display = "block";
  document.getElementById("tSwordBtn").style.display = "block";
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you've found a Training Sword!`;
}
function takeTrainSword() {
  document.getElementById("trainingSword").style.display = "none";
  document.getElementById("tSwordBtn").style.display = "none";
  players.Player1.weapons.push(`${weapons.TrainingSword.name}, `);
  players.Player1.inventory.push(weapons.TrainingSword);
  players.Player1.str += weapons.TrainingSword.str;
  renderQuadPlayer();
}
// ------------------- DUMMY ATK / DEF ROLLS -------------------------------
function dum1AtRoll(min = 1, max = enemies.Dummy1.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy1.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function dum2AtRoll(min = 1, max = enemies.Dummy2.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy2.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function dum3AtRoll(min = 1, max = enemies.Dummy3.str) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy3.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function dum1DefRoll(min = 1, max = enemies.Dummy1.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy1.def);
  return Math.floor(Math.random() * (max - min) + min);
}
function dum2DefRoll(min = 1, max = enemies.Dummy2.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy2.def);
  return Math.floor(Math.random() * (max - min) + min);
}
function dum3DefRoll(min = 1, max = enemies.Dummy3.def) {
  min = Math.ceil(1);
  max = Math.floor(enemies.Dummy3.def);
  return Math.floor(Math.random() * (max - min) + min);
}
// ------------------- DUMMY CONST ASSIGNS-------------------------------
let d1AtScore1 = dum1AtRoll();
let d1AtScore2 = dum1AtRoll();
let d1AtScore3 = dum1AtRoll();
let d2AtScore1 = dum2AtRoll();
let d2AtScore2 = dum2AtRoll();
let d2AtScore3 = dum2AtRoll();
let d3AtScore1 = dum3AtRoll();
let d3AtScore2 = dum3AtRoll();
let d3AtScore3 = dum3AtRoll();
let d1DefScore1 = dum1DefRoll();
let d1DefScore2 = dum1DefRoll();
let d1DefScore3 = dum1DefRoll();
let d2DefScore1 = dum2DefRoll();
let d2DefScore2 = dum2DefRoll();
let d2DefScore3 = dum2DefRoll();
let d3DefScore1 = dum3DefRoll();
let d3DefScore2 = dum3DefRoll();
let d3DefScore3 = dum3DefRoll();
let dum1AtScore = d1AtScore1 + d1AtScore2 + d1AtScore3;
let dum2AtScore = d2AtScore1 + d2AtScore2 + d2AtScore3;
let dum3AtScore = d3AtScore1 + d3AtScore2 + d3AtScore3;
let dum1DefScore = d1DefScore1 + d1DefScore2 + d1DefScore3;
let dum2DefScore = d2DefScore1 + d2DefScore2 + d2DefScore3;
let dum3DefScore = d3DefScore1 + d3DefScore2 + d3DefScore3;
// ------------------- DUMMY RENDER  ------------------------------------------
function showDummy() {
  document.getElementById("dummy").style.display = "block";
  document.getElementById("dummyStat").style.display = "block";
  hideQuadChoice();
}
function hideDummy() {
  document.getElementById("dummy").style.display = "none";
  document.getElementById("dummyStat").style.display = "none";
  hideQuadFight();
  showQuadChoice();
}
function renderDum1() {
  showDummy();
  document.getElementById(
    "dummyStat"
  ).innerText = `Name: ${enemies.Dummy1.name}| HP: ${enemies.Dummy1.hp}| STR: ${enemies.Dummy1.str}| DEF: ${enemies.Dummy1.def}| AB: ${enemies.Dummy1.ab}|`;
  setTimeout(showD1Fight, 5000);
}
function renderDum2() {
  showDummy();
  document.getElementById(
    "dummyStat"
  ).innerText = `Name: ${enemies.Dummy2.name}| HP: ${enemies.Dummy2.hp}| STR: ${enemies.Dummy2.str}| DEF: ${enemies.Dummy2.def}| AB: ${enemies.Dummy2.ab}|`;
  setTimeout(showD2Fight, 5000);
}
function renderDum3() {
  showDummy();
  document.getElementById(
    "dummyStat"
  ).innerText = `Name: ${enemies.Dummy3.name}| HP: ${enemies.Dummy3.hp}| STR: ${enemies.Dummy3.str}| DEF: ${enemies.Dummy3.def}| AB: ${enemies.Dummy3.ab}|`;
  setTimeout(showD3Fight, 5000);
}
function killDum1() {
  enemies.Dummy1.alive = false;
  players.Player1.vanquished.push(`${enemies.Dummy1.name}, `);
  diceReset();
  hideDummy();
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you've learned so much! Keep training?`;
  setTimeout(quadMsg, 5000);
  winMatch();
  renderQuadPlayer();
}
function killDum2() {
  enemies.Dummy2.alive = false;
  players.Player1.vanquished.push(`${enemies.Dummy2.name}, `);
  diceReset();
  hideDummy();
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, what a match!`;
  setTimeout(quadMsg, 5000);
  winMatch();
  renderQuadPlayer();
}
function killDum3() {
  enemies.Dummy3.alive = false;
  players.Player1.vanquished.push(`${enemies.Dummy3.name}, `);
  hideDummy();
  diceReset();
  document.getElementById(
    "quadMsg"
  ).innerText = `All hail ${players.Player1.name}, defeater of the dummies!!`;
  setTimeout(quadMsg, 6000);
  winMatch();
  renderQuadPlayer();
}
function showD1Fight() {
  showQuadFight();
  document.getElementById("d1Fight").style.display = "flex";
  document.getElementById("d2Fight").style.display = "none";
  document.getElementById("d3Fight").style.display = "none";
}
function showD2Fight() {
  showQuadFight();
  document.getElementById("d1Fight").style.display = "none";
  document.getElementById("d2Fight").style.display = "flex";
  document.getElementById("d3Fight").style.display = "none";
}
function showD3Fight() {
  showQuadFight();
  document.getElementById("d1Fight").style.display = "none";
  document.getElementById("d2Fight").style.display = "none";
  document.getElementById("d3Fight").style.display = "flex";
}
function dumDefend() {
  if (enemies.Dummy1.hp >= 1) {
    document.getElementById("dumD1").innerText = d1DefScore1;
    document.getElementById("dumD2").innerText = d1DefScore2;
    document.getElementById("dumD3").innerText = d1DefScore3;
  } else if (enemies.Dummy2.hp >= 1) {
    document.getElementById("dumD1").innerText = d2DefScore1;
    document.getElementById("dumD2").innerText = d2DefScore2;
    document.getElementById("dumD3").innerText = d2DefScore3;
  } else if (enemies.Dummy3.hp >= 1) {
    document.getElementById("dumD1").innerText = d3DefScore1;
    document.getElementById("dumD2").innerText = d3DefScore2;
    document.getElementById("dumD3").innerText = d3DefScore3;
  }
}
function dumAttack() {
  if (enemies.Dummy1.hp >= 1) {
    document.getElementById("dumD1").innerText = d1AtScore1;
    document.getElementById("dumD2").innerText = d1AtScore2;
    document.getElementById("dumD3").innerText = d1AtScore3;
  } else if (enemies.Dummy2.hp >= 1) {
    document.getElementById("dumD1").innerText = d2AtScore1;
    document.getElementById("dumD2").innerText = d2AtScore2;
    document.getElementById("dumD3").innerText = d2AtScore3;
  } else if (enemies.Dummy3.hp >= 1) {
    document.getElementById("dumD1").innerText = d3AtScore1;
    document.getElementById("dumD2").innerText = d3AtScore2;
    document.getElementById("dumD3").innerText = d3AtScore3;
  }
}
function noDummy() {
  hideDummy();
  hideQuadChoice();
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, there are no training dummies left!`;
  setTimeout(quadMsg, 4000);
  setTimeout(trainSword, 5000);
}
function showDummyDice() {
  document.getElementById("dummyDice").style.display = "flex";
  document.getElementById("dumD1").style.display = "block";
  document.getElementById("dumD2").style.display = "block";
  document.getElementById("dumD3").style.display = "block";
}
function dum1Check() {
  if (enemies.Dummy1.hp <= 0) {
    killDum1();
  } else {
    renderDum1();
  }
}
function dum2Check() {
  if (enemies.Dummy2.hp <= 0) {
    killDum2();
  } else {
    renderDum2();
  }
}
function dum3Check() {
  if (enemies.Dummy3.hp <= 0) {
    killDum3();
  } else {
    renderDum3();
  }
}
// ------------------- PLAYER FUNCTIONS -------------------------------
function atkDum1() {
  hideQuadFight();
  dumDefend();
  const a1Score = atkRoll();
  const b1Score = atkRoll();
  const c1Score = atkRoll();
  const atk1Score = a1Score + b1Score + c1Score;
  document.getElementById("qD1").innerText = a1Score;
  document.getElementById("qD2").innerText = b1Score;
  document.getElementById("qD3").innerText = c1Score;
  showQuadDice();
  showDummyDice();
  if (atk1Score > dum1DefScore) {
    hitD1();
  } else if (atk1Score < dum1DefScore) {
    missD1();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy1.name} are well matched!`;
    setTimeout(dum1Fight, 5000);
  }
  renderMatch1();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
function defDum1() {
  hideQuadFight();
  dumAttack();
  const def1Score1 = defRoll();
  const def1Score2 = defRoll();
  const def1Score3 = defRoll();
  const def1Score = def1Score1 + def1Score2 + def1Score3;
  document.getElementById("qD1").innerText = def1Score1;
  document.getElementById("qD2").innerText = def1Score2;
  document.getElementById("qD3").innerText = def1Score3;
  showQuadDice();
  showDummyDice();
  if (def1Score > dum1AtScore) {
    d1Hit();
  } else if (def1Score < dum1AtScore) {
    d1Miss();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy1.name} are well matched!`;
    setTimeout(dum1Fight, 5000);
  }
  renderMatch1();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
function atkDum2() {
  hideQuadFight();
  dumDefend();
  const a2Score = atkRoll();
  const b2Score = atkRoll();
  const c2Score = atkRoll();
  const atk2Score = a2Score + b2Score + c2Score;
  document.getElementById("qD1").innerText = a2Score;
  document.getElementById("qD2").innerText = b2Score;
  document.getElementById("qD3").innerText = c2Score;
  showQuadDice();
  showDummyDice();
  if (atk2Score > dum2DefScore) {
    hitD2();
  } else if (atk2Score < dum2DefScore) {
    missD2();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy2.name} are well matched!`;
    setTimeout(dum2Fight, 5000);
  }
  checkHP();
  renderMatch2();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
function defDum2() {
  hideQuadFight();
  dumAttack();
  const def2Score1 = defRoll();
  const def2Score2 = defRoll();
  const def2Score3 = defRoll();
  const def2Score = def2Score1 + def2Score2 + def2Score3;
  document.getElementById("qD1").innerText = def2Score1;
  document.getElementById("qD2").innerText = def2Score2;
  document.getElementById("qD3").innerText = def2Score3;
  showQuadDice();
  showDummyDice();
  if (def2Score > dum2AtScore) {
    d2Miss();
  } else if (def2Score < dum2AtScore) {
    d2Hit();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy2.name} are well matched!`;
    setTimeout(dum2Fight, 5000);
  }
  checkHP();
  renderMatch2();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
function atkDum3() {
  hideQuadFight();
  dumDefend();
  const a3Score = atkRoll();
  const b3Score = atkRoll();
  const c3Score = atkRoll();
  const atk3Score = a3Score + b3Score + c3Score;
  document.getElementById("qD1").innerText = a3Score;
  document.getElementById("qD2").innerText = b3Score;
  document.getElementById("qD3").innerText = c3Score;
  showQuadDice();
  showDummyDice();
  if (atk3Score > dum3DefScore) {
    hitD3();
  } else if (atk3Score < dum3DefScore) {
    missD3();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy3.name} are well matched!`;
    setTimeout(dum3Fight, 5000);
  }
  checkHP();
  renderMatch3();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
function defDum3() {
  hideQuadFight();
  dumAttack();
  const def3Score1 = defRoll();
  const def3Score2 = defRoll();
  const def3Score3 = defRoll();
  const def3Score = def3Score1 + def3Score2 + def3Score3;
  document.getElementById("qD1").innerText = def3Score1;
  document.getElementById("qD2").innerText = def3Score2;
  document.getElementById("qD3").innerText = def3Score3;
  showQuadDice();
  showDummyDice();
  if (def3Score > dum3AtScore) {
    d3Miss();
  } else if (def3Score < dum3AtScore) {
    d3Hit();
  } else {
    document.getElementById(
      "quadMsg"
    ).innerText = `${players.Player1.name} & ${enemies.Dummy3.name} are well matched!`;
    setTimeout(dum3Fight, 5000);
  }
  checkHP();
  renderMatch3();
  setTimeout(quadMsg, 5000);
  setTimeout(diceReset, 5000);
}
// ------------------- DUMMY ATK / DEF DISPLAY -------------------------------
function dum1Fight() {
  document.getElementById("atkD1").style.display = "block";
  document.getElementById("defD1").style.display = "block";
}
function dum1Atk() {
  document.getElementById("atkD1").style.display = "block";
  document.getElementById("defD1").style.display = "none";
}
function dum1Def() {
  document.getElementById("atkD1").style.display = "none";
  document.getElementById("defD1").style.display = "block";
}
function dum2Fight() {
  document.getElementById("atkD2").style.display = "block";
  document.getElementById("defD2").style.display = "block";
}
function dum2Atk() {
  document.getElementById("atkD2").style.display = "block";
  document.getElementById("defD2").style.display = "none";
}
function dum2Def() {
  document.getElementById("atkD2").style.display = "none";
  document.getElementById("defD2").style.display = "block";
}
function dum3Fight() {
  document.getElementById("atkD3").style.display = "block";
  document.getElementById("defD3").style.display = "block";
}
function dum3Atk() {
  document.getElementById("atkD3").style.display = "block";
  document.getElementById("defD3").style.display = "none";
}
function dum3Def() {
  document.getElementById("atkD3").style.display = "none";
  document.getElementById("defD3").style.display = "block";
}

// ------------------- RESPONSE ROLLS-------------------------------
function renderMatch1() {
  dum1Check();
  pointCheck();
  renderQuadPlayer();
}
function renderMatch2() {
  dum2Check();
  pointCheck();
  renderQuadPlayer();
}
function renderMatch3() {
  dum3Check();
  pointCheck();
  renderQuadPlayer();
}
function hitD1() {
  enemies.Dummy1.hp -= players.Player1.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Dummy1.name}!`;
  dum1Atk();
  setTimeout(quadMsg, 4000);
  renderMatch1();
}
function missD1() {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Dummy1.name}!`;
  dum1Def();
  setTimeout(quadMsg, 4000);
  renderMatch1();
}
function d1Hit() {
  players.Player1.hp -= enemies.Dummy1.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Dummy1.name} hit you!`;
  dum1Def();
  setTimeout(quadMsg, 4000);
  renderMatch1();
}
function d1Miss() {
  dum1Atk();
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Dummy1.name}!`;
  setTimeout(quadMsg, 4000);
  renderMatch1();
}
function hitD2() {
  enemies.Dummy2.hp -= players.Player1.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Dummy2.name}!`;
  setTimeout(quadMsg, 4000);
  dum2Atk();
  renderMatch2();
}
function missD2() {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Dummy2.name}!`;
  setTimeout(quadMsg, 4000);
  renderMatch2();
  dum2Def();
}
function d2Hit() {
  players.Player1.hp -= enemies.Dummy2.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Dummy2.name} hit you!`;
  setTimeout(quadMsg, 4000);
  renderMatch2();
  dum2Def();
}
function d2Miss() {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Dummy2.name}!`;
  setTimeout(quadMsg, 4000);
  dum2Atk();
  renderMatch2();
}
function hitD3() {
  enemies.Dummy3.hp -= players.Player1.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you hit ${enemies.Dummy3.name}!`;
  setTimeout(quadMsg, 4000);
  dum3Atk();
  renderMatch3();
}
function missD3() {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you missed ${enemies.Dummy3.name}!`;
  setTimeout(quadMsg, 4000);
  dum3Def();
  renderMatch3();
}
function d3Hit() {
  players.Player1.hp -= enemies.Dummy3.str;
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, ${enemies.Dummy3.name} hit you!`;
  setTimeout(quadMsg, 4000);
  dum3Def();
  renderMatch3();
}
function d3Miss() {
  document.getElementById(
    "quadMsg"
  ).innerText = `${players.Player1.name}, you dodged ${enemies.Dummy3.name}!`;
  setTimeout(quadMsg, 4000);
  dum3Atk();
  renderMatch3();
}

export {
  quadCheck,
  atkDum1,
  defDum1,
  atkDum2,
  defDum2,
  atkDum3,
  defDum3,
  takeTrainSword,
  showQuadChoice,
  hideQuadChoice,
};
