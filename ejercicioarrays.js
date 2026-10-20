//1. Crea el siguiente array:

let datos = [ 
{nombre: "Nacho", telefono: "966112233", edad: 40}, 
{nombre: "Ana", telefono: "911223344", edad: 35}, 
{nombre: "Mario", telefono: "611998877", edad: 15}, 
{nombre: "Laura", telefono: "633663366", edad: 17} 
];

//2. Añade al final dos elementos más:

datos.push({nombre: "Pedro", telefono: "611944444", edad: 25});
datos.push({nombre: "Julia", telefono: "633232323", edad: 37});

//3. Comprueba con console.log(datos) que se han añadido. 

console.log("-- Datos  --");

console.log(datos);

//4. Ordena el vector por edad, comprueba el resultado. 

console.log("-- Ordenados por edad  --");

datos.sort((a, b) => a.edad - b.edad);
console.log(datos);

//5. Ordena el vector por nombre, comprueba el resultado.

console.log("-- Ordenados por nombre  --");

datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(datos);

//6.  Crea y muestra un nuevo vector que contenga sólo mayores de 30 años.
console.log("-- Mayores de 30 años  --");

let mayoresDe30 = datos.filter(persona => persona.edad > 30);
console.log(mayoresDe30);