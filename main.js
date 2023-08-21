// DECLARACION DE VARIABLES
let coleccionNumeros, devEmail, numeros, suma, promedio, numsArr, numeroFloat;

//ASIGNACION DE VARIABLES
coleccionNumeros = document.getElementById("coleccion_numeros")
devEmail = document.getElementById("dev-email")

// ASIGNACION DE LISTENER A LOS ELEMENTOS
coleccionNumeros.addEventListener("click", clickearColeccion)

function clickearColeccion() {

    let objeto = document.querySelectorAll("#simulacion input");

    numeros = objeto[0];
    numeros = numeros.value;
    console.log(numeros);
    console.log(typeof numeros);

    // Se convierte el string a array y se verifica su contenido y su tipo de dato.
    numerosArray = numeros.split(",")
    console.log(numerosArray);
    console.log(typeof numerosArray);

    numsArr = [];

    for (let i in numerosArray) {
        numeroFloat = parseFloat(numerosArray[i]);
        numsArr.push(numeroFloat);
    }

    console.log(numsArr);

    // Calculo del promedio del array
    suma = 0;
    for (let i in numsArr) {
        suma += numsArr[i];
    }

    console.log(suma);
    console.log(numsArr.length);

    promedio = (suma)/(numsArr.length);

    promedio = promedio.toString();

    alert('El promedio de la colección de números: ' + numsArr + " es : " + promedio);

    // Calculando la Mediana
    function calcularMediana(arregloNumeros) {
        const arrayOrdenado = arregloNumeros.slice().sort((a, b) => a - b);
        const elementoMedio = Math.floor(arrayOrdenado.length / 2);

        if (arrayOrdenado.length % 2 === 0) {
            const mediana = (arrayOrdenado[elementoMedio - 1] + arrayOrdenado[elementoMedio]) / 2;
            return mediana;
        } else {
            return arrayOrdenado[elementoMedio];
        }
    }

    numsArrMediana = calcularMediana(numsArr);
    numsArrMedianaString = numsArrMediana.toString();
    numsArrString = numsArr.join(",");

    alert('La mediana de la colección de números: ', + numsArrString + " es: " + numsArrMedianaString)

}

devEmail.addEventListener('copy', function () {
    alert('¡Haz Copiado El Email! ¿Qué Esperas para Contactarnos y Desarrollar tú Proyecto?');
    console.log('Texto con id="dev-email" ha sido copiado');
});


devEmail.addEventListener('click', function () {
    alert('¡Haz Clickeado El Email! ¿Qué Esperas para Contactarnos y Desarrollar tú Proyecto?');
    console.log('Texto con id="dev-email" ha sido clickeado');
});