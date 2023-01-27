import { champion, hell } from "/JS/UTIL/navs.js";
let players = {
  Player1: {
    name: "",
    level: 0,
    maxHP: 0,
    hp: 0,
    xp: 0,
    str: 0,
    def: 0,
    ab: 0,
    gp: 0,
    weapons: [],
    items: [],
    armor: [],
    vanquished: [],
    inventory: [],
    wins: 0,
    alive: false,
    // email: "",
    // pw: "",
  },
};
function renderWelcomePlayer() {
  document.getElementById("welcomePlayer").style.display = "block";
  document.getElementById(
    "welcomeStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderTownPlayer() {
  document.getElementById("townPlayer").style.display = "block";
  document.getElementById(
    "townStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHousePlayer() {
  document.getElementById("housePlayer").style.display = "block";
  document.getElementById(
    "houseStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBedPlayer() {
  document.getElementById("bedPlayer").style.display = "block";
  document.getElementById(
    "bedStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderTavPlayer() {
  document.getElementById("tavPlayer").style.display = "block";
  document.getElementById(
    "tavStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderInnPlayer() {
  document.getElementById("innPlayer").style.display = "block";
  document.getElementById(
    "innStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderShopPlayer() {
  document.getElementById("shopPlayer").style.display = "block";
  document.getElementById(
    "shopStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderArenaPlayer() {
  document.getElementById("arenaPlayer").style.display = "block";
  document.getElementById(
    "arenaStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderQuadPlayer() {
  document.getElementById("quadPlayer").style.display = "block";
  document.getElementById(
    "quadStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderArmoryPlayer() {
  document.getElementById("armoryPlayer").style.display = "block";
  document.getElementById(
    "armoryStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBattlePlayer() {
  document.getElementById("battlePlayer").style.display = "block";
  document.getElementById(
    "battleStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderDockPlayer() {
  document.getElementById("dockPlayer").style.display = "block";
  document.getElementById(
    "dockStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderForestPlayer() {
  document.getElementById("forestPlayer").style.display = "block";
  document.getElementById(
    "forestStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBridgePlayer() {
  document.getElementById("bridgePlayer").style.display = "block";
  document.getElementById(
    "bridgeStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderRiverPlayer() {
  document.getElementById("riverPlayer").style.display = "block";
  document.getElementById(
    "riverStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderClearingPlayer() {
  document.getElementById("clearPlayer").style.display = "block";
  document.getElementById(
    "clearStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHutPlayer() {
  document.getElementById("hutPlayer").style.display = "block";
  document.getElementById(
    "hutStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderIntHutPlayer() {
  document.getElementById("intHutPlayer").style.display = "block";
  document.getElementById(
    "intHutStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderShipPlayer() {
  document.getElementById("shipPlayer").style.display = "block";
  document.getElementById(
    "shipStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderHullPlayer() {
  document.getElementById("hullPlayer").style.display = "block";
  document.getElementById(
    "hullStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderIslandPlayer() {
  document.getElementById("islandPlayer").style.display = "block";
  document.getElementById(
    "islandStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderVillagePlayer() {
  document.getElementById("villagePlayer").style.display = "block";
  document.getElementById(
    "villageStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderOutskirtPlayer() {
  document.getElementById("outPlayer").style.display = "block";
  document.getElementById(
    "outStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderMtnPlayer() {
  document.getElementById("mountPlayer").style.display = "block";
  document.getElementById(
    "mountStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderOverPlayer() {
  document.getElementById("overPlayer").style.display = "block";
  document.getElementById(
    "overStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderTemplePlayer() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById(
    "templeStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderOceanPlayer() {
  document.getElementById("oceanPlayer").style.display = "block";
  document.getElementById(
    "oceanStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderBeachPlayer() {
  document.getElementById("beachPlayer").style.display = "block";
  document.getElementById(
    "beachStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderInnerIslePlayer() {
  document.getElementById("innerIslePlayer").style.display = "block";
  document.getElementById(
    "innerIsleStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderShipTwoPlayer() {
  document.getElementById("shipTwoPlayer").style.display = "block";
  document.getElementById(
    "shipTwoStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderChampion() {
  document.getElementById("champPlayer").style.display = "block";
  document.getElementById(
    "champStat"
  ).innerText = `NAME: ${players.Player1.name} | LEVEL: ${players.Player1.level} |
  HP: ${players.Player1.hp} / ${players.Player1.maxHP} | XP: ${players.Player1.xp} |
  STR: ${players.Player1.str} | DEF: ${players.Player1.def} | 
    AB: ${players.Player1.ab} | GP: ${players.Player1.gp}
  `;
}
function renderDeadPlayer() {
  document.getElementById("hellPlayer").style.display = "block";
}
function rollMaxHP(min = 10, max = 20) {
  min = Math.ceil(10);
  max = Math.floor(20);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollStr(min = 3, max = 8) {
  min = Math.ceil(3);
  max = Math.floor(8);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollDef(min = 2, max = 6) {
  min = Math.ceil(2);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollAb(min = 1, max = 3) {
  min = Math.ceil(1);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollStats() {
  players.Player1.maxHP = rollMaxHP();
  players.Player1.str = rollStr();
  players.Player1.def = rollDef();
  players.Player1.ab = rollAb();
  players.Player1.hp = players.Player1.maxHP;
}
function atkRoll(min = 1, max = players.Player1.str) {
  min = Math.ceil(1);
  max = Math.floor(players.Player1.str);
  return Math.floor(Math.random() * (max - min) + min);
}
function defRoll(min = 1, max = players.Player1.def) {
  min = Math.ceil(1);
  max = Math.floor(players.Player1.def);
  return Math.floor(Math.random() * (max - min) + min);
}
function winMatch() {
  players.Player1.wins += 1;
  players.Player1.str += 1;
  players.Player1.ab += 1;
  players.Player1.def += 1;
  players.Player1.gp += 10;
  players.Player1.xp += 10;
  players.Player1.hp = players.Player1.maxHP;
  checkXP();
}
function killPlayer() {
  players.Player1.name = "";
  players.Player1.level = 0;
  players.Player1.maxHP = 0;
  players.Player1.hp = 0;
  players.Player1.xp = 0;
  players.Player1.str = 0;
  players.Player1.def = 0;
  players.Player1.ab = 0;
  players.Player1.gp = 0;
  players.Player1.weapons = [];
  players.Player1.items = [];
  players.Player1.wins = [];
  players.Player1.alive = false;
  hell();
  renderDeadPlayer();
}
function checkHP() {
  if (players.Player1.hp >= 1) {
    players.Player1.alive = true;
  } else if (players.Player1.hp >= players.Player1.maxHP) {
    players.Player1.alive = true;
    players.Player1.hp = players.Player1.maxHP;
  } else {
    players.Player1.alive = false;
    killPlayer();
  }
}
function checkXP() {
  if (players.Player1.xp >= 50) {
    levelUP();
  }
}
function pointCheck() {
  checkHP();
  checkXP();
}
function winGame() {
  champion();
  renderChampion();
}
function levelUP() {
  if (players.Player1.level >= 10) {
    winGame();
  } else {
    players.Player1.level += 1;
    players.Player1.xp = 0;
    players.Player1.ab += 5;
    players.Player1.str += 10;
    players.Player1.def += 10;
    players.Player1.maxHP += 10;
  }
}
export {
  players,
  renderArenaPlayer,
  renderArmoryPlayer,
  renderBattlePlayer,
  renderBedPlayer,
  renderBridgePlayer,
  renderChampion,
  renderClearingPlayer,
  renderDeadPlayer,
  renderDockPlayer,
  renderForestPlayer,
  renderHousePlayer,
  renderHullPlayer,
  renderIntHutPlayer,
  renderHutPlayer,
  renderInnPlayer,
  renderIslandPlayer,
  renderMtnPlayer,
  renderOutskirtPlayer,
  renderOverPlayer,
  renderQuadPlayer,
  renderRiverPlayer,
  renderShipPlayer,
  renderShopPlayer,
  renderTavPlayer,
  renderTemplePlayer,
  renderTownPlayer,
  renderVillagePlayer,
  renderWelcomePlayer,
  renderOceanPlayer,
  renderBeachPlayer,
  renderInnerIslePlayer,
  renderShipTwoPlayer,
  rollStats,
  atkRoll,
  defRoll,
  winMatch,
  killPlayer,
  checkHP,
  checkXP,
  levelUP,
  winGame,
  pointCheck,
};
