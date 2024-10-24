import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 

const archivoOriginal = './data/superheroes.txt'; 
const archivoNuevos = './data/agregarSuperheroes.txt'; 

agregarSuperheroes (archivoOriginal, archivoNuevos); 

const superheroes = leerSuperheroes (archivoOriginal); 
console.log('Superhéroes ordenados:'); 
console.log(superheroes);