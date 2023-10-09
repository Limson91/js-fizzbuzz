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

for (let i = 0; i < 100; i++) {
    //stampa i numeri da 1 a 100, creando una variabile n = i + 1;
    const n = i + 1;

    //salvo variabili dei moduli 3 e 5
    const mod3 = n % 3;
    const mod5 = n % 5;

    //Se i moduli 3 e moduli 5 sono uguali a 0, allora FIZZBUZZ!
    if (mod3 === 0 && mod5 === 0) {
        console.log('FIZZBUZZ!!');
    } else if (mod3 === 0) {
        console.log('FIZZ!')
    } else if (mod5 === 0) {
        console.log('BUZZ!')
    } else {
        console.log(n)
    }
}

