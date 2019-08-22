const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

repeatNum = 70
console.log("-".repeat(repeatNum))
console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ?")

function ispositive(element) {return element > 0;
}
  array = []
  for (let book in books) {
    array.push(books[book].rented)}

if (array.every(ispositive))
    console.log("Tous les livres ont été empruntés aux moins une fois :)")
    else
    console.log("Tous les livres n'ont pas été empruntés au moins une fois :(")

array =[]
for (let index in books) {
  array.push(books[index].rented)
  array.sort();
  }
last = array.slice(-1)[0]

for (let index in books) {
  if (books[index].rented === last){
    result = books[index].title
  }
  }

console.log("-".repeat(repeatNum))
console.log("le livre le plus emprunté est :")
console.log(result)

array =[]
for (let index in books) {
  array.push(books[index].rented)
  array.sort();
  }
last = array.slice(0)[0]

for (let index in books) {
  if (books[index].rented === last){
    result = books[index].title
  }
  }
console.log("-".repeat(repeatNum))
console.log("le livre le moins emprunté est :")
console.log(result)

for (let index in books) {
  if (books[index].id === 873495){
    result = (books[index].title)
    }
  }
console.log("-".repeat(repeatNum))
console.log("le livre dont l'id est 873495 a pour titre:")
console.log(result)

console.log("suppression du livre avec l'id 133712")
for (let index in books) {
  if (books[index].id === 133712){
    result = (books[index])
    }
  }
index = books.indexOf(result);
books.splice(index,1);
newArr = books
console.log(newArr)

console.log("-".repeat(repeatNum))
console.log ("rangement des livres par ordre alpahbétique")
array =[]
for (let index in books) {
  array.push(newArr[index].title)
   }
console.log(array.sort().join())
