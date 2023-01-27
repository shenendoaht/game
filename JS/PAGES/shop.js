import {
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
} from "/JS/CHARACTERS/shopkeep.js";
import {
  players,
  renderShopPlayer,
  renderTownPlayer,
  checkXP,
} from "/JS/player.js";
import { shopCont } from "/JS/UTIL/cont.js";
import { items, weapons, armor } from "/JS/UTIL/data.js";
import { hideInv, renderShopInv } from "/JS/UTIL/inventory.js";
import { town } from "/JS/UTIL/navs.js";
import { shopMsg } from "/JS/CHATS/msg.js";
import { shopTalk } from "/JS/CHATS/talk.js";

document.getElementById("shopTown").addEventListener("click", () => {
  town();
  renderTownPlayer();
});
document.getElementById("expShop").addEventListener("click", () => {
  shopCont();
  shopWelc();
  document.getElementById("expShop").style.display = "none";
  setTimeout(shopTalk, 5000);
});
document.getElementById("viewShopInv").addEventListener("click", () => {
  renderShopInv();
});
document.getElementById("hideShopInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("searchShop").addEventListener("click", () => {
  document.getElementById("searchShop").style.display = "none";
  document.getElementById("receipt").style.display = "block";
  document.getElementById("receiptBtn").style.display = "block";
  document.getElementById(
    "shopMsg"
  ).innerText = `${players.Player1.name}, you found a receipt!`;
  setTimeout(shopMsg, 4000);
});
document.getElementById("receiptBtn").addEventListener("click", () => {
  document.getElementById("receipt").style.display = "none";
  document.getElementById("receiptBtn").style.display = "none";
  players.Player1.items.push(` ${items.Receipt.name}`);
  players.Player1.inventory.push(items.Receipt);
  players.Player1.xp += items.Receipt.xp;
  checkXP();
  renderShopPlayer();
});
document.getElementById("shopWaresBtn").addEventListener("click", () => {
  document.getElementById("shopWares").style.display = "flex";
  shopMerch();
  shopQuote();
  setTimeout(shopTalk, 5000);
});
// SHOP ITEM FUNCTIONS---------------------------------
document.getElementById("keyBtn").addEventListener("click", () => {
  if (players.Player1.gp >= items.Key.gp) {
    buyKey();
    shopThank();
    checkXP();
    renderShopPlayer();
  } else if (players.Player1.gp < items.Key.gp % 2) {
    shopThreat();
  } else {
    shopReject();
  }
  setTimeout(shopTalk, 5000);
});
document.getElementById("flipFlopBtn").addEventListener("click", () => {
  if (players.Player1.gp >= armor.FlipFlops.gp) {
    buyFlipFlop();
    shopThank();
    checkXP();
    renderShopPlayer();
  } else if (players.Player1.gp < armor.FlipFlops.gp % 2) {
    shopThreat();
  } else {
    shopReject();
  }
  setTimeout(shopTalk, 5000);
});
document.getElementById("inflatBatBtn").addEventListener("click", () => {
  if (players.Player1.gp >= weapons.InflatableBat.gp) {
    buyInflatBat();
    shopThank();
    checkXP();
    renderShopPlayer();
  } else if (players.Player1.gp < weapons.InflatableBat.gp % 2) {
    shopThreat();
  } else {
    shopReject();
  }
  setTimeout(shopTalk, 5000);
});
document.getElementById("fishtankBtn").addEventListener("click", () => {
  if (players.Player1.gp >= items.Fishtank.gp) {
    buyFishtank();
    shopImpress();
    checkXP();
    renderShopPlayer();
  } else if (players.Player1.gp < items.Fishtank.gp % 2) {
    shopThreat();
  } else {
    shopReject();
  }
  setTimeout(shopTalk, 5000);
});
export default {};
