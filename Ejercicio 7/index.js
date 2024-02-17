// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const printHere = document.querySelector('div[data-function="printHere"]');

const ul =  document.createElement('ul');

places.forEach(place => {
  const liElement = document.createElement('li');
  liElement.textContent = place;
  ul.appendChild(liElement);
});

printHere.appendChild(ul);
