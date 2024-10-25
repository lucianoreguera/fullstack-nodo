let codigo = parseInt(prompt("Ingresar el código del producto: "));
let importe = 0;

while (codigo < 1 || codigo > 3) {
  alert("Producto no encontrado");
  codigo = parseInt(prompt("Ingresar el código del producto: "));
}

const cantidad = parseInt(prompt("Ingresar cantidad a comprar: "));

if (codigo === 1) {
  if (cantidad === 1) {
    importe = 38000;
  } else {
    if (cantidad >= 5 && cantidad <= 10) {
      importe = 36000;
    } else {
      importe = 34000;
    }
  }
} else if (codigo === 2) {
  if (cantidad === 1) {
    importe = 31000;
  } else {
    if (cantidad >= 5 && cantidad <= 10) {
      importe = 29000;
    } else {
      importe = 27000;
    }
  }
} else {
  if (cantidad === 1) {
    importe = 46000;
  } else {
    if (cantidad >= 5 && cantidad <= 10) {
      importe = 44000;
    } else {
      importe = 42000;
    }
  }
}

console.log(`El monto a abonar es: $${importe * cantidad}`);
