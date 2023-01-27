import {
  players,
  renderOutskirtPlayer,
  pointCheck,
  atkRoll,
  defRoll,
} from "/JS/player.js";
import { outMsg } from "/JS/CHATS/msg.js";
import {
  invaderOneAScore,
  invaderOneDScore,
  invaderOneAppear,
  hitInvaderOne,
  missInvaderOne,
  invaderOneHit,
  invaderOneMiss,
} from "/JS/ENEMIES/INVASION/invaderOne.js";
import {
  invaderTwoAScore,
  invaderTwoDScore,
  invaderTwoAppear,
  hitInvaderTwo,
  missInvaderTwo,
  invaderTwoHit,
  invaderTwoMiss,
} from "/JS/ENEMIES/INVASION/invaderTwo.js";

// --------- DECLARATIONS ---------------
let invaderAtkScore = invaderOneAScore + invaderTwoAScore;
let invaderDefScore = invaderOneDScore + invaderTwoDScore;
// --------- BASIC ---------------
function outDice() {
  document.getElementById("outDice").style.display = "block";
  invaderDice();
  outPlayerDice();
}
function outDiceReset() {
  document.getElementById("outDice").style.display = "none";
}
function invaderDice() {
  document.getElementById("invaderDice").style.display = "flex";
  invaderOneDice();
  invaderTwoDice();
}
function invaderOneDice() {
  document.getElementById("invaderOneDice").style.display = "flex";
  document.getElementById("invaderOneD1").style.display = "block";
  document.getElementById("invaderOneD2").style.display = "block";
}
function invaderTwoDice() {
  document.getElementById("invaderTwoDice").style.display = "flex";
  document.getElementById("invaderTwoD1").style.display = "block";
  document.getElementById("invaderTwoD2").style.display = "block";
}
function outPlayerDice() {
  document.getElementById("outPlayerDice").style.display = "flex";
  document.getElementById("outD1").style.display = "block";
  document.getElementById("outD2").style.display = "block";
  document.getElementById("outD3").style.display = "block";
  document.getElementById("outD4").style.display = "block";
}
function invaderAtkDice() {
  document.getElementById("invaderOneD1").innerText = invaderOneA1;
  document.getElementById("invaderOneD2").innerText = invaderOneA2;
  document.getElementById("invaderTwoD1").innerText = invaderTwoA1;
  document.getElementById("invaderTwoD2").innerText = invaderTwoA2;
}
function invaderDefDice() {
  document.getElementById("invaderOneD1").innerText = invaderOneD1;
  document.getElementById("invaderOneD2").innerText = invaderOneD2;
  document.getElementById("invaderTwoD1").innerText = invaderTwoD1;
  document.getElementById("invaderTwoD2").innerText = invaderTwoD2;
}
function displayInvaderFight() {
  document.getElementById("invaderFight").style.display = "flex";
  document.getElementById("invaderAtk").style.display = "block";
  document.getElementById("invaderDef").style.display = "block";
}
function displayInvaderAtk() {
  document.getElementById("invaderAtk").style.display = "block";
  document.getElementById("invaderDef").style.display = "none";
}
function displayInvaderDef() {
  document.getElementById("invaderAtk").style.display = "none";
  document.getElementById("invaderDef").style.display = "block";
}
function invadersAppear() {
  invaderOneAppear();
  invaderTwoAppear();
}
// --------- PLAYER FUNCTIONS ---------------
function hitInvaders() {
  setTimeout(hitInvaderOne, 1000);
  setTimeout(hitInvaderTwo, 2500);
  document.getElementById(
    "outMsg"
  ).innerText = `Great job ${players.Player1.name}!`;
  setTimeout(outMsg, 3000);
  displayInvaderAtk();
}
function missInvaders() {
  setTimeout(missInvaderOne, 1000);
  setTimeout(missInvaderTwo, 2500);
  document.getElementById(
    "outMsg"
  ).innerText = `Aw ${players.Player1.name}, so close!`;
  setTimeout(outMsg, 3000);
  displayInvaderDef();
}
function invadersHit() {
  players.Player1.hp -= Math.floor(invaderAtkScore % 4);
  pointCheck();
  renderOutskirtPlayer();
  setTimeout(invaderOneHit, 1000);
  setTimeout(invaderTwoHit, 2500);
  displayInvaderDef();
}
function invadersMiss() {
  setTimeout(invaderOneMiss, 1000);
  setTimeout(invaderTwoMiss, 2500);
  displayInvaderAtk();
}
function atkInvaders() {
  const atkInvScore1 = atkRoll();
  const atkInvScore2 = atkRoll();
  const atkInvScore3 = atkRoll();
  const atkInvScore4 = atkRoll();
  const atkInvaderScore =
    atkInvScore1 + atkInvScore2 + atkInvScore3 + atkInvScore4;
  document.getElementById("outD1").innerText = atkInvScore1;
  document.getElementById("outD2").innerText = atkInvScore2;
  document.getElementById("outD3").innerText = atkInvScore3;
  document.getElementById("outD4").innerText = atkInvScore4;
  outDice();
  invaderDefDice();
  if (atkInvaderScore > invaderDefScore) {
    hitInvaders();
  } else if (atkInvaderScore < invaderDefScore) {
    missInvaders();
  } else {
    document.getElementById("outMsg").innerText = `What a match!`;
    displayInvaderFight();
  }
  setTimeout(outMsg, 3000);
  setTimeout(outDiceReset, 4000);
}
function defInvaders() {
  const defInvScore1 = defRoll();
  const defInvScore2 = defRoll();
  const defInvScore3 = defRoll();
  const defInvScore4 = defRoll();
  const defInvaderScore =
    defInvScore1 + defInvScore2 + defInvScore3 + defInvScore4;
  document.getElementById("outD1").innerText = defInvScore1;
  document.getElementById("outD2").innerText = defInvScore2;
  document.getElementById("outD3").innerText = defInvScore3;
  document.getElementById("outD4").innerText = defInvScore4;
  outDice();
  invaderAtkDice();
  if (defInvaderScore < invaderAtkScore) {
    invadersHit();
  } else if (defInvaderScore > invaderAtkScore) {
    invadersMiss();
  } else {
    document.getElementById("outMsg").innerText = `What a match!`;
    displayInvaderFight();
  }
  setTimeout(outMsg, 3000);
  setTimeout(outDiceReset, 4000);
}

export { invadersAppear, atkInvaders, defInvaders };
