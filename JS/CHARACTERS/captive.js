import { characters } from "/JS/CHARACTERS/characters.js";
import { hullTalk } from "/JS/CHATS/talk.js";
import { hullMsg } from "/JS/CHATS/msg.js";
import { players, renderHullPlayer, pointCheck } from "/JS/player.js";
import { capnThreat } from "/JS/CHARACTERS/captain.js";

function captiveCall() {
  captiveTalk();
  setTimeout(hullTalk, 2500);
  setTimeout(hullSearch, 3000);
}
function hullSearch() {
  document.getElementById("searchHull").style.display = "block";
  document.getElementById(
    "hullMsg"
  ).innerText = `${players.Player1.name}, should you investigate?`;
}
function captiveAppear() {
  document.getElementById("captive").style.display = "block";
  document.getElementById("captiveTalk").style.display = "block";
}
function hideCaptive() {
  document.getElementById("captive").style.display = "none";
  document.getElementById("captiveTalk").style.display = "none";
  document.getElementById("captiveChoice").style.display = "none";
}
function captiveTalk() {
  document.getElementById("hullTalk").innerText = `${
    characters.Prisoner.name
  }: ${
    characters.Prisoner.quotes[
      Math.floor(Math.random() * characters.Prisoner.quotes.length)
    ]
  }`;
}
function captiveThank() {
  document.getElementById("hullTalk").innerText = `${
    characters.Prisoner.name
  }: ${
    characters.Prisoner.thanks[
      Math.floor(Math.random() * characters.Prisoner.thanks.length)
    ]
  }`;
}
function captivePlead() {
  document.getElementById("hullTalk").innerText = `${
    characters.Prisoner.name
  }: ${
    characters.Prisoner.pleads[
      Math.floor(Math.random() * characters.Prisoner.pleads.length)
    ]
  }`;
}
function captiveChoice() {
  document.getElementById("captiveTalk").style.display = "none";
  document.getElementById("hullExit").style.display = "none";
  document.getElementById("captiveChoice").style.display = "flex";
  document.getElementById("captiveFree").style.display = "block";
  document.getElementById("captiveIgnore").style.display = "block";
  captiveTalk();
  document.getElementById(
    "hullMsg"
  ).innerText = `${players.Player1.name}, what should you do?`;
  setTimeout(hullMsg, 4000);
}
function captiveYes() {
  captiveThank();
  freeCaptive();
}
function captiveNo() {
  hideCaptive();
  captivePlead();
}
function freeCaptive() {
  hideCaptive();
  characters.Prisoner.isFree = true;
  players.Player1.xp += 50;
  pointCheck();
  renderHullPlayer();
  setTimeout(capnThreat, 2000);
}
export { captiveAppear, captiveCall, captiveChoice, captiveYes, captiveNo };
