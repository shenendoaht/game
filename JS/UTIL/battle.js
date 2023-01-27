import { enemies } from "/JS/ENEMIES/enemies.js";
import { players, winGame } from "/JS/player.js";
import { battleTalk } from "/JS/CHATS/talk.js";
import { battleMsg } from "/JS/CHATS/msg.js";
import { orcAppear } from "/JS/ENEMIES/BATTLEDOME/orc.js";
import { gobAppear } from "/JS/ENEMIES/BATTLEDOME/goblin.js";
import { banditAppear } from "/JS/ENEMIES/BATTLEDOME/bandit.js";
import { golemAppear } from "/JS/ENEMIES/BATTLEDOME/golem.js";
import { minotaurAppear } from "/JS/ENEMIES/BATTLEDOME/minotaur.js";
import { gladiatorAppear } from "/JS/ENEMIES/BATTLEDOME/gladiator.js";
import { berserkerAppear } from "/JS/ENEMIES/BATTLEDOME/berserker.js";
import { guardianAppear } from "/JS/ENEMIES/BATTLEDOME/guardian.js";
import { giantAppear } from "/JS/ENEMIES/BATTLEDOME/giant.js";
// -----------------------------------------------------------------------
function showExpBattle() {
  document.getElementById("expBattle").style.display = "block";
}
function showBattleChoice() {
  document.getElementById("battleChoice").style.display = "flex";
}
function hideBattleChoice() {
  document.getElementById("battleChoice").style.display = "none";
}
function battDiceReset() {
  document.getElementById("battDice").style.display = "none";
}
function rollBattDice() {
  document.getElementById("battDice").style.display = "flex";
}
function showBattFight() {
  document.getElementById("battFight").style.display = "block";
}
function hideBattFight() {
  document.getElementById("battFight").style.display = "none";
}
function battleCheck() {
  hideBattleChoice();
  if (enemies.Orc.alive === true) {
    orcAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Goblin.alive === true) {
    gobAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Bandit.alive === true) {
    banditAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Golem.alive === true) {
    golemAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Minotaur.alive === true) {
    minotaurAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Gladiator.alive === true) {
    gladiatorAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Berserker.alive === true) {
    berserkerAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Guardian.alive === true) {
    guardianAppear();
    setTimeout(battleTalk, 5000);
  } else if (enemies.Giant.alive === true) {
    giantAppear();
    setTimeout(battleTalk, 5000);
  } else {
    document.getElementById(
      "battleMsg"
    ).innerText = `${players.Player1.name} you have defeated all your opponents!`;
    setTimeout(battleMsg, 4000);
    setTimeout(winGame, 5000);
  }
}
function battleDice() {
  document.getElementById("battleDice").style.display = "flex";
  document.getElementById("bD1").style.display = "block";
  document.getElementById("bD2").style.display = "block";
  document.getElementById("bD3").style.display = "block";
}
function enemyDice() {
  document.getElementById("enemyDice").style.display = "flex";
  document.getElementById("enD1").style.display = "block";
  document.getElementById("enD2").style.display = "block";
  document.getElementById("enD3").style.display = "block";
}
function rollMatchDice() {
  enemyDice();
  battleDice();
}
// -----------------------------------------------------------------------
export {
  battleCheck,
  showBattleChoice,
  hideBattleChoice,
  battDiceReset,
  rollBattDice,
  showBattFight,
  hideBattFight,
  battleDice,
  enemyDice,
  rollMatchDice,
  showExpBattle,
};
