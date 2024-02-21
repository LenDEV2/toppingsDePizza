const v1 = document.getElementById('lista-toppings');

/*
innerText retorna el texto como cualquier otro, no preserva identaciones, espacios, tabulaciones, etc. Que se hayan escrito en el HTML
*/
console.log('> innerText');
console.log(v1.innerText);

/*
textContent retorna el texto tal como se escribió en el HTML. O sea, con tabulaciones, espacios, identaciones, etc.
*/
console.log('> textContent');
console.log(v1.textContent);

/*
innerHTML retorna la estructura HTML interna de ese elemento como una cadena de caracteres
*/
console.log('> innerHTML');
console.log(v1.innerHTML);
