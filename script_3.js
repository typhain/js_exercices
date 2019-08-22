console.log("Salut, bienvenue dans mon super programme de pyramide de la NASA")
  let nombre = prompt("combien d'étages veux-tu dans ta pyramide ?")
  diese = "#"
  espace = " "

  for(let i = 0; i <= nombre; i++) {
      console.log(espace.repeat(nombre - (i+1)) + diese.repeat(i+1));
  }
