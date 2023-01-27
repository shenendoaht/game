import { players, renderShipPlayer } from "/JS/player.js";
import { hullCont } from "/JS/UTIL/cont.js";
import { hideInv, renderHullInv } from "/JS/UTIL/inventory.js";
import { ship } from "/JS/UTIL/navs.js";
import { items } from "/JS/UTIL/data.js";
import { hullMsg } from "/JS/CHATS/msg.js";
import {
  captiveAppear,
  captiveCall,
  captiveChoice,
  captiveYes,
  captiveNo,
} from "/JS/CHARACTERS/captive.js";

document.getElementById("hullExit").addEventListener("click", () => {
  ship();
  renderShipPlayer();
});
document.getElementById("expHull").addEventListener("click", () => {
  hullCont();
  document.getElementById("expHull").style.display = "none";
  setTimeout(captiveCall, 2500);
});
document.getElementById("viewHullInv").addEventListener("click", () => {
  renderHullInv();
});
document.getElementById("hideHullInv").addEventListener("click", () => {
  hideInv();
});
function barrel() {
  document.getElementById("searchBarrel").style.display = "block";
}
function noBarrel() {
  document.getElementById("searchBarrel").style.display = "none";
}
// APPLES ----------------------
function takeApple() {
  hideApple();
  players.Player1.items.push(` ${items.Apple.name}`);
  players.Player1.inventory.push(items.Apple);
  players.Player1.hp += items.Apple.hp;
  players.Player1.xp += items.Apple.xp;
  items.Apple.count -= 1;
}
function showApple() {
  noBarrel();
  document.getElementById("apple").style.display = "block";
  document.getElementById("appleBtn").style.display = "block";
}
function hideApple() {
  document.getElementById("apple").style.display = "none";
  document.getElementById("appleBtn").style.display = "none";
  barrel();
}
document.getElementById("searchBarrel").addEventListener("click", () => {
  if (items.Apple.count >= 1) {
    document.getElementById(
      "hullMsg"
    ).innerText = `${players.Player1.name} you found an apple!`;
    showApple();
  } else {
    document.getElementById("hullMsg").innerText = `Nothing but cobwebs...`;
  }
  setTimeout(hullMsg, 2000);
});
document.getElementById("appleBtn").addEventListener("click", () => {
  takeApple();
});
// CAPTIVE ----------------------
document.getElementById("searchHull").addEventListener("click", () => {
  captiveAppear();
  document.getElementById("searchHull").style.display = "none";
});
document.getElementById("captiveTalk").addEventListener("click", () => {
  captiveChoice();
});
document.getElementById("captiveFree").addEventListener("click", () => {
  captiveYes();
});
document.getElementById("captiveIgnore").addEventListener("click", () => {
  captiveNo();
});
export default {};
