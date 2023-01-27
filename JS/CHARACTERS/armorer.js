import { characters } from "/JS/CHARACTERS/characters.js";
import { weapons, armor } from "/JS/UTIL/data.js";
import { players } from "/JS/player.js";
function armoryWelc() {
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.welcome[
      Math.floor(Math.random() * characters.Armorer.welcome.length)
    ]
  }`;
}
function armoryQuote() {
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.quotes[
      Math.floor(Math.random() * characters.Armorer.quotes.length)
    ]
  }`;
}
function armoryThank() {
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.thanks[
      Math.floor(Math.random() * characters.Armorer.thanks.length)
    ]
  }`;
}
function armoryReject() {
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.reject[
      Math.floor(Math.random() * characters.Armorer.reject.length)
    ]
  }`;
}
function armoryThreat() {
  document.getElementById("armoryTalk").innerText = `${
    characters.Armorer.name
  }: ${
    characters.Armorer.threat[
      Math.floor(Math.random() * characters.Armorer.threat.length)
    ]
  }`;
}
function armoryWeapons() {
  document.getElementById("armoryWeapons").style.display = "flex";
  document.getElementById("armoryArmor").style.display = "none";
  showBow();
  showDagger();
  showCrossbow();
  showBroadsword();
}
function armoryArmor() {
  document.getElementById("armoryWeapons").style.display = "none";
  document.getElementById("armoryArmor").style.display = "flex";
  showGauntlet();
  showChainmail();
  showBowlingShoes();
  showTopHat();
}
function closeArmory() {
  document.getElementById("armoryWeapons").style.display = "none";
  document.getElementById("armoryArmor").style.display = "none";
}
function showBow() {
  document.getElementById("bow").style.display = "block";
  document.getElementById("bowBtn").style.display = "block";
  document.getElementById(
    "bowLabel"
  ).innerText = `${weapons.Bow.name}: ${weapons.Bow.gp} GP`;
}
function showDagger() {
  document.getElementById("dagger").style.display = "block";
  document.getElementById("daggerBtn").style.display = "block";
  document.getElementById(
    "daggerLabel"
  ).innerText = `${weapons.Dagger.name}: ${weapons.Dagger.gp} GP`;
}
function showCrossbow() {
  document.getElementById("crossbow").style.display = "block";
  document.getElementById("crossbowBtn").style.display = "block";
  document.getElementById(
    "crossbowLabel"
  ).innerText = `${weapons.CrossBow.name}: ${weapons.CrossBow.gp} GP`;
}
function showBroadsword() {
  document.getElementById("broadsword").style.display = "block";
  document.getElementById("broadswordBtn").style.display = "block";
  document.getElementById(
    "broadswordLabel"
  ).innerText = `${weapons.Broadsword.name}: ${weapons.Broadsword.gp} GP`;
}
function showGauntlet() {
  document.getElementById("gauntlet").style.display = "block";
  document.getElementById("gauntletBtn").style.display = "block";
  document.getElementById(
    "gauntletLabel"
  ).innerText = `${armor.Gauntlet.name}: ${armor.Gauntlet.gp} GP`;
}
function showChainmail() {
  document.getElementById("chainmail").style.display = "block";
  document.getElementById("chainmailBtn").style.display = "block";
  document.getElementById(
    "chainmailLabel"
  ).innerText = `${armor.Chainmail.name}: ${armor.Chainmail.gp} GP`;
}
function showBowlingShoes() {
  document.getElementById("bowlingShoes").style.display = "block";
  document.getElementById("bowlingShoesBtn").style.display = "block";
  document.getElementById(
    "bowlingShoesLabel"
  ).innerText = `${armor.BowlingShoes.name}: ${armor.BowlingShoes.gp} GP`;
}
function showTopHat() {
  document.getElementById("topHat").style.display = "block";
  document.getElementById("topHatBtn").style.display = "block";
  document.getElementById(
    "topHatLabel"
  ).innerText = `${armor.TopHat.name}: ${armor.TopHat.gp} GP`;
}
function buyBow() {
  document.getElementById("bow").style.display = "none";
  document.getElementById("bowBtn").style.display = "none";
  document.getElementById("bowLabel").style.display = "none";
  players.Player1.gp -= weapons.Bow.gp;
  players.Player1.weapons.push(` ${weapons.Bow.name}`);
  players.Player1.inventory.push(weapons.Bow);
  players.Player1.str += weapons.Bow.str;
}
function buyDager() {
  document.getElementById("dagger").style.display = "none";
  document.getElementById("daggerBtn").style.display = "none";
  document.getElementById("daggerLabel").style.display = "none";
  players.Player1.gp -= weapons.Dagger.gp;
  players.Player1.weapons.push(` ${weapons.Dagger.name}`);
  players.Player1.inventory.push(weapons.Dagger);
  players.Player1.str += weapons.Dagger.str;
}
function buyCrossbow() {
  document.getElementById("crossbow").style.display = "none";
  document.getElementById("crossbowBtn").style.display = "none";
  document.getElementById("crossbowLabel").style.display = "none";
  players.Player1.gp -= weapons.CrossBow.gp;
  players.Player1.weapons.push(` ${weapons.CrossBow.name}`);
  players.Player1.inventory.push(weapons.CrossBow);
  players.Player1.str += weapons.CrossBow.str;
}
function buyBroadsword() {
  document.getElementById("broadsword").style.display = "none";
  document.getElementById("broadswordBtn").style.display = "none";
  document.getElementById("broadswordLabel").style.display = "none";
  players.Player1.gp -= weapons.Broadsword.gp;
  players.Player1.weapons.push(` ${weapons.Broadsword.name}`);
  players.Player1.inventory.push(weapons.Broadsword);
  players.Player1.str += weapons.Broadsword.str;
}
function buyGauntlet() {
  document.getElementById("gauntlet").style.display = "none";
  document.getElementById("gauntletBtn").style.display = "none";
  document.getElementById("gauntletLabel").style.display = "none";
  players.Player1.gp -= armor.Gauntlet.gp;
  players.Player1.armor.push(` ${armor.Gauntlet.name}`);
  players.Player1.inventory.push(armor.Gauntlet);
  players.Player1.def += armor.Gauntlet.def;
  players.Player1.xp += armor.Gauntlet.xp;
}
function buyChainmail() {
  document.getElementById("chainmail").style.display = "none";
  document.getElementById("chainmailBtn").style.display = "none";
  document.getElementById("chainmailLabel").style.display = "none";
  players.Player1.gp -= armor.Chainmail.gp;
  players.Player1.armor.push(` ${armor.Chainmail.name}`);
  players.Player1.inventory.push(armor.Chainmail);
  players.Player1.xp += armor.Chainmail.xp;
  players.Player1.def += armor.Chainmail.def;
}
function buyBowlingShoes() {
  document.getElementById("bowlingShoes").style.display = "none";
  document.getElementById("bowlingShoesBtn").style.display = "none";
  document.getElementById("bowlingShoesLabel").style.display = "none";
  players.Player1.gp -= armor.BowlingShoes.gp;
  players.Player1.armor.push(` ${armor.BowlingShoes.name}`);
  players.Player1.inventory.push(armor.BowlingShoes);
  players.Player1.xp += armor.BowlingShoes.xp;
  players.Player1.def += armor.BowlingShoes.def;
}
function buyTopHat() {
  document.getElementById("topHat").style.display = "none";
  document.getElementById("topHat").style.display = "none";
  document.getElementById("topHatLabel").style.display = "none";
  players.Player1.gp -= armor.TopHat.gp;
  players.Player1.armor.push(` ${armor.TopHat.name}`);
  players.Player1.inventory.push(armor.TopHat);
  players.Player1.def += armor.TopHat.def;
  players.Player1.ab += armor.TopHat.ab;
}
function armorerShove() {
  players.Player1.hp -= 1;
  document.getElementById(
    "armoryMsg"
  ).innerText = `${players.Player1.name}, ${characters.Armorer.name} shoved you!`;
}
export {
  armoryWelc,
  armoryQuote,
  armoryThank,
  armoryReject,
  armoryThreat,
  armoryWeapons,
  armoryArmor,
  buyBow,
  buyBowlingShoes,
  buyBroadsword,
  buyChainmail,
  buyCrossbow,
  buyDager,
  buyGauntlet,
  buyTopHat,
  armorerShove,
  closeArmory,
};
