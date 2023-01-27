import { players } from "/JS/player.js";
import { author } from "/JS/UTIL/author.js";

function noCredit() {
  document.getElementById("end-cred").style.display = "none";
  document.getElementById("credit").style.display = "none";
}
function displayEndCred() {
  document.getElementById("end-cred").style.display = "block";
}
function showCredit1() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h2> ${players.Player1.name} </h2> </br> <p> as </p> </br>
  <h3> PLAYER ONE </h3> 
  `;
}
function showCredit2() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> Story By </h3> </br> 
  <h2> ${author.name}</h2>  
  `;
}
function showCredit3() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> Design By </h3> </br> 
  <h2> ${author.name}</h2> 
  `;
}
function showCredit4() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> Coded by </h3> </br> 
  <h2> ${author.name}</h2> 
  `;
}
function showCredit5() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> Resources </h3> </br> 
  <a href="https://www.scrimba.com" target="_blank"> Scrimba </a>  
  `;
}
function showCredit6() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> Special Thanks </h3> </br> 
  <h2> YOU!! </h2> 
  `;
}
function showCredit7() {
  displayEndCred();
  document.getElementById("credit").style.display = "block";
  document.getElementById("credit").style.transition = "ease-in-out";
  document.getElementById("credit").style.transitionDuration = "3s";
  document.getElementById("credit").style.transitionProperty = "display";
  document.getElementById("credit").innerHTML = `
  <h3> So Long For Now! </h3> </br> 
  <h2> See you soon!</h2> 
  `;
  setTimeout(noCredit, 6000);
}
function credits() {
  setTimeout(showCredit1, 1000);
  setTimeout(showCredit2, 4000);
  setTimeout(showCredit3, 7000);
  setTimeout(showCredit4, 10000);
  setTimeout(showCredit5, 13000);
  setTimeout(showCredit6, 16000);
  setTimeout(showCredit7, 19000);
}

export { credits };
