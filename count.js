const fs = require('fs');
const fileName = 'vehiculos.json';

function contar(){ 
fs.readFile(fileName,'utf8', (err, content) => {
    if(err){
        console.error("Error al leer el archivo JSON.");
        return;
    }
    const vehiculos = JSON.parse(content);
    console.log(`La flota de vehiculos es de: ${vehiculos.length}`);
})
}

module.exports = contar;