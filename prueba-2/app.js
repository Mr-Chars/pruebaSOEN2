'use strict'
const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

function process() {
    to_do.forEach(element => {
        console.log(element);
        var doc = createElement('li');
        doc.innerHTML = '<li>' + element + '</li>'
        document.getElementById('listNotOrdered').appendChild(doc)
    });
}
process();
// document.getElementById('listNotOrdered').