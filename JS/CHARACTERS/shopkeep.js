import { characters } from "/JS/CHARACTERS/characters.js";
import { items, weapons, armor } from "/JS/UTIL/data.js";
import { players } from "/JS/player.js";
function shopWelc() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.welcome[
      Math.floor(Math.random() * characters.Shopkeep.welcome.length)
    ]
  }`;
}
function shopQuote() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.quotes[
      Math.floor(Math.random() * characters.Shopkeep.quotes.length)
    ]
  }`;
}
function shopThank() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.quotes[
      Math.floor(Math.random() * characters.Shopkeep.quotes.length)
    ]
  }`;
}
function shopReject() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.reject[
      Math.floor(Math.random() * characters.Shopkeep.reject.length)
    ]
  }`;
}
function shopThreat() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.threat[
      Math.floor(Math.random() * characters.Shopkeep.threat.length)
    ]
  }`;
}
function shopSales() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.sales[
      Math.floor(Math.random() * characters.Shopkeep.sales.length)
    ]
  }`;
}
function shopImpress() {
  document.getElementById("shopTalk").innerText = `${
    characters.Shopkeep.name
  }: ${
    characters.Shopkeep.impress[
      Math.floor(Math.random() * characters.Shopkeep.impress.length)
    ]
  }`;
}
function showKey() {
  document.getElementById("key").style.display = "block";
  document.getElementById(
    "keyLabel"
  ).innerText = `${items.Key.name}: ${items.Key.gp} GP`;
}
function showFlipFlop() {
  document.getElementById("flipFlops").style.display = "block";
  document.getElementById(
    "flipFlopLabel"
  ).innerText = `${armor.FlipFlops.name}: ${armor.FlipFlops.gp} GP`;
}
function showFishtank() {
  document.getElementById("fishtank").style.display = "block";
  document.getElementById(
    "fishtankLabel"
  ).innerText = `${items.Fishtank.name}: ${items.Fishtank.gp} GP`;
}
function showInflatBat() {
  document.getElementById("inflatBat").style.display = "block";
  document.getElementById(
    "inflatBatLabel"
  ).innerText = `${weapons.InflatableBat.name}: ${weapons.InflatableBat.gp} GP`;
}
function shopMerch() {
  showKey();
  showFlipFlop();
  showInflatBat();
  showFishtank();
}
function buyKey() {
  document.getElementById("key").style.display = "none";
  document.getElementById("keyBtn").style.display = "none";
  document.getElementById("keyLabel").style.display = "none";
  players.Player1.gp -= items.Key.gp;
  players.Player1.items.push(` ${items.Key.name}`);
  players.Player1.inventory.push(items.Key);
  players.Player1.xp += items.Key.xp;
}
function buyFlipFlop() {
  document.getElementById("flipFlops").style.display = "none";
  document.getElementById("flipFlopBtn").style.display = "none";
  document.getElementById("flipFlopLabel").style.display = "none";
  players.Player1.gp -= armor.FlipFlops.gp;
  players.Player1.armor.push(` ${armor.FlipFlops.name}`);
  players.Player1.inventory.push(armor.FlipFlops);
  players.Player1.xp += armor.FlipFlops.xp;
}
function buyFishtank() {
  document.getElementById("fishtank").style.display = "none";
  document.getElementById("fishtankBtn").style.display = "none";
  document.getElementById("fishtankLabel").style.display = "none";
  players.Player1.gp -= items.Fishtank.gp;
  players.Player1.items.push(` ${items.Fishtank.name}`);
  players.Player1.inventory.push(items.Fishtank);
  players.Player1.xp += items.Fishtank.xp;
}
function buyInflatBat() {
  document.getElementById("inflatBat").style.display = "none";
  document.getElementById("inflatBatBtn").style.display = "none";
  document.getElementById("inflatBatLabel").style.display = "none";
  players.Player1.gp -= weapons.InflatableBat.gp;
  players.Player1.weapons.push(` ${weapons.InflatableBat.name}`);
  players.Player1.inventory.push(weapons.InflatableBat);
  players.Player1.xp += weapons.InflatableBat.xp;
}
export {
  shopImpress,
  shopQuote,
  shopReject,
  shopSales,
  shopThank,
  shopThreat,
  shopWelc,
  shopMerch,
  buyKey,
  buyFishtank,
  buyFlipFlop,
  buyInflatBat,
};
