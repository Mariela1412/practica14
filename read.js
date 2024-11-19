const fs = require('fs');
const fileName = 'vehiculos.json';

function read(){
fs.readFile(fileName, 'utf8', (err, content) =>{
    if(err){
        console.error("Error al leer el archivo JSON.");
        return;
    }
    try{
        const objectJSON = JSON.parse(content);
        console.log("Flota de vehiculos: ", objectJSON);       
    }catch(err){
        console.error("Error al parsear el JSON.");
    };
});
}

module.exports = read;