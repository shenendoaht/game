import { characters } from "/JS/CHARACTERS/characters.js";
import { hellTalk } from "/JS/CHATS/talk.js";

function lawyerChat() {
  document.getElementById("hellTalk").innerText = `
  ${characters.Lawyer.name}: ${
    characters.Lawyer.quotes[
      Math.floor(Math.random() * characters.Lawyer.quotes.length)
    ]
  }`;
  setTimeout(hellTalk, 5000);
}
export { lawyerChat };
