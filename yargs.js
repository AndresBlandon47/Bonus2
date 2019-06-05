const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const promedio = {
    demand: false,
    alias: 'P'
}

const creacion ={
    nombre,
    matematicas,
    ingles,
    programacion,
    promedio
}

const mostrarnom = {
    nombre
}
const argv= require('yargs')
            .command('crear','Crear un estudiante en mi BD',creacion)
            .command('mostrar','Mostrar los estudiantes enlistados')
            .command('mostrarEstProm','Muestra el promedio de un estudiante en especifico',mostrarnom)
            .command('mostrarProm','Muestra los estudiantes que tienen un promedio superior a 3')
            .command('mostrarEst','Muestra la nota de un estudiante en especifico',mostrarnom)
            .command('mostrarMat','Mostrar los estudiantes que ganaron la materia de matematicas')
            .argv;

module.exports={
    argv
};