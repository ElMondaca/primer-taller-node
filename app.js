const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
//Cuando se elimina o descarga el repositorio sin la carpeta node_modules, ejecutar npm install reinstalará las dependencias



console.clear();
// console.log(argv);
// console.log('base yargs: ', argv.base);
// console.log('limite yargs:', argv.limite);


//Se asigna el valor escrito en consola a constantes para creación de base y limite del multiplicador
//Cuando se configura el Yargs.options, se debe digitar --'identificador' para que reciba su valor
const base = argv.b;
const limite = argv.l;

//Se usa procces.argv para leer lo que se escribe por consola (comando node, comando app.js, parametro --base=5)
// const [, , arg3] = process.argv;
// const [ , base] = arg3.split('=');
//Se le puede asignar un valor a la variable para evitar el "undefined"

crearArchivo(base, limite, argv.li)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.random))
    .catch(err => console.log(err));

/**NPM UPDATE actualiza las dependencias instaladas en el proyecto
 * pero puede generar conflictos
 * se usa npm install nombre-paquete@1.0.0 para instalar la version 1.0.0 de una dependencia
 * Cuando se quiere instalar una dependencia solo para desarrollo se usa npm install paquete --save-dev
 * npm uninstall nombre-paquete para eliminar una dependencia del proyecto
 */