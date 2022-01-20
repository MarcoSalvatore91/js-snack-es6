console.log('JS OK!')

// Snack 1
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

// Snack 2
/* 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array,
 i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// BONUS: Stampare in pagina oltre che in console!

// # Function

/* const randomNumber = (min) => {
    const number = Math.floor(Math.random() * (min + 1));
    console.log(number);
    return number;
}

let points = 0;
let fouls = 0;

const team = [
    {
        name: 'Inter',
        points,
        fouls,
    },
    {
        name: 'Milan',
        points,
        fouls,
    },
    {
        name: 'Napoli',
        points,
        fouls,
    },
    {
        name: 'Atalanta',
        points,
        fouls,
    },
    {
        name: 'Juventus',
        points,
        fouls,
    },
    {
        name: 'Lazio',
        points,
        fouls,
    },
];

for (let i = 0; i < team.length; i++) {
    const randomPoints = team[i].points;
    randomPoints.randomNumber(20);
    console.log(randomPoints)
} */

/* const number = randomNumber(20); */

