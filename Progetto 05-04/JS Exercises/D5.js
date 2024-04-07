/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

/*
for (i = 0; i < pets.length; i++){
  console.log(pets[i])
}
*/

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/*
console.log(pets)
pets.sort()
*/

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/*
for (i = 0; i < pets.length; i++){
console.log(pets[pets.length - 1 - i])}
*/

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/*
const temp = pets[0];
pets[0] = pets[3];
pets[3] = temp;
console.log(pets)
*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

/*
cars.forEach((element) => {
    element.licensPlate = 'DD433OP'
});
console.log(cars)
*/

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
/*
let mioArray = {
    brand: 'Seat',
    model: 'Leon',
    color: 'yellow',
    trims: ['titanium', 'st', 'active'],
};
cars.push(mioArray);
console.log (cars)
*/

/*
cars.forEach((element) => {
  element.trims.pop()
})
console.log (cars)
*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

/*
const justTrims = []

for(i = 0; i < cars.length; i++){
  if(cars[i].trims){
    justTrims.push(cars[i].trims[0])
  }
}
console.log(justTrims)
*/

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/*
for(i = 0; i < cars.length; i++){
  if (cars[i].color.startsWith('b'))
    console.log('Fizz')
  else 
  console.log('Buzz')
}
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

/*
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32){
  console.log(numericArray[i]);
  i++
}
*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

/*
const alfabeto = "abcdefghilmnopqrstuvz"
const posizione = []

for (let i = 0; i < charactersArray.length; i++){
  switch (charactersArray[i]) {
    case 'a':
    posizione.push(alfabeto.indexOf ('a') + 1); 
    break;
    case 'b':
    posizione.push(alfabeto.indexOf ('b') + 1); 
    break;
    case 'c':
    posizione.push(alfabeto.indexOf ('c') + 1); 
    break;
    case 'd':
    posizione.push(alfabeto.indexOf ('d') + 1); 
    break;
    case 'e':
    posizione.push(alfabeto.indexOf ('e') + 1); 
    break;
    case 'f':
    posizione.push(alfabeto.indexOf ('f') + 1); 
    break;
    case 'g':
    posizione.push(alfabeto.indexOf ('g') + 1); 
    break;
    case 'h':
    posizione.push(alfabeto.indexOf ('h') + 1); 
    break;
    case 'i':
    posizione.push(alfabeto.indexOf ('i') + 1); 
    break;
    case 'l':
    posizione.push(alfabeto.indexOf ('l') + 1); 
    break;
    case 'm':
    posizione.push(alfabeto.indexOf ('m') + 1); 
    break;
    case 'n':
    posizione.push(alfabeto.indexOf ('n') + 1); 
    break;
    case 'o':
    posizione.push(alfabeto.indexOf ('o') + 1); 
    break;
    case 'p':
    posizione.push(alfabeto.indexOf ('p') + 1); 
    break;
    case 'q':
    posizione.push(alfabeto.indexOf ('q') + 1); 
    break;
    case 'r':
    posizione.push(alfabeto.indexOf ('r') + 1); 
    break;
    case 's':
    posizione.push(alfabeto.indexOf ('s') + 1); 
    break;
    case 't':
    posizione.push(alfabeto.indexOf ('t') + 1); 
    break;
    case 'u':
    posizione.push(alfabeto.indexOf ('u') + 1); 
    break;
    case 'v':
    posizione.push(alfabeto.indexOf ('v') + 1); 
    break;
    case 'z':
    posizione.push(alfabeto.indexOf ('z') + 1); 
    break;
  }
}
console.log(posizione);
*/
