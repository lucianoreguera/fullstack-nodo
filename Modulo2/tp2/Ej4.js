let desaprobado = 0;
let aprobado = 0;
let muyBueno = 0;
let excelente = 0;

function calificarExamen(nota) {
  if (nota >= 0 && nota <= 4) {
    desaprobado++;
    return "Desaprobado";
  } else if (nota > 4 && nota <= 7) {
    aprobado++;
    return "Aprobado";
  } else if (nota > 7 && nota < 10) {
    muyBueno++;
    return "Muy Bueno";
  } else if (nota === 10) {
    excelente++;
    return "Excelente";
  } else {
    return "Error";
  }
}

function main() {
  let continuar = true;
  let contadorErrores = 0;

  while (continuar) {
    let nota = parseFloat(prompt("Ingrese la nota del trabajo final (0-10):"));

    if (isNaN(nota)) {
      alert("Debe ingresar un número válido.");
      continue;
    }

    let clasificacion = calificarExamen(nota);

    if (clasificacion === "Error") {
      alert("Error: La nota ingresada es incorrecta.");
      contadorErrores++;
    } else {
      console.log(`Trabajo ${clasificacion} (Nota: ${nota})`);
    }

    continuar =
      prompt("¿Desea continuar cargando notas? (s/n)").toLowerCase() === "s";
  }

  console.log("Resumen:");
  console.log("Cantidad de trabajos Desaprobados: " + desaprobado);
  console.log("Cantidad de trabajos Aprobados: " + aprobado);
  console.log("Cantidad de trabajos Muy Buenos: " + muyBueno);
  console.log("Cantidad de trabajos Excelentes: " + excelente);
  console.log("Cantidad de errores de ingreso: " + contadorErrores);
}

main();
