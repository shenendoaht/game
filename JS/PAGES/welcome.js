import { verifyUser } from "/JS/UTIL/user.js";
import { renderWelcomeInv, hideInv } from "/JS/UTIL/inventory.js";
import {
  players,
  rollStats,
  renderWelcomePlayer,
  renderHousePlayer,
  winGame,
  killPlayer,
} from "/JS/player.js";
import { house } from "/JS/UTIL/navs.js";

document.getElementById("loginBtn").addEventListener("click", () => {
  verifyUser();
  document.getElementById("instructions").style.display = "block";
});
document.getElementById("namePlayerBtn").addEventListener("click", () => {
  players.Player1.name = document.getElementById("playerName").value;
  document.getElementById("playerGen").style.display = "none";
  document.getElementById("statRoll").style.display = "block";
  document.getElementById(
    "welcomeMsg"
  ).innerText = `${players.Player1.name}, roll your stats!`;
  renderWelcomePlayer();
});
document.getElementById("statRoll").addEventListener("click", () => {
  rollStats();
  renderWelcomePlayer();
  document.getElementById("statRoll").style.display = "none";
  document.getElementById("instructions").style.display = "none";
  document.getElementById("readyBtn").style.display = "block";
  document.getElementById(
    "welcomeMsg"
  ).innerText = `${players.Player1.name}, you are ready!`;
});
document.getElementById("readyBtn").addEventListener("click", () => {
  document.getElementById("welcome").style.display = "none";
  house();
  renderHousePlayer();
});
document.getElementById("viewWelcomeInv").addEventListener("click", () => {
  renderWelcomeInv();
});
document.getElementById("hideWelcomeInv").addEventListener("click", () => {
  hideInv();
});
export default {};
