const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante)=>{
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion,
        promedio: prom(estudiante)
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if(duplicado)
        console.log('Paila ya existe otro estudiante con ese nombre. ');
    else{
        
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }
}
const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');
    }catch(err){
        listaEstudiantes = [];
    }
}
const guardar = ()=> {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err)=>{
        if (err) throw (err);
        console.log('Archivo creado con éxito');
    });
}
const mostrar = () => {
    listar();
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('Tiene las siguientes notas ');
        console.log('Matematicas: '+ estudiante.matematicas);
        console.log('Ingles: '+ estudiante.ingles);
        console.log('Programación: '+ estudiante.programacion);
        console.log('');
    });
}
const mostrarest = (nom) =>{
    listar();
    let bus = listaEstudiantes.find(busqueda => busqueda.nombre == nom);
    
    if(bus){
        console.log(bus.nombre);
        console.log('Tiene las siguientes notas ');
        console.log('Matematicas: '+ bus.matematicas);
        console.log('Ingles: '+ bus.ingles);
        console.log('Programación: '+ bus.programacion);
        console.log('');
    }
    else
        console.log('No existe ese estudiante');
}

const mostrarmat = () =>{
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if(!(ganan.length == 0)){
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('Obtuvo la siguiente nota en:');
            console.log('Matematicas: '+ estudiante.matematicas);
            console.log('');
        });
    }
    else
        console.log('Todos tienen perdido matematicas');
}

const prom=(array)=>{
    let prome = ((array.matematicas+array.ingles+array.programacion)/3);
    
    return prome;
}
const mostrarEstProm = (nom) =>{
    listar();
    let bus = listaEstudiantes.find(busqueda => busqueda.nombre == nom);

    if(bus){
        console.log(bus.nombre);
        console.log('Tiene el siguiente promedio');
        console.log(bus.promedio);
    }
    else
        console.log('No existe ese estudiante');
}

const mostrarProm = () =>{
    listar();
    let ganan = listaEstudiantes.filter(prom => prom.promedio >= 3);
    if(!(ganan.length == 0)){
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('Tiene un promedio suficiente de:');
            console.log(estudiante.promedio);
            console.log('');
        });
    }
    else
        console.log('Todos tienen perdido matematicas');
}

module.exports={
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarEstProm,
    mostrarProm
};