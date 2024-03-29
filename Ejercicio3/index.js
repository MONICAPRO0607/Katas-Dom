// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHere = document.querySelector('[data-function="printHere"]');
if (printHere) {
    const ul = document.createElement('ul');

    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        ul.appendChild(li);
    });

    printHere.appendChild(ul);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
countries2.forEach(country => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');

  h4.textContent = country.title;
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const removeLastButton = document.createElement('button');
removeLastButton.textContent = 'Eliminar Último';

removeLastButton.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    const lastDiv = divs[divs.length - 1];
    if (lastDiv) {
        lastDiv.remove();
    }
});

document.body.appendChild(removeLastButton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
countries2.forEach((country, i) => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const removeButton = document.createElement('button');

  h4.textContent = country.title;
  img.src = country.imgUrl;
  removeButton.textContent = 'Eliminar';

  removeButton.addEventListener('click', () => {
      div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(removeButton);

  document.body.appendChild(div);
});

