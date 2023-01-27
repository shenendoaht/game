import { players } from "/JS/player.js";
import { characters } from "/JS/CHARACTERS/characters.js";
import { shipTalk } from "/JS/CHATS/talk.js";
import { shipMsg } from "/JS/CHATS/msg.js";
import { ship, ocean } from "/JS/UTIL/navs.js";
import { shipCont, oceanCont } from "/JS/UTIL/cont.js";
import { renderOceanPlayer } from "/JS/player.js";

function capnChat() {
  document.getElementById("shipTalk").innerText = `
  ${characters.Captain.name}: ${
    characters.Captain.quotes[
      Math.floor(Math.random() * characters.Captain.quotes.length)
    ]
  }`;
  setTimeout(shipTalk, 5000);
}
function capnThreat() {
  document.getElementById("shipTalk").innerText = `
  ${characters.Captain.name}: ${
    characters.Captain.threats[
      Math.floor(Math.random() * characters.Captain.threats.length)
    ]
  }`;
  ship();
  setTimeout(shipTalk, 4000);
  setTimeout(overBoard, 5000);
}
function throwPlayer() {
  ocean();
  oceanCont();
  renderOceanPlayer();
}
function overBoard() {
  shipCont();
  document.getElementById(
    "shipMsg"
  ).innerText = `${characters.Captain.name} seems pretty mad at ${players.Player1.name}`;
  setTimeout(shipMsg, 3000);
  setTimeout(throwPlayer, 4000);
  document.getElementById(
    "oceanMsg"
  ).style.innerText = `${players.Player1.name}, ${characters.Captain.name} threw you overboard!!`;
}

export { capnChat, capnThreat };
