import { players } from "/JS/player.js";
function hideInv() {
  document.getElementById("arenaInv").style.display = "none";
  document.getElementById("armoryInv").style.display = "none";
  document.getElementById("battleInv").style.display = "none";
  document.getElementById("bedInv").style.display = "none";
  document.getElementById("bridgeInv").style.display = "none";
  document.getElementById("champInv").style.display = "none";
  document.getElementById("clearInv").style.display = "none";
  document.getElementById("dockInv").style.display = "none";
  document.getElementById("forestInv").style.display = "none";
  document.getElementById("houseInv").style.display = "none";
  document.getElementById("hullInv").style.display = "none";
  document.getElementById("hutInv").style.display = "none";
  document.getElementById("innInv").style.display = "none";
  document.getElementById("intHutInv").style.display = "none";
  document.getElementById("islandInv").style.display = "none";
  document.getElementById("mountInv").style.display = "none";
  document.getElementById("outInv").style.display = "none";
  document.getElementById("overInv").style.display = "none";
  document.getElementById("quadInv").style.display = "none";
  document.getElementById("riverInv").style.display = "none";
  document.getElementById("shipInv").style.display = "none";
  document.getElementById("shopInv").style.display = "none";
  document.getElementById("tavInv").style.display = "none";
  document.getElementById("templeInv").style.display = "none";
  document.getElementById("townInv").style.display = "none";
  document.getElementById("villageInv").style.display = "none";
  document.getElementById("welcomeInv").style.display = "none";
  document.getElementById("oceanInv").style.display = "none";
  document.getElementById("beachInv").style.display = "none";
  document.getElementById("innerIsleInv").style.display = "none";
  document.getElementById("shipTwoInv").style.display = "none";
}
function renderArenaInv() {
  document.getElementById("arenaInv").style.display = "block";
  document.getElementById("arenaItem").innerText =
    players.Player1.items.toString();
  document.getElementById("arenaWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("arenaArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("arenaVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "arenaTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderArmoryInv() {
  document.getElementById("armoryInv").style.display = "block";
  document.getElementById("armoryItem").innerText =
    players.Player1.items.toString();
  document.getElementById("armoryWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("armoryArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("armoryVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "armoryTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderBattleInv() {
  document.getElementById("battleInv").style.display = "block";
  document.getElementById("battleItem").innerText =
    players.Player1.items.toString();
  document.getElementById("battleWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("battleArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("battleVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "battleTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderBedInv() {
  document.getElementById("bedInv").style.display = "block";
  document.getElementById("bedItem").innerText =
    players.Player1.items.toString();
  document.getElementById("bedWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("bedArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("bedVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "bedTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderBridgeInv() {
  document.getElementById("bridgeInv").style.display = "block";
  document.getElementById("bridgeItem").innerText =
    players.Player1.items.toString();
  document.getElementById("bridgeWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("bridgeArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("bridgeVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "bridgeTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderChampInv() {
  document.getElementById("champInv").style.display = "block";
  document.getElementById("champItem").innerText =
    players.Player1.items.toString();
  document.getElementById("champWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("champArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("champVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "champTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderClearInv() {
  document.getElementById("clearInv").style.display = "block";
  document.getElementById("clearItem").innerText =
    players.Player1.items.toString();
  document.getElementById("clearWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("clearArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("clearVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "clearTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderDockInv() {
  document.getElementById("dockInv").style.display = "block";
  document.getElementById("dockItem").innerText =
    players.Player1.items.toString();
  document.getElementById("dockWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("dockArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("dockVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "dockTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderForestInv() {
  document.getElementById("forestInv").style.display = "block";
  document.getElementById("forestItem").innerText =
    players.Player1.items.toString();
  document.getElementById("forestWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("forestArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("forestVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "forestTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderHouseInv() {
  document.getElementById("houseInv").style.display = "block";
  document.getElementById("houseItem").innerText =
    players.Player1.items.toString();
  document.getElementById("houseWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("houseArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("houseVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "houseTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderHullInv() {
  document.getElementById("hullInv").style.display = "block";
  document.getElementById("hullItem").innerText =
    players.Player1.items.toString();
  document.getElementById("hullWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("hullArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("hullVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "hullTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderHutInv() {
  document.getElementById("hutInv").style.display = "block";
  document.getElementById("hutItem").innerText =
    players.Player1.items.toString();
  document.getElementById("hutWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("hutArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("hutVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "hutTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderInnInv() {
  document.getElementById("innInv").style.display = "block";
  document.getElementById("innItem").innerText =
    players.Player1.items.toString();
  document.getElementById("innWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("innArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("innVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "innTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderIntHutInv() {
  document.getElementById("intHutInv").style.display = "block";
  document.getElementById("intHutItem").innerText =
    players.Player1.items.toString();
  document.getElementById("intHutWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("intHutArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("intHutVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "intHutTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderIslandInv() {
  document.getElementById("islandInv").style.display = "block";
  document.getElementById("islandItem").innerText =
    players.Player1.items.toString();
  document.getElementById("islandWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("islandArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("islandVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "islandTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderMountInv() {
  document.getElementById("mountInv").style.display = "block";
  document.getElementById("mountItem").innerText =
    players.Player1.items.toString();
  document.getElementById("mountWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("mountArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("mountVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "mountTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderOutInv() {
  document.getElementById("outInv").style.display = "block";
  document.getElementById("outItem").innerText =
    players.Player1.items.toString();
  document.getElementById("outWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("outArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("outVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "outTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderOverInv() {
  document.getElementById("overInv").style.display = "block";
  document.getElementById("overItem").innerText =
    players.Player1.items.toString();
  document.getElementById("overWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("overArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("overVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "overTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderQuadInv() {
  document.getElementById("quadInv").style.display = "block";
  document.getElementById("quadItem").innerText =
    players.Player1.items.toString();
  document.getElementById("quadWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("quadArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("quadVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "quadTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderRiverInv() {
  document.getElementById("riverInv").style.display = "block";
  document.getElementById("riverItem").innerText =
    players.Player1.items.toString();
  document.getElementById("riverWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("riverArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("riverVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "riverTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderShipInv() {
  document.getElementById("shipInv").style.display = "block";
  document.getElementById("shipItem").innerText =
    players.Player1.items.toString();
  document.getElementById("shipWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("shipArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("shipVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "shipTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderShopInv() {
  document.getElementById("shopInv").style.display = "block";
  document.getElementById("shopItem").innerText =
    players.Player1.items.toString();
  document.getElementById("shopWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("shopArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("shopVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "shopTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderTavInv() {
  document.getElementById("tavInv").style.display = "block";
  document.getElementById("tavItem").innerText =
    players.Player1.items.toString();
  document.getElementById("tavWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("tavArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("tavVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "tavTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderTempleInv() {
  document.getElementById("templeInv").style.display = "block";
  document.getElementById("templeItem").innerText =
    players.Player1.items.toString();
  document.getElementById("templeWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("templeArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("templeVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderTownInv() {
  document.getElementById("townInv").style.display = "block";
  document.getElementById("townItem").innerText =
    players.Player1.items.toString();
  document.getElementById("townWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("townArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("townVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "townTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderVillageInv() {
  document.getElementById("villageInv").style.display = "block";
  document.getElementById("villageItem").innerText =
    players.Player1.items.toString();
  document.getElementById("villageWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("villageArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("villageVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "villageTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderWelcomeInv() {
  document.getElementById("welcomeInv").style.display = "block";
  document.getElementById("welcomeItem").innerText =
    players.Player1.items.toString();
  document.getElementById("welcomeWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("welcomeArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("welcomeVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "welcomeMsg"
  ).innerText = `${players.Player1.name}, you haven't even started yet! Get going!`;
}
function renderOceanInv() {
  document.getElementById("oceanInv").style.display = "block";
  document.getElementById("oceanItem").innerText =
    players.Player1.items.toString();
  document.getElementById("oceanWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("oceanArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("oceanVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "oceanTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderBeachInv() {
  document.getElementById("beachInv").style.display = "block";
  document.getElementById("beachItem").innerText =
    players.Player1.items.toString();
  document.getElementById("beachWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("beachArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("beachVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "beachTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderInnerIsleInv() {
  document.getElementById("innerIsleInv").style.display = "block";
  document.getElementById("innerIsleItem").innerText =
    players.Player1.items.toString();
  document.getElementById("innerIsleWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("innerIsleArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("innerIsleVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "innerIsleTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}
function renderShipTwoInv() {
  document.getElementById("shipTwoInv").style.display = "block";
  document.getElementById("shipTwoItem").innerText =
    players.Player1.items.toString();
  document.getElementById("shipTwoWeap").innerText =
    players.Player1.weapons.toString();
  document.getElementById("shipTwoArmor").innerText =
    players.Player1.armor.toString();
  document.getElementById("shipTwoVanq").innerText =
    players.Player1.vanquished.toString();
  document.getElementById(
    "shipTwoTalk"
  ).innerText = `${players.Player1.name}'s inner voice: I thought I was doing much better...`;
}

export {
  hideInv,
  renderArenaInv,
  renderArmoryInv,
  renderBattleInv,
  renderBedInv,
  renderBridgeInv,
  renderChampInv,
  renderClearInv,
  renderDockInv,
  renderForestInv,
  renderHouseInv,
  renderHullInv,
  renderHutInv,
  renderInnInv,
  renderIntHutInv,
  renderIslandInv,
  renderMountInv,
  renderOutInv,
  renderOverInv,
  renderQuadInv,
  renderRiverInv,
  renderShipInv,
  renderShopInv,
  renderTavInv,
  renderTempleInv,
  renderTownInv,
  renderVillageInv,
  renderWelcomeInv,
  renderOceanInv,
  renderInnerIsleInv,
  renderBeachInv,
  renderShipTwoInv,
};
