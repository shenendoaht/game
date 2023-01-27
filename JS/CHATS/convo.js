import { characters } from "/JS/CHARACTERS/characters.js";
import { players } from "/JS/player.js";
import { tempTalk } from "/JS/CHATS/talk.js";
// // CONVO FUNCTION
function huTemple() {
  document.getElementById("greatMonkBtn").style.display = "none";
  document.getElementById("expTemple").style.display = "none";
  document.getElementById("mountOver").style.display = "none";
  document.getElementById("tempExit").style.display = "none";
  setTimeout(huLine1, 1000);
  setTimeout(huLine2, 3000);
  setTimeout(huLine3, 5000);
  setTimeout(huLine4, 7000);
  setTimeout(huLine5, 9000);
  setTimeout(huLine6, 11000);
  setTimeout(huLine7, 13000);
  setTimeout(huLine8, 15000);
  setTimeout(huLine9, 17000);
  setTimeout(huLine10, 19000);
  setTimeout(huLine11, 21000);
  setTimeout(huLine12, 23000);
  setTimeout(huLine13, 25000);
  setTimeout(huLine14, 27000);
  setTimeout(huLine15, 29000);
  setTimeout(huLine16, 31000);
  setTimeout(huLine17, 33000);
  setTimeout(huLine18, 35000);
  setTimeout(huLine19, 37000);
  setTimeout(huLine20, 39000);
  setTimeout(huLine21, 41000);
  setTimeout(huLine22, 43000);
  setTimeout(huLine23, 45000);
  setTimeout(huLine24, 47000);
  setTimeout(huLine25, 49000);
  setTimeout(huLine26, 51000);
  setTimeout(huLine27, 53000);
  setTimeout(huGift, 55000);
}
function huLine1() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Do you know this is Hu's Temple?`;
}
function huLine2() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Who's temple?`;
}
function huLine3() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine4() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Who's temple?`;
}
function huLine5() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: It is.`;
}
function huLine6() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: It is what?`;
}
function huLine7() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Hu's temple.`;
}
function huLine8() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: That's what I'm asking you.`;
}
function huLine9() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: And I am saying to you.`;
}
function huLine10() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: The temple belongs to?`;
}
function huLine11() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Hu.`;
}
function huLine12() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Then who's the temple owner?`;
}
function huLine13() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine14() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: Who owns it?`;
}
function huLine15() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huLine16() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: No, no... Who lives here?`;
}
function huLine17() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: That's right.`;
}
function huLine18() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: I don't understand.`;
}
function huLine19() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: It is Hu's temple.`;
}
function huLine20() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: That's what I'm asking!`;
}
function huLine21() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: And you are correct!`;
}
function huLine22() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: What?`;
}
function huLine23() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: No... Hu.`;
}
function huLine24() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: I give up.`;
}
function huLine25() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Would you like a present?`;
}
function huLine26() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById(
    "templeTalk"
  ).innerText = `${players.Player1.name}: A present from who?`;
}
function huLine27() {
  document.getElementById("templePlayer").style.display = "none";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: Yes.`;
}
function huGift() {
  document.getElementById("templePlayer").style.display = "block";
  document.getElementById("greatMonkHu").style.display = "block";
  document.getElementById("expTemple").style.display = "block";
  document.getElementById("mountOver").style.display = "block";
  document.getElementById("tempExit").style.display = "block";
  tempTalk();
  document.getElementById(
    "templeMsg"
  ).innerText = `${characters.GreatMonk.name} offers a generous gift! Do you accept?`;
  document.getElementById("huChoice").style.display = "flex";
}
function insulted() {
  document.getElementById(
    "templeMsg"
  ).innerText = `${characters.GreatMonk.name} is insulted you do not appreciate such a gift...`;
}
function huThank() {
  document.getElementById(
    "templeTalk"
  ).innerText = `${characters.GreatMonk.name}: This has been in my family for 11 generations!`;
  document.getElementById(
    "templeMsg"
  ).innerText = `${characters.GreatMonk.name} gives you... a stick?`;
  document.getElementById("magickStick").style.display = "block";
  document.getElementById("magickStickBtn").style.display = "block";
}
function hideGreatMonk() {
  document.getElementById("greatMonkHu").style.display = "none";
  document.getElementById("greatMonkBtn").style.display = "none";
}
export { huTemple, insulted, hideGreatMonk, huThank };
