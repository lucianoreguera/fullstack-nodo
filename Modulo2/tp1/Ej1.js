const DESCUENTO = 50;
const TOPE_VENTA = 160000;
const TOPE_DESCUENTO = (TOPE_VENTA * DESCUENTO) / 100;
let descuento = TOPE_DESCUENTO;
let montoVenta = 0;

const MONTO_COMPRA = parseFloat(prompt("Ingresar monto venta: "));

if (MONTO_COMPRA > TOPE_VENTA) {
  montoVenta = TOPE_DESCUENTO + MONTO_COMPRA - TOPE_VENTA;
} else {
  montoVenta = MONTO_COMPRA * (DESCUENTO / 100);
  descuento = montoVenta;
}

console.log(`Monto total: $${MONTO_COMPRA}`);
console.log(`Descuento: $${descuento}`);
console.log(`Monto a pagar: $${montoVenta}`);
