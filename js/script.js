console.log('JS OK!')

// Snack 1
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

// BONUS: Stampare in pagina oltre che in console!

/* const bike = [
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

for (let key in bike) {
    const {name, weight} = bike[key];
    console.log(`La bici che pesa di meno è ${name} ${weight}`)
} */

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

const randomNumber = (min) => {
    const number = Math.floor(Math.random() * (min + 1));
    console.log(number);
    return number;
}

const team = [
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

const number = randomNumber(20);

