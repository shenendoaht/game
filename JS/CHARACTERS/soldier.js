import { characters } from "/JS/CHARACTERS/characters.js";
import { forestTalk } from "/JS/CHATS/talk.js";
function showTree() {
  document.getElementById("tree").style.display = "block";
  document.getElementById("searchTree").style.display = "block";
}
function soldierAppear() {
  document.getElementById("soldier").style.display = "block";
  document.getElementById("soldierBtn").style.display = "block";
  soldierChat();
}
function soldierChoice() {
  document.getElementById("soldierBtn").style.display = "none";
  document.getElementById("soldierChoice").style.display = "flex";
  document.getElementById("soldierRespond").style.display = "none";
  document.getElementById("soldierYes-No").style.display = "flex";
  document.getElementById(
    "forestTalk"
  ).innerText = `${characters.Soldier.descrip}: Do you like swords?`;
}
function soldierRespond() {
  document.getElementById("soldierYes-No").style.display = "none";
  document.getElementById("soldierRespond").style.display = "flex";
  document.getElementById("soldierChoice1").style.display = "block";
  document.getElementById("soldierChoice2").style.display = "block";
  document.getElementById("soldierChoice3").style.display = "block";
}
function soldierChat() {
  document.getElementById("forestTalk").innerText = `${
    characters.Soldier.descrip
  }: ${
    characters.Soldier.chat[
      Math.floor(Math.random() * characters.Soldier.chat.length)
    ]
  }`;
  setTimeout(soldierChoice, 4500);
}
function soldierHint() {
  document.getElementById("forestTalk").innerText = `${
    characters.Soldier.descrip
  }: ${
    characters.Soldier.hint[
      Math.floor(Math.random() * characters.Soldier.hint.length)
    ]
  }`;
  document.getElementById("soldierRespond").style.display = "none";
  document.getElementById("soldierBtn").style.display = "block";
  setTimeout(forestTalk, 5000);
}
function soldierYes() {
  document.getElementById(
    "forestTalk"
  ).innerText = `${characters.Soldier.descrip}: ${characters.Soldier.yes}`;
  soldierRespond();
  document.getElementById("soldierChoice1").innerText = `Chat`;
  document.getElementById("soldierChoice2").innerText = `Inquire`;
  document.getElementById("soldierChoice3").innerText = `Help`;
  characters.Soldier.yesCount += 1;
  setTimeout(forestTalk, 5000);
}
function soldierNo() {
  document.getElementById("forestTalk").innerText = `${
    characters.Soldier.descrip
  }: ${
    characters.Soldier.no[
      Math.floor(Math.random() * characters.Soldier.no.length)
    ]
  }`;
  document.getElementById("soldierRespond").style.display = "none";
  document.getElementById("soldierBtn").style.display = "block";
  setTimeout(forestTalk, 5000);
}
function soldierName() {
  document.getElementById(
    "forestTalk"
  ).innerText = `${characters.Soldier.descrip}: It's ${characters.Soldier.name}`;
  setTimeout(soldierChoice, 5000);
}
function soldierGift() {
  document.getElementById(
    "forestTalk"
  ).innerText = `${characters.Soldier.descrip}: I like swords! By the way, I found these arrows!`;
  document.getElementById("arrows").style.display = "block";
  document.getElementById("arrowBtn").style.display = "block";
  setTimeout(forestTalk, 5000);
}

export {
  showTree,
  soldierAppear,
  soldierChoice,
  soldierYes,
  soldierNo,
  soldierName,
  soldierGift,
  soldierHint,
};
