import { characters } from "/JS/CHARACTERS/characters.js";
import { beachTalk } from "/JS/CHATS/talk.js";
import { players } from "/JS/player.js";

function renderCrab() {
  document.getElementById("crab").style.display = "block";
  document.getElementById("crabBtn").style.display = "block";
  document.getElementById(
    "beachTalk"
  ).innerText = `${characters.Crab.name}: Hey ${players.Player1.name}`;
}
function crabChat() {
  document.getElementById("beachTalk").innerText = `${characters.Crab.name}: ${
    characters.Crab.quotes[
      Math.floor(Math.random() * characters.Crab.quotes.length)
    ]
  }`;
  setTimeout(beachTalk, 5000);
}

export { renderCrab, crabChat };
