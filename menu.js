const readline = require('readline');

//Llamamos las funciones
const create = require('./create');
const AddVehicle = require('./add');
const read = require('./read');
const modify = require('./modify');
const contar = require('./count');
const deleteVehicle = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n---Menu---')
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar vehiculo');
    console.log('4. Modificar vehiculo');
    console.log('5. Eliminar vehiculo');
    console.log('6. Ver cuantos vehiculos hay en la flota')
    console.log('7. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case '1':
            create();//Llamamos a la funcion crear
            break;
        case '2':
            read();//Llamamos a la funcion leer
            break;
        case '3':
            AddVehicle();//Llamamos a la funcion agregar
            break;
        case '4':
            modify();//Llamamos a la funcion modificar
            break;
        case '5':
            deleteVehicle();//Llamamos a la funcion eliminar
            break;
        case '6':
            contar();
            break;
        case '7':
            console.log("Saliendo del programa.");
            rl.close();//Cierra la interfaz de lectura
            return;
        default:
            console.log("Opción no valida. Intente de nuevo.");
            break;
    }
    //Despues de ejecutar una opcion, mostrar el menu nuevamente
    setTimeout(promptMenu, 1000); //Usar setTimeout para dar tiempo a la accion que se ejecute
}

function promptMenu(){
    showMenu();
    rl.question('Seleccion una opcion: ', handleMenuOption);
}

//Inicia el proceso mostrando el menu
promptMenu();