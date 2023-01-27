import { characters } from "/JS/CHARACTERS/characters.js";
import { hellTalk } from "/JS/CHATS/talk.js";

function demonChat() {
  document.getElementById("hellTalk").innerText = `
  ${characters.Demon.name}: ${
    characters.Demon.quotes[
      Math.floor(Math.random() * characters.Demon.quotes.length)
    ]
  }`;
  setTimeout(hellTalk, 5000);
}
export { demonChat };
