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

while (producto != `movil`, `wifi`, `wifi y movil`) {
  if (producto === `wifi`) {
    alert(`El precio es ${precioWifi}`)
    break;
  } else if (producto === `movil`) {
    alert(`El precio es ${precioMovil}`);
    break;
  } else if (producto === `wifi y movil`) {
    alert(`El precio total es ${resultado}`)
    break;
  } else {
    alert(`respuesta no valida`)
  }
  producto = prompt(`Ingrese lo que desea contratar para recibir informacion`);
}


function mostrarCarrito() {
  const carritoDiv = document.getElementById('carrito');
  let carritoHTML = '<ul>';

  carrito.forEach((item) => {
    carritoHTML += `<li>${item.nombre} - Precio: ${item.precio}</li>`;
  });

  carritoHTML += '</ul>';

  carritoDiv.innerHTML = carritoHTML;
}

class Movil {
  constructor(nombre, modelo, precio) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
  }
}

const movil1 = new Movil(`Samsung`, `s22`, 250);
const movil2 = new Movil(`Iphone`, `14plus`, 350);
const movil3 = new Movil(`Motorola`, `Edge 30 ultra`, 200);

class Accesorio {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const cascos = new Accesorio(`Cascos Sony`, 12);

const cargador = new Accesorio(`Cargador rápido`, 25);

let pregunta = prompt(`¿Deseas agregar un móvil o accesorios al carrito?`);

const carrito = [];

while (pregunta !== `esc`) {
  switch (pregunta) {
    case `movil`:
      const movilesHTML = `
      <ul>
        <li>${movil1.nombre} ${movil1.modelo} - ${movil1.precio}€</li>
        <li>${movil2.nombre} ${movil2.modelo} - ${movil2.precio}€</li>
        <li>${movil3.nombre} ${movil3.modelo} - ${movil3.precio}€</li>
      </ul>
    `;
    document.getElementById("telefonos").innerHTML = movilesHTML;

      let dispositivo = prompt(`Ingrese dispositivo`);

      while (dispositivo !== `Esc`) {
        if (dispositivo === `Samsung`) {
          carrito.push(movil1);
          console.log(carrito);
          break;
        } else if (dispositivo === `Iphone`) {
          carrito.push(movil2);
          console.log(carrito);
          break;
        } else if (dispositivo === `Motorola`) {
          carrito.push(movil3);
          console.log(carrito);
          break;
        } else {
          alert(`No agregaste nada al carrito`);
        }
        dispositivo = prompt(`Ingrese dispositivo`);
      }

       let array = prompt(`¿Quieres ver el carrito?`);

      if (array === `si`) {
        mostrarCarrito();
        break;
      } else {
        alert(`Haz click en "comprar" para terminar la operación.`);
      }
      break;

    case `accesorios`:
      const accesorioHTML = `
              <ul>
                <li>${cascos.nombre} - ${movil1.precio}€</li>
                <li>${cargador.nombre} - ${movil2.precio}€</li>
              </ul>
            `;
            document.getElementById("extras").innerHTML = accesorioHTML;
            
      let accesorios = prompt(`Ingrese accesorios`)
      while (accesorios !== `ninguno`) {
        if (accesorios === `cascos`) {
          carrito.push(cascos);
          console.log(carrito);
          break;
        } else if (accesorios === `cargador`) {
          carrito.push(cargador);
          console.log(carrito);
          break;
        } else {
          alert(`No agregaste nada al carrito`);
        }
        accesorios = prompt(`Ingrese accesorio`);
      }

      let array2 = prompt(`¿Quieres ver el carrito?`);

      if (array2 === `si`) {
        mostrarCarrito();
        break;
      } else {
        alert(`Haz click en "comprar" para terminar la operación.`);
      }
      break;

    default:
      alert(`Gracias por elegirnos`);
      break;
  }

  pregunta = prompt(`¿Deseas agregar un móvil o accesorios al carrito?`);
  break;
}

localStorage.setItem(`carrito`, JSON.stringify(carrito));
