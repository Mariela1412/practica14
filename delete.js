const fs = require('fs');
const fileName = 'vehiculos.json';

function deleteVehicle(){
fs.readFile(fileName, 'utf8', (err, content) => {
    if(err){
        console.error("Error al leer el archivo JSON.");
        return;
    }
    try {
        const vehiculos = JSON.parse(content);

        //Eliminar el id 2
        const idEliminar = 2;
        //Buscamos
        const indice = vehiculos.findIndex(vehiculos => vehiculos.id === idEliminar);
        vehiculos.splice(indice, 1);

        //Guardar los cambios en el archivo
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) => {
            if(err){
                console.error("Error al escribir en el archivo JSON.");
            } else {
                console.log("Vehiculo eliminado con exito.");
            }
        });
    }catch(err){
        console.error("Error al parsear el archivo JSON.");
    }
})
}

module.exports = deleteVehicle;