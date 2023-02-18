function sumar(a, b) {
    return a + b;
}

let usuario = ``;
let intentos = 0;
let intentosMaximos = 3;
let precioWifi = 29
let precioMovil = 12
let resultado = sumar(precioMovil, precioWifi)

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
                alert(`Bienvenido Jgustin, que deseas contratar`);
                break;

            default:
                alert(`Bienvenido/a ${nombre}, que desea contratar`)
        }
    }
}

producto = prompt(`Ingrese lo que desea contratar para resivir informacion`);

if (producto === `wifi`) {
    alert(`El precio es ${precioWifi}`)
} else if (producto === `movil`) {
    alert(`El precio es ${precioMovil}`)
} else if (producto === `wifi y movil`) {
    alert(`El precio total es ${resultado}`)
}else{
    alert(`gracias por visitarnos`)
}