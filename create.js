//Importamos el modulo fs para manipular archivos en Node.js
const fs = require('fs');
//Nombramos el archivo
const fileName = 'vehiculos.json';
//Contenido del archivo
const vehiculos = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020 },
    { id: 2, marca: 'Honda', modelo: 'Civic', año: 2019 },
    { id: 3, marca: 'Ford', modelo: 'Explorer', año: 2021 }
];

//Crear el archivo JSON con los tres vehiculos
function create(){
fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) =>{
    if(err){
        console.error("Error al crear el archivo JSON.");
    }else{
        console.log("Archivo JSON creado con exito.");
    }
})
}

module.exports = create;