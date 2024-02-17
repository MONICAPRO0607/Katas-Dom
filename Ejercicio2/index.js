// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement("div");
const p = document.createElement("p");
divConP.appendChild(p);
document.body.appendChild(divConP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const divConPLoop = document.createElement("div");
for (let i = 0; i <6; i++) {
  const p = document.createElement("p");
  p.textContent = 'Párrafo ' + i;
  divConPLoop.appendChild(p);
}
document.body.appendChild(divConPLoop);

// 1.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.
const pDinamico = document.createElement("p");
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaApps = document.createElement('ul');
document.body.appendChild(listaApps);

apps.forEach(function(app) {
  const li = document.createElement('li');
  li.textContent = app;
  listaApps.appendChild(li);
});

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodosToRemove = document.querySelectorAll('.fn-remove-me')
nodosToRemove.forEach(function(nodo) {
  nodo.parentNode.removeChild(nodo);
})

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div');
const pVoyEnMedio = document.createElement('p');
pVoyEnMedio.textContent = 'Voy en medio!';
divs[1].insertAdjacentElement('afterend', pVoyEnMedio);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const divsInsertHere = document.querySelectorAll('.fn-insert-here');
divsInsertHere.forEach(function(div) {
const pVoyDentro = document.createElement('p');
pVoyDentro.textContent = 'Voy dentro!';
div.appendChild(pVoyDentro);
});