const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

for (let i = 0; i < 100; i++) {
    let n = i + 1;

    const modul3 = n % 3;
    const modul5 = n % 5;

    let message = n;
    let className = 'box';

    if (modul3 === 0 && modul5 === 0) {
        message = 'FIZZBUZZ!';
        className = 'fizzbuzz';
    } else if (modul3 === 0) {
        message = 'FIZZ!';
        className = 'fizz';
    } else if (modul5 === 0) {
        message = 'BUZZ!';
        className = 'buzz';
    }

    console.log(message);

    const boxDOMElement = document.createElement('div');
    boxDOMElement.classList.add(className);
    boxDOMElement.innerHTML = message;

    gridDOMElement.append(boxDOMElement);
}