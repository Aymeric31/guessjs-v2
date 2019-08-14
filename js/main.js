function mysteriousNumber() {
  const aNumber = Math.floor(Math.random() * 10 + 1);
  let guessNumber = parseInt(window.prompt("Entrez votre chiffre"));
  let tryLeft = 3;

  while (guessNumber != aNumber && tryLeft > 0) {
    tryLeft--;
    if (guessNumber < aNumber) {
      window.alert("plus haut");
    } else {
      window.alert("plus bas");
    }
    guessNumber = parseInt(window.prompt("Try again"));
  }
  if (guessNumber == aNumber) {
    window.alert("GG");
  } else {
    window.alert("You loose");
  }
  console.log(aNumber);
}
mysteriousNumber();
