// Definición de variables
let nombre = "";
let opcion = "";
let dias = 1;
let pago = "";
let resumen = "";
let repetir = "N"

// Definición de datos maestros
let sesion = []

class Persona {
    constructor(nombre, opcion, dias, pago) {
        this.nombre = nombre
        this.opcion = opcion
        this.dias = dias
        this.pago = pago
    }
}

let huespedes = []

// Definición de funciones
function calcular(precio, dias) {
    return precio * dias;
}

function guardarPersona(sesion) {
    huespedes.push(new Persona(sesion[0], sesion[1], sesion[2], sesion[3]))
}

// Definición de datos

const alojamientos = [
    {
        opcion: "Hostel",
        precio: 5000
    },
    {
        opcion: "Habitacion privada",
        precio: 8000
    },
    {
        opcion: "Cabaña",
        precio: 15000
    }
]

// Inicio del programa
do {
    sesion = []
    do {
        nombre = prompt("Ingrese su nombre");
        if (nombre == "") {
            alert("Ingrese un nombre de al menos unas letras...")
        }
    } while (nombre == "");

    alert("Bienvenido a Hostel Lacar" + " " + nombre)
    sesion.push(nombre)

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
            opcion = prompt("Nuestras opciones por noche son:\n \
            (Favor de ingresar el número)\n \
            1. hostel $5000\n \
            2. Habitacion privada $8000\n \
            3. Cabaña $15000");
            if (opcion != "1" && opcion != "2" && opcion != "3") {
                alert("Elija la opción correcta!");
            }
        } while (opcion != "1" && opcion != "2" && opcion != "3");

        sesion.push(opcion)

        do {
            dias = parseInt(prompt("¿Cuantos días desea reservar?"));
            if (dias == null || isNaN(dias)) {
                alert("Por favor ingrese la cantidad de días correcta.")
            }
        } while (dias == null || isNaN(dias));

        sesion.push(dias)

        do {
            pago = prompt(`El total a pagar es $${calcular(alojamientos[parseInt(opcion) - 1].precio, dias)}\n\n¿Desea abonar en crédito o débito?\nd) DÉBITO - c) CRÉDITO`)
        } while (pago.toLowerCase() != "d" && pago.toLowerCase() != "c")

        sesion.push(pago.toUpperCase())

        alert("Muchas gracias por su visita!");

    }

    else {
        resumen = ""
        for (let n = 0; n < alojamientos.length; n++) {
            resumen += "\n" + alojamientos[n].opcion + " - " + alojamientos[n].precio
        }
        alert(`Muchas gracias por su visita.\nTe dejamos los precios que tenemos para tu próxima visita:
        ${resumen}
        `)
    }
    guardarPersona(sesion)
    repetir = prompt("¿Hay otra persona para reservar?\n\nColoque S o N.\nS = SI  --- N = NO")
} while (repetir.toUpperCase() == "S")

resumen = ""
for (let index = 0; index < huespedes.length; index++) {
    resumen += "\nNombre: " + huespedes[index].nombre +
        "\nOpción: " + alojamientos[parseInt(huespedes[index].opcion) - 1].opcion +
        "\nCantidad de días: " + huespedes[index].dias +
        "\nPago en: " + (huespedes[index].pago == 'D' ? "Débito" : "Crédito\n\n")
}

alert(` \
===========================================\n \
RESUMEN DE LOS QUE HAN RESERVADO    \n \
===========================================\n \
${resumen}
===========================================\n \
`)

resumen = ""
const resultado = huespedes.filter((lista) => lista.pago == "D")
if (resultado.length > 0) {
    for (const lista of resultado) resumen += "- " + lista.nombre + "\n"
}

alert(` \
===========================================\n \
ABONARON en DÉBITO    \n \
===========================================\n \
${resumen}
===========================================\n \
`)