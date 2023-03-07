let usuario = ``;
let intentos = 0;
let intentosMaximos = 3;
let precioWifi = 29
let precioMovil = 12
let resultado = sumar(precioMovil, precioWifi)

function sumar(a, b) {
    return a + b;
}

while (intentos < intentosMaximos) {
    usuario = prompt(`ingrese su usuario`)
    const contraseña = parseInt(prompt(`Ingrese su contraseña`));

    if (usuario === `Admin` && contraseña === 123) {
        alert(`Bienvenido`)
        break;
    } else {
        alert(`Usuario o Contraseña incorrectos`);
        intentos++
    }
}

if (intentos === intentosMaximos) {
    alert(`Ha superado el limite de intentos`);
} else {
    if (usuario === `Admin`) {
        const nombre = prompt(`Ingrese su nombre`);
        switch (nombre) {
            case `Agustin`:
                alert(`Bienvenido Agustin, que deseas contratar`);
                break;

            case `Florencia`:
                alert(`Bienvenida Florencia, que deseas contratar`);
                break;

            case `Juan`:
                alert(`Bienvenido Juan, que deseas contratar`);
                break;

            default:
                alert(`Bienvenido/a ${nombre}, que desea contratar`)
        }
    }
}



let producto = prompt(`Ingrese lo que desea contratar para recibir informacion`);

if (producto === `wifi`) {
    alert(`El precio es ${precioWifi}`)
} else if (producto === `movil`) {
    alert(`El precio es ${precioMovil}`)
} else if (producto === `wifi y movil`) {
    alert(`El precio total es ${resultado}`)
} else {
    alert(`gracias por visitarnos`)
}

let pregunta = prompt(`desea comprar un movil?`);

class Movil {
    constructor(nombre, modelo, precio) {
        this.nombre = nombre
        this.modelo = modelo
        this.precio = precio
    }
}

const movil1 = new Movil(`Samsung`, `s22`, 250);
const movil2 = new Movil(`Iphone`, `14plus`, 350);
const movil3 = new Movil(`Motorola`, `Edge 30 ultra`, 200);

class Accesorio {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

const cascos = new Accesorio(`Cascos Sony`, 12);
const cargador = new Accesorio(`Cargador rápido`, 25);

if (pregunta === `si`) {
    console.log(movil1, movil2, movil3, cascos, cargador);
} else {
    alert(`gracias por visitarnos`);
}

const carrito = [];

let dispositivo = "";

dispositivo = prompt(`Ingrese dispositivo`);

while (dispositivo !== `ninguno`) {
    if (dispositivo === `Samsung`) {
        carrito.push(movil1);
        console.log(carrito);
        break;
    } else if (dispositivo === `Iphone`){
        carrito.push(movil2);
        console.log(carrito);
        break;
    } else if (dispositivo === `Motorola`) {
        carrito.push(movil3)
        console.log(carrito);
        break;
    }else{
        alert(`No agregaste nada al carrito`);
    }
    dispositivo = prompt(`ingrese dispositivo`)
    }

let array = prompt(`Quieres ver el carrito?`)

if( array === `si`){
    carrito.forEach( carro => alert(JSON.stringify(carro)))
}else{
    alert(`haca click en comprar para terminar la operacion`)
}