import { players, renderArenaPlayer } from "/JS/player.js";
import { battleCheck } from "/JS/UTIL/battle.js";
import { battleCont } from "/JS/UTIL/cont.js";
import { hideInv, renderBattleInv } from "/JS/UTIL/inventory.js";
import { arena } from "/JS/UTIL/navs.js";
import { atkOrc, defOrc } from "/JS/ENEMIES/BATTLEDOME/orc.js";
import { atkGob, defGob } from "/JS/ENEMIES/BATTLEDOME/goblin.js";
import { atkBandit, defBandit } from "/JS/ENEMIES/BATTLEDOME/bandit.js";
import { atkGolem, defGolem } from "/JS/ENEMIES/BATTLEDOME/golem.js";
import { atkMinotaur, defMinotaur } from "/JS/ENEMIES/BATTLEDOME/minotaur.js";
import {
  atkGladiator,
  defGladiator,
} from "/JS/ENEMIES/BATTLEDOME/gladiator.js";
import {
  atkBerserker,
  defBerserker,
} from "/JS/ENEMIES/BATTLEDOME/berserker.js";
import { atkGuardian, defGuardian } from "/JS/ENEMIES/BATTLEDOME/guardian.js";
import { atkGiant, defGiant } from "/JS/ENEMIES/BATTLEDOME/giant.js";
import { battleMsg } from "/JS/CHATS/msg.js";
document.getElementById("battleArena").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("expBattle").addEventListener("click", () => {
  battleCont();
  document.getElementById("expBattle").style.display = "none";
  document.getElementById(
    "battleMsg"
  ).innerText = `${players.Player1.name}, are you ready to do battle?`;
});
document.getElementById("viewBattleInv").addEventListener("click", () => {
  renderBattleInv();
});
document.getElementById("hideBattleInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("battYes").addEventListener("click", () => {
  battleCheck();
  document.getElementById("battleMsg").innerText = ``;
});
document.getElementById("battNo").addEventListener("click", () => {
  document.getElementById("battleMsg").innerText = `Perhaps later then!`;
  setTimeout(battleMsg, 4000);
});
// BATTLE FIGHT FUNCTIONS---------------------------------
document.getElementById("orcAtk").addEventListener("click", () => {
  atkOrc();
});
document.getElementById("orcDef").addEventListener("click", () => {
  defOrc();
});
document.getElementById("gobAtk").addEventListener("click", () => {
  atkGob();
});
document.getElementById("gobDef").addEventListener("click", () => {
  defGob();
});
document.getElementById("banAtk").addEventListener("click", () => {
  atkBandit();
});
document.getElementById("banDef").addEventListener("click", () => {
  defBandit();
});
document.getElementById("golAtk").addEventListener("click", () => {
  atkGolem();
});
document.getElementById("golDef").addEventListener("click", () => {
  defGolem();
});
document.getElementById("minoAtk").addEventListener("click", () => {
  atkMinotaur();
});
document.getElementById("minoDef").addEventListener("click", () => {
  defMinotaur();
});
document.getElementById("gladAtk").addEventListener("click", () => {
  atkGladiator();
});
document.getElementById("gladDef").addEventListener("click", () => {
  defGladiator();
});
document.getElementById("berAtk").addEventListener("click", () => {
  atkBerserker();
});
document.getElementById("berDef").addEventListener("click", () => {
  defBerserker();
});
document.getElementById("guarAtk").addEventListener("click", () => {
  atkGuardian();
});
document.getElementById("guarDef").addEventListener("click", () => {
  defGuardian();
});
document.getElementById("giantAtk").addEventListener("click", () => {
  atkGiant();
});
document.getElementById("giantDef").addEventListener("click", () => {
  defGiant();
});
export default {};
