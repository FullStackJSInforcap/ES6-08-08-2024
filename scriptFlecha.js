/* Arrow Function - Función Flecha */
const funcionFlecha = () => {
    
}


const arreglo = ['cadena uno', 'cadena dos', 'cadena tres'];
arreglo.push('cadena cuatro');

arreglo.forEach(function(cadena){
    console.log(cadena);
});

arreglo.forEach(cadena => console.log(cadena));

// dentro de un arreglo filtrar los números positivos
const arregloNumeros = [1, 0, -3, -5, 6];

const positivos = arregloNumeros.filter(function(numero){
    return numero > 0;
});
console.log(positivos);

const positivosFlecha = arregloNumeros.filter(numero => numero > 0);
console.log(positivosFlecha);

estoNoDeberia();

function estoNoDeberia(){
    console.log('Esto no debería ejecutarse');
}

const estoEsLoCorrecto = () => {
    console.log('Esto si se ejecutará');    
}

estoEsLoCorrecto();


const objeto = {
    nombre: 'jugando',
    noDeberiaSerFlecha: function() {
        console.log(this.nombre);
    }
}

objeto.noDeberiaSerFlecha();
