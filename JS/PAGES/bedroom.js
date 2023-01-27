import { players, renderBedPlayer, renderHousePlayer } from "/JS/player.js";
import { renderBedInv, hideInv } from "/JS/UTIL/inventory.js";
import { bedCont } from "/JS/UTIL/cont.js";
import { bedMsg } from "/JS/CHATS/msg.js";
import { house } from "/JS/UTIL/navs.js";

document.getElementById("bedHouse").addEventListener("click", () => {
  house();
  renderHousePlayer();
});
document.getElementById("expBed").addEventListener("click", () => {
  bedCont();
  document.getElementById("expBed").style.display = "none";
});
document.getElementById("viewBedInv").addEventListener("click", () => {
  renderBedInv();
});
document.getElementById("hideBedInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("bedRest").addEventListener("click", () => {
  document.getElementById(
    "bedMsg"
  ).innerText = `${players.Player1.name} takes a nice nap!`;
  players.Player1.hp = players.Player1.maxHP;
  renderBedPlayer();
  setTimeout(bedMsg, 6000);
});

export default {};
