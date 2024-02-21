const listaDeToppings = document.getElementById('lista-toppings');

/* Padres */
console.log(listaDeToppings.parentElement); /* Se pueden encadenar los .parenElement // HTML */
console.log(listaDeToppings.parentNode); /* Se pueden encadenar los .parenElement // Nodo */

/* Hijos */
/* Mostrar todos los hijos */
console.log(listaDeToppings.children);

/* Primer elemento hijo */
console.log(listaDeToppings.firstChild); /* Nodo */
console.log(listaDeToppings.children[0]); /* HTML */
console.log(listaDeToppings.firstElementChild); /* HTML */

/* Ultimo elemento hijo */
console.log(listaDeToppings.lastChild); /* Nodo */
console.log(listaDeToppings.children[3]); /* HTML */
console.log(listaDeToppings.lastElementChild); /* HTML */

/* Hermanos */
/* Anterior hermano */
console.log(listaDeToppings.previousElementSibling); /* HTML */
console.log(listaDeToppings.previousSibling); /* Nodo */

/* Proximo hermano */
const elementoTitulo = document.getElementById('titulo');
console.log(elementoTitulo.nextElementSibling); /* HTML */
console.log(elementoTitulo.nextSibling); /* Nodo */
