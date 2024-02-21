const listaDeToppings = document.getElementById('lista-toppings'); /* Seleecionar elemento de referencia para agregar el lelemento nuevo */
const toppingNuevo = document.createElement('li');

/* Agregar propiedades y clases */
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso extra';

/* Añadir en el HTML */
listaDeToppings.append(toppingNuevo);
