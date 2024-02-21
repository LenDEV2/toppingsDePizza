const enlace = document.getElementsByTagName('a');

console.log(enlace[0].getAttribute('href'));
/*
Quita el atributo href
console.log(enlace[0].removeAttribute('href'));
*/

/* Actualizar el tributo href */
console.log(enlace[0].setAttribute('href', 'https://www.youtube.com'))
