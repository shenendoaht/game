import { users, user } from "/JS/users.js";

function signUpMsgReset() {
  document.getElementById("signUpMsg").innerText = ``;
}
function signUpMsg() {
  document.getElementById(
    "signUpMsg"
  ).innerText = `Sign up to explore ze dungeon!`;
}
function showSignUp() {
  document.getElementById("create-user").style.display = "block";
}

function createUser() {
  const usern = document.getElementById("name-user").value;
  if (
    document.getElementById("user-PW").value ===
    document.getElementById("user-PW-Conf")
  ) {
    const userPass = document.getElementById("username").value;
    signUpMsgReset();
    new user(props);
    user.username = usern;
    user.id = users.length;
  } else {
    document.getElementById(
      "signUpMsg"
    ).innerText = `Your passwords do not match.`;
    setTimeout(signUpMsgReset, 5000);
  }
}

export { showSignUp, signUpMsg, createUser };
