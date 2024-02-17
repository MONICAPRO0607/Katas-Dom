// Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

const elementRemove = document.querySelector('.fn-remove-me');

if (elementRemove) {
  elementRemove.remove();
}