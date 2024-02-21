const listaDeToppings = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li'); /* .createElement() */

toppingNuevo.classList.add('topping', 'fondo-marron'); /* .add() */
toppingNuevo.innerText = 'Queso extra';

listaDeToppings.append(toppingNuevo); /* .append() */

/*
.appendChild() funciona con elementos HTML y es equivalente a .append(en este caso)
.appendChild() = HTML
.append() = No HTML. Es texto sin formato HTML
*/

/* Eliminar con .remove() */
toppingNuevo.remove(); /* .remove() */
listaDeToppings.remove();

/* El o los elementos se habran eliminado */
