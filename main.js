// Definir variables
/* 

1. ingrese su nombre para que luego te de un msj de bienvenida



2. desea realizar una reserva? Si/no
(si es que no, msj gracias por visitarnos)
si la opción es si un listado a continuación

3. Hostel con el precio 5000, habitación privada con el precio 8000 y cabaña con el precio 15000. Para que lo pueda ver

4. A continuación elegir una de esas 3 opciones (si se escribe algo que no está, opción incorrecta y vuelve a preguntar)
5. Una vez elegida la opción una pregunta cuantos días quiere reservar
5. Y luego el final que diga el total a pagar y listo (precio * cantidad de dias)

*/

// Definición de variables
let nombre = "";
let opciones = "";
let precio = 0;
let dias;


// Definición de funciones

function calcular(precio,dias) {
    return precio * dias;
}

// Inicio del programa

do {
    nombre = prompt("Ingrese su nombre");
    if (nombre == "") {
        alert("Ingrese un nombre de al menos unas letras...")
    }
} while (nombre == "");

alert("Bienvenido a Hostel Lacar" + " " + nombre)

let reserva = prompt("¿Desea realizar una reserva? Responda:\n \
- Si\n \
- No");
while (reserva.toLowerCase() != "si" && reserva.toLowerCase() != "no") {
    alert("Por favor ingresa si o no")
    reserva = prompt("¿Desea realizar una reserva? Responda:\n \
    - Si\n \
    - No");
}

if (reserva.toLowerCase() == "si") {
    do {
        opciones = prompt("Nuestras opciones por noche son:\n \
        (Favor de ingresar el número)\n \
        1. hostel $5000\n \
        2. Habitacion privada $8000\n \
        3. Cabaña $15000");
        if (opciones != "1" && opciones != "2" && opciones != "3") {
            alert("Elija la opción correcta!");
        }
    } while (opciones != "1" && opciones != "2" && opciones != "3");

    // Cuando agrego todo lo de abajo hay algo que esta mal porque no toma nada,
    // Si borro lo de abajo, anda y llega hasta Elija una opcion

    switch (opciones) {
        case "1": precio = 5000; break;
        case "2": precio = 8000; break;
        case "3": precio = 15000; break;
    }


    do {
        dias = parseInt(prompt("¿Cuantos días desea reservar?"));
        if (dias == null || isNaN(dias)) {
            alert("Por favor ingrese la cantidad de días correcta.")
        }
    } while (dias == null || isNaN(dias));

    alert(`El total a pagar es $${calcular(precio,dias)}\n\nMuchas gracias por su visita!`);

}

else {
    alert("Muchas gracias por su visita");
}
