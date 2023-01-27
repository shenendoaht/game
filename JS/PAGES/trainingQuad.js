import {
  quadCheck,
  atkDum1,
  defDum1,
  atkDum2,
  defDum2,
  atkDum3,
  defDum3,
  takeTrainSword,
  showQuadChoice,
  hideQuadChoice,
} from "/JS/UTIL/quad.js";
import { quadCont } from "/JS/UTIL/cont.js";
import { hideInv, renderQuadInv } from "/JS/UTIL/inventory.js";
import { arena } from "/JS/UTIL/navs.js";
import { renderArenaPlayer } from "/JS/player.js";
import { quadMsg } from "/JS/CHATS/msg.js";
document.getElementById("quadArena").addEventListener("click", () => {
  arena();
  renderArenaPlayer();
});
document.getElementById("expQuad").addEventListener("click", () => {
  quadCont();
  showQuadChoice();
  document.getElementById("expQuad").style.display = "none";
});
document.getElementById("viewQuadInv").addEventListener("click", () => {
  renderQuadInv();
});
document.getElementById("hideQuadInv").addEventListener("click", () => {
  hideInv();
});
document.getElementById("quadYes").addEventListener("click", () => {
  quadMsg();
  quadCheck();
});
document.getElementById("quadNo").addEventListener("click", () => {
  hideQuadChoice();
  document.getElementById("quadMsg").innerText = `Perhaps later then!`;
  setTimeout(quadMsg, 5000);
});
document.getElementById("atkD1").addEventListener("click", () => {
  atkDum1();
});
document.getElementById("defD1").addEventListener("click", () => {
  defDum1();
});
document.getElementById("atkD2").addEventListener("click", () => {
  atkDum2();
});
document.getElementById("defD2").addEventListener("click", () => {
  defDum2();
});
document.getElementById("atkD3").addEventListener("click", () => {
  atkDum3();
});
document.getElementById("defD3").addEventListener("click", () => {
  defDum3();
});
document.getElementById("tSwordBtn").addEventListener("click", () => {
  takeTrainSword();
});
export default {};
