const CAMION = 22000;
const CAMIONETA = 12000;
const AUTOMOVIL = 4000;
const MOTOS = 1500;
let cantidadCamiones = 0;
let totalCobradoCamiones = 0;
let cantidadCamionetas = 0;
let totalCobradoCamionetas = 0;
let cantidadAutomoviles = 0;
let totalCobradoAutomoviles = 0;
let cantidadMotos = 0;
let totalCobradoMotos = 0;
let totalGeneral = 0;

function mostrarMenu() {
  return parseInt(
    prompt(
      "Seleccione el tipo de vehículo:\n" +
        "1. Camión\n" +
        "2. Camioneta\n" +
        "3. Automóvil\n" +
        "4. Moto\n" +
        "0. Cerrar jornada"
    )
  );
}

function cobrarPeaje(opcion) {
  console.log(opcion);
  switch (opcion) {
    case 1:
      cantidadCamiones++;
      totalCobradoCamiones += CAMION;
      break;
    case 2:
      cantidadCamionetas++;
      totalCobradoCamionetas += CAMIONETA;
      break;
    case 3:
      cantidadAutomoviles++;
      totalCobradoAutomoviles += AUTOMOVIL;
      break;
    case 4:
      cantidadMotos++;
      totalCobradoMotos += MOTOS;
      break;
    default:
      alert("Opción Incorrecta, ingrese nuevamente");
      break;
  }
}

function calcularTotalGeneral() {
  return (
    totalCobradoCamiones +
    totalCobradoCamionetas +
    totalCobradoAutomoviles +
    totalCobradoMotos
  );
}

function resumenDiario() {
  console.log("Resumen diario");
  console.log("===========================================");
  console.log("Cantidad de Camiones: " + cantidadCamiones);
  console.log("Total cobrado a Camiones: $" + totalCobradoCamiones);
  console.log("===========================================");
  console.log("Cantidad de Camionetas: " + cantidadCamionetas);
  console.log("Total cobrado a Camionetas: $" + totalCobradoCamionetas);
  console.log("===========================================");
  console.log("Cantidad de Automóviles: " + cantidadAutomoviles);
  console.log("Total cobrado a Automóviles: $" + totalCobradoAutomoviles);
  console.log("===========================================");
  console.log("Cantidad de Motos: $" + cantidadMotos);
  console.log("Total cobrado a Motos: " + totalCobradoMotos);
  console.log("===========================================");
  console.log("Total General: $" + calcularTotalGeneral());
  console.log("===========================================");

  if (cantidadAutomoviles > cantidadCamionetas) {
    console.log("En el día de hoy pasaron mas Automóviles que Camionetes");
  } else {
    console.log("En el día de hoy pasaron mas Camionetas que Automóviles");
  }
}

function main() {
  let opcion;

  while ((opcion = mostrarMenu()) !== 0) {
    cobrarPeaje(opcion);
  }

  resumenDiario();
}

main();
