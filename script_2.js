// Un prompt s'affiche avec la question suivante
n = prompt("De quel nombre veux tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)


 function Factorial(n) {

   let factorial = 1;

   for (let i = 1; i <= n; i++) {
     factorial = factorial * i;
   }

   return factorial;

 }


// Dans la console le résultat suivant est affiché
console.log(`la factorielle de ton nombre est ${Factorial(n)} :)`)
