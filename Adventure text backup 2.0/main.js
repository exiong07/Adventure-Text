function startGame() {
  let userName = prompt("What is your name?");
  let userWeapon = prompt("Choose your weapon: Dagger, Sword, or Scythe?");
  let userShoes = prompt("Choose your shoes: Jordans, Crocs, or Boots");

  if (userName === "" && userWeapon === "" && userShoes === "") {
    alert("You didn't enter anything");
  } else if (userName != null && userWeapon != null && userShoes != null) {
    alert(
      "Wakeup! " +
        userName +
        " Wakeup!!!! Someone stole your collection of " +
        userShoes +
        " ... In a rush you grab the " +
        userWeapon +
        " and run out your room"
    );
  }
}
function promptFight() {
  let sceneOne = prompt(
    "As you run downstairs you see a masked thief pillaging your house a:throw b: charge (choose a letter)"
  );
  if (sceneOne === "") {
    alert("You didn't do anything and fainted");
  } else if (sceneOne) {
    switch (sceneOne) {
      case "a":
        alert(
          "You threw your weapon at the thief and hit their right shoulder.... The police came and you went to sleep."
        );
        break;
      case "b":
        alert(
          "You charged and noticed that the thief was a stunning girl.... So you let her go and went to bed"
        );
        break;
    }
  }
}
function promptDayTwo() {
  let userChoice = prompt(
    "What would you like to do today: Casino or Black Market"
  );
  if (userChoice === "") {
    alert("You didn't choose anything");
  } else if (userChoice != null) {
    alert("You have chosen " + userChoice);
  }
  let gambleMac = ["slots", "spades", "poker", "dice"];

  for (let i = 0; i < gambleMac.lengh; i++) {
    let outcome = gambleMac[i];
    console.log(outcome);
    alert("You went to the casino and played " + outcome);
  }

  if (gambleMac === "slots") {
    alert("You won in slots! The end");
  } else if (gambleMac === "spades") {
    alert("You won in spades! The end");
  } else if (gambleMac === "poker") {
    alert("You won in poker! The end");
  } else gambleMac === "dice";
  {
    alert("You won in dice! The end");
  }

  // for (let slots = 0; i < 10; i++) {
  //   if (i === 5) {
  //     alert("You won in slots!");
  //     continue;
  //   }

  if (userChoice === "Black Market") {
    alert(
      "You went to the Black Market and saw a muscular man standing at the door ."
    );

    let secretCode = prompt("What is the secret code?");
    while (secretCode === "chicken") {
      alert('Guard says:"You may enter........" THE END');
    }
    while (secretCode != "chicken") {
      alert("*SLAP *KICK *PUNCH You have been kidnapped......... THE END");
    }
  }
}

startGame();
promptFight();
promptDayTwo();
