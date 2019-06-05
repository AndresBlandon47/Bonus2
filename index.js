const {argv} = require('./yargs');
const funciones = require('./Funciones');

let comando= argv._[0];
switch(comando){
    case 'crear':
        funciones.crear(argv);
        break
    case 'mostrar':
        funciones.mostrar();
        break
    case 'mostrarEst':
        funciones.mostrarest(argv.nombre);
        break
    case 'mostrarMat':
        funciones.mostrarmat();
        break
    case 'mostrarEstProm':
        funciones.mostrarEstProm(argv.nombre);
        break
    case 'mostrarProm':
        funciones.mostrarProm();
        break       
    default:
        console.log('No existe ese comando');
        break
}

