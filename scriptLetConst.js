/* Var - Let Const */
let cadena = 'Hola';
cadena = "adios";
console.log(cadena);

function ambienteUno(){
    let localAnbienteUno = 'Hola ambiente uno';
    console.log(localAnbienteUno);
    console.log(cadena);
    for(let i = 0 ; i < 10 ; i++){
        console.log(i);
    }
}

ambienteUno();

/* const constante = prompt('Siempre tendrá el mismo valor?');
console.log(constante); */
const jugando = 'jugando';
function ambienteDos(){
    const jugando = 'Hola';
    console.log(jugando);
    
}

ambienteDos();
console.log(jugando);


const persona = {
    rut: '11111111-1',
    nombre: 'Marcos Ojeda'
}

persona.nombre = 'Adrián'

const parrafoUno = document.querySelector('#parrafoUno');
parrafoUno.innerHTML = 'Cambiado desde JS aunque sea una constante';


/* Módulos */
/* Interpolación */
/* Parámetros por defecto */
/* Clases */