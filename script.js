'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const numm = 50;

// if (num < 49) {
//     console.log('Eroor!');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Eroor!');

switch (numm) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}