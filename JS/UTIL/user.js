const users = [];
function endWelcomeMsg() {
  document.getElementById("welcomeMsg").innerText = ``;
}
function verifyUser() {
  document.getElementById("playerGen").style.display = "grid";
  document.getElementById("login").style.display = "none";
  document.getElementById(
    "welcomeMsg"
  ).innerText = `Name your character and explore the world!`;
  setTimeout(endWelcomeMsg, 4000);
}

function createUser() {}
function assignUser() {}

export { verifyUser };
