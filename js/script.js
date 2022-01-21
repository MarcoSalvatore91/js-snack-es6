console.log('JS OK!')

// # Snack 1
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

// BONUS: Stampare in pagina oltre che in console!

/* const bikes = [
    {
        name: 'Bici da città',
        weight: 30,
    },
    {
        name: 'Mountain Bike',
        weight: 15,
    },
    {
        name: 'Bici da Corsa',
        weight: 43,
    },
    {
        name: 'Fat Bike',
        weight: 70,
    },
    {
        name: 'Bici Ibrida',
        weight: 53,
    },
    {
        name: 'E-Bike',
        weight: 35,
    },
];

let minWeight = bikes[0].weight;
let result = '';

for (let item in bikes) {

    const {name, weight} = bikes[item];

    if (weight < minWeight) {
        minWeight = bikes[item];
    }
} 

console.log(`La bici che pesa di meno è la ${minWeight.name}`); */

// # Snack 2
/* 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array,
 i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// BONUS: Stampare in pagina oltre che in console!

// ! Function

/* const randomNumber = (min) => {
    const number = Math.floor(Math.random() * (min + 1));
    return number;
}

const display = document.getElementById('display');

const teams = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0,
    },
];

const result = []

for (let i = 0; i < teams.length; i++) {
    
    const name = teams[i].name;
    
    teams[i].points += randomNumber(100);
    teams[i].fouls += randomNumber(100);
    
    fouls = teams[i].fouls;
    result.push({name, fouls})
    
}

console.log(result); */

// # SNACK 3

/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

const names = ['Robert', 'Cristiano', 'Sam', 'Matt', 'Harry', 'Christian', 'Joe', 'Peter', 'Gianluca', 'Alex']

let newNewArray;

const newArray = names.filter((name, i) => {

    if (i >= 3 && i <= 8) {
        return true;
    }
    });

console.log(newArray);



// # SNACK 4

/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

// ! BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
// ! ES.: (marco de iulio  => Marco De Iulio)

/* const students = [
    { name: 'robert de niro', id: 197, grades: 126 },
    { name: 'cristiano ronaldo', id: 131, grades: 67 },
    { name: 'sam fisher', id: 36, grades: 168 },
    { name: 'matt damon', id: 83, grades: 44 },
    { name: 'harry potter', id: 51, grades: 154 },
    { name: 'christian de sica', id: 312, grades: 5 },
];

const allName = [];

students.forEach((student) => {
    const firstLetter = student.name.charAt().toUpperCase();
    const otherLetters = student.name.substring(1).toLowerCase();
    const name = firstLetter + otherLetters;
    allName.push({name});
})

console.log(allName);

const getGrades = students.filter((student) => {
    if (student.grades < 70) {
        return true;
    }
})

console.log(grades)

const getIdGrades = students.filter((student) => {
    if (student.grades < 70 && student.id > 120) {
        return true;
    }
})

console.log(idGrades) */