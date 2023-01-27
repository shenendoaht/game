import { characters } from "/JS/CHARACTERS/characters.js";
import { gameReset } from "/JS/UTIL/resetGame.js";
import { hellCont } from "/JS/UTIL/cont.js";
import { lawyerChat } from "/JS/CHARACTERS/lawyer.js";
import { demonChat } from "/JS/CHARACTERS/demon.js";

document.getElementById("expHell").addEventListener("click", () => {
  hellCont();
  document.getElementById("expHell").style.display = "none";
});
document.getElementById("tryAgain").addEventListener("click", () => {
  gameReset();
});
document.getElementById("lawyerBtn").addEventListener("click", () => {
  if (characters.Lawyer.hrsBilled <= 4) {
    characters.Lawyer.hrsBilled += 1;
    lawyerChat();
  } else {
    document.getElementById(
      "hellMsg"
    ).innerText = `dead-${players.Player1.name}, you need to pay your lawyer!`;
  }
});
document.getElementById("demonBtn").addEventListener("click", () => {
  demonChat();
});
export default {};
