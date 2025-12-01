const prompt = require ('prompt-sync')();

// PEDIMOS DATOS AL USUARIO
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (%):  "));

// CALCULAMOS EL PRECIO FINAL
let montoDescuento = (precioOriginal * descuento) / 100;
let precioFinal = precioOriginal - montoDescuento;

// MOSTRAMOS EL RESULTADO 
console.log("El precio final con el descuento aplicado es : $" + precioFinal.toFixed(2));