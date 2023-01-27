import { characters } from "/JS/CHARACTERS/characters.js";
import { players, checkHP, renderArenaPlayer } from "/JS/player.js";
import { arenaTalk } from "/JS/CHATS/talk.js";
import { arenaMsg } from "/JS/CHATS/msg.js";

function beggarAsk() {
  document.getElementById("arenaTalk").innerText = `${
    characters.Beggar.name
  }: ${
    characters.Beggar.quotes[
      Math.floor(Math.random() * characters.Beggar.quotes.length)
    ]
  }`;
}
function beggarStone() {
  document.getElementById(
    "arenaMsg"
  ).innerText = `${players.Player1.name}, the beggar threw a rock at you!`;
  players.Player1.hp -= 2;
  checkHP();
  renderArenaPlayer();
  setTimeout(arenaMsg, 4000);
}
function give() {
  players.Player1.gp -= 2;
  characters.Beggar.gp += 2;
  document.getElementById("arenaTalk").innerText = `${
    characters.Beggar.name
  }: ${
    characters.Beggar.thanks[
      Math.floor(Math.random() * characters.Beggar.thanks.length)
    ]
  }`;
  renderArenaPlayer();
  hideBeggar();
}
function beggarGive() {
  if (players.Player1.gp >= 2) {
    give();
  } else {
    beggarDeny();
  }
}
function beggarDeny() {
  document.getElementById("arenaTalk").innerText = `${
    characters.Beggar.name
  }: ${
    characters.Beggar.reject[
      Math.floor(Math.random() * characters.Beggar.reject.length)
    ]
  }`;
  hideBeggar();
  beggarStone();
}
function showBeggar() {
  document.getElementById("expArena").style.display = "none";
  document.getElementById("arenaNav").style.display = "none";
  document.getElementById("beggar").style.display = "block";
  document.getElementById("begChoice").style.display = "flex";
  beggarAsk();
  setTimeout(arenaTalk, 5000);
}
function hideBeggar() {
  document.getElementById("beggar").style.display = "none";
  document.getElementById("begChoice").style.display = "none";
  document.getElementById("expArena").style.display = "block";
  document.getElementById("arenaNav").style.display = "flex";
}
function checkBeggar() {
  if (characters.Beggar.gp <= 5) {
    showBeggar();
  } else {
    hideBeggar();
  }
}
export {
  beggarAsk,
  beggarDeny,
  beggarGive,
  beggarStone,
  showBeggar,
  hideBeggar,
  checkBeggar,
};
