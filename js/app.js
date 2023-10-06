console.log('prova loop');

//let i = 0 è il punto di partenza;
//i < 10 è il punto di arrivo (in questo caso numeri minori di 10);
//i++ o i-- sono incrementali o decrementali.

//SCHEMA DI FUNZIONAMENTO
// 1. assegnazione della variabile i (i=0;);
// 2. verifica se i è minore o maggiore di un valore (i<10); 
// 3. esecuzione codice DENTRO le parentesi graffe;
// 4. incremento o decremento (i++ o i--);
// 5. esecuzione codice DENTRO le parentesi graffe;
// 6. verifica se i è ancora minore o maggiore del valore impostato.
// 7. esecuzione codice finché la condizione è vera. Non appena i diventa maggiore di 10, il ciclo for si ferma.

// NB non manipolare i++ o i-- dentro il blocco for!!!!

//Conto da 1 a 100
for (let i = 0; i < 100; i++) { 
    const n = i + 1;
    console.log(n)

    const multipliTre = n % 3;
    const multipliCinque = n % 5;

    if (multipliTre === 0) {
        console.log('Fizz!')
    }

    if (multipliCinque === 0) {
        console.log('Buzz!')
    }
}
console.log('fine ciclo 2')


//stampare solamente in numeri multipli di 3;
// for (let i = 0; i < 100; i++) {
//     let n = i + 1;

//     const resto = n % 7
//     // console.log(n, resto);
//     //un numero multiplo di 3 è un numero che ha resto di zero.
    
//     if (resto === 0) {
//         console.log(n, resto)
//     }
// }