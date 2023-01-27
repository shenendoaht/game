import { characters } from "/JS/CHARACTERS/characters.js";
import { shipTalk } from "/JS/CHATS/talk.js";

function boatswainChat() {
  document.getElementById("shipTalk").innerText = `
  ${characters.Boatswain.name}: ${
    characters.Boatswain.quotes[
      Math.floor(Math.random() * characters.Boatswain.quotes.length)
    ]
  }`;
  setTimeout(shipTalk, 5000);
}
export { boatswainChat };
