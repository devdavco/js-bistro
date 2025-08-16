//DATOS BASE
//menu y platosCrudos

const menu = [
  {
    id: 100,
    nombre: "Fideos a la Boloñesa",
    categoria: "Pasta",
    precio: 24000,
    descripcion: "Pasta fresca con salsa de tomate y carne molida",
  },
  {
    id: 101,
    nombre: "Pizza Margarita",
    categoria: "Pizza",
    precio: 25000,
    descripcion: "Masa artesanal con salsa de tomate, mozzarella y albahaca",
  },
  {
    id: 102,
    nombre: "Ensalada César",
    categoria: "Ensaladas",
    precio: 20000,
    descripcion: "Lechuga romana, pollo a la plancha, crutones y aderezo César",
  },
  {
    id: 103,
    nombre: "Lasaña de Pollo",
    categoria: "Pasta",
    precio: 25500,
    descripcion: "Capas de pasta, pollo desmechado y salsa bechamel",
  },
  {
    id: 104,
    nombre: "Sopa de Verduras",
    categoria: "Sopas",
    precio: 12500,
    descripcion: "Caldo casero con variedad de vegetales frescos",
  },
];

const pedidosCrudos = [
  ["Cliente 1", 101, 103],
  [null, 102, 104],
  ["Cliente 3", 104, 104, 104],
  ["Cliente 4", 101],
  ["Cliente 5", 104, 102],
  [null, 103, 104],
  ["Cliente 7", 102, 102, 102],
  [undefined, 104, 104],
  ["Cliente 9", 103],
  [null, 101, 104],
];

// Procesamiento de pedidos
function procesarPedido(pedido) {
  let nombreCliente = pedido.shift(); //extraemos nombre del cliente

  if (
    nombreCliente === null ||
    nombreCliente === undefined ||
    nombreCliente === ""
  ) {
    nombreCliente = "Cliente Anónimo";
  }

  pedido.push(nombreCliente); //Colocamos nombre del cliente al final
  let bebida = "bebida";
  pedido.unshift(bebida); //agregamos bebida al comienzo del array

  return pedido;
}

//Calcular IVA
function calcularIva(valorTotalpedido) {
  const IVA = 0.19;
  let ivaDelPedido = valorTotalpedido * IVA;
  let valorTotalPedidoConIva = valorTotalpedido + ivaDelPedido;

  return { ivaDelPedido, valorTotalPedidoConIva };
}

// Calcular valor del pedido
function obtenerValorPlato(idplato){
  return menu.find((plato) => plato.id === idplato)?.precio || 0;
}

// Validar si el pedido recibe postre gratis
function validarPostreGratis(totalPedido, idsPlatosPedido) {
  let validacionPostreGratis = totalPedido >= MONTO_MIN_POSTRE_GRATIS && idsPlatosPedido.length >= 1;
  
  return validacionPostreGratis ? true : false;
}

// Clasificar pedido según monto
function clasificarPedido(totalPedido) {
  if (totalPedido < 20000) {
    return "Bajo";
  } else if (totalPedido < 40000) {
    return "Medio";
  } else {
    return "Alto";
  }
}

//Mensaje para postre
const mostrarMensajePostre = function(clasificacion) {
  switch(clasificacion) {
    case "Bajo":
      console.log("Tu pedido no aplica para postre gratis");
      break;
    case "Medio":
      console.log("Compra un poco más para recibir un postre gratis");
      break;
    case "Alto":
      console.log("Por tu pedido ¡Reclama un postre gratis!");
      break;
    default:
      console.log("Sigue intentando para obtener un postre gratis.");
  }
}

// Función de expresión para formatear moneda
const formatearMoneda = function(valor) {

  if (typeof valor !== 'number') {
    console.log("Error: El valor debe ser un número");
    return "Valor inválido";
  }

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
};

// Función flecha para convertir palabras importantes a mayúsculas
const convertirMayusculas = (texto) => {

  if (typeof texto !== 'string') {
    console.log("Error: El texto debe ser una cadena");
    return texto;
  }
  
  const palabrasImportantes = ['cliente', 'pedido', 'total', 'iva', 'gratis', 'postre', 'bebida'];
  let textoFormateado = texto;
  
  palabrasImportantes.forEach(palabra => {
    const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
    textoFormateado = textoFormateado.replace(regex, palabra.toUpperCase());
  });
  
  return textoFormateado;
};

// Función para mostrar lista de pedidos formateada
function mostrarListaPedidos(pedidos) {
  console.log("\n" + "=".repeat(50));
  console.log("LISTA DE PEDIDOS A PROCESAR");
  console.log("=".repeat(50));
  
  pedidos.forEach((pedido, index) => {
    console.log(`\n${convertirMayusculas("pedido")} #${index + 1}:`);
    console.log(`   ${convertirMayusculas("cliente")}: ${pedido[0] || "Anónimo"}`);
    console.log(`   IDs de platos: [${pedido.slice(1).join(", ")}]`);
  });
  console.log("\n" + "=".repeat(50));
}

// Cola de pedidos con while
function procesarColaPedidos(pedidosCrudos) {
  console.log("\nINICIANDO PROCESAMIENTO DE COLA DE PEDIDOS");
  let colaPedidos = [...pedidosCrudos]; // Copia del array original
  let indicePedido = 0;
  
  while (indicePedido < colaPedidos.length) {
    const pedidoActual = [...colaPedidos[indicePedido]]; // Copia para no modificar original
    
    console.log(`\nProcesando ${convertirMayusculas("pedido")} ${indicePedido + 1} de ${colaPedidos.length}`);
    
    // Procesar el pedido actual
    const pedidoProcesadoCompleto = procesarPedidoCompleto(pedidoActual);
    pedidosProcesados.push(pedidoProcesadoCompleto);
    
    indicePedido++;
  }
  
  console.log(`\n ${convertirMayusculas("procesamiento completo")}: ${indicePedido} pedidos procesados`);
}

// Función para procesar un pedido completo
function procesarPedidoCompleto(pedidoOriginal) {
  console.log(`\n--- ${convertirMayusculas("procesando pedido")}  ---`);
  
  // Procesar pedido
  let pedidoProcesado = procesarPedido([...pedidoOriginal]);
  
  // Extraer IDs de platos
  let idsPlatosPedido = pedidoProcesado.slice(1, -1);
  
  // Calcular valor del pedido
  let totalPedido = 0;
  idsPlatosPedido.forEach((idplato) => {
    totalPedido = totalPedido + obtenerValorPlato(idplato);
  });
  
  let { ivaDelPedido, valorTotalPedidoConIva } = calcularIva(totalPedido);
  
  // Postre Gratis y Clasificación
  const postreGratis = validarPostreGratis(totalPedido, idsPlatosPedido);
  const clasificacion = clasificarPedido(totalPedido);
  
  // Agregar información al pedido
  pedidoProcesado.push(postreGratis);
  pedidoProcesado.push(clasificacion);
  pedidoProcesado.push(valorTotalPedidoConIva);
  
  // Acumular totales de ventas
  totalVentasSinIva += totalPedido;
  totalVentasConIva += valorTotalPedidoConIva;
  totalIvaRecaudado += ivaDelPedido;
  
  // Mostrar información del pedido procesado
  mostrarInformacionPedidoProcesado(pedidoProcesado, totalPedido, valorTotalPedidoConIva, ivaDelPedido, clasificacion, postreGratis);
  
  // Simular cobro
  simularCobro();
  
  return pedidoProcesado;
}

// Función para mostrar información del pedido procesado
function mostrarInformacionPedidoProcesado(pedido, total, totalConIva, ivaDelPedido, clasificacion, postreGratis) {
  console.log("\n" + "=".repeat(60));
  console.log("INFORMACIÓN DEL PEDIDO PROCESADO:");
  console.log("\n" + "=".repeat(60));
  console.log(`${convertirMayusculas("cliente")}: ${pedido[pedido.length - 4]}`);
  console.log(`${convertirMayusculas("total")} sin ${convertirMayusculas("iva")}: ${formatearMoneda(total)}`);
  console.log(`${convertirMayusculas("iva")}: ${formatearMoneda(ivaDelPedido)}`);
  console.log(`${convertirMayusculas("total")} con ${convertirMayusculas("iva")}: ${formatearMoneda(totalConIva)}`);
  console.log(`Clasificación: ${clasificacion}`);
  console.log(`${convertirMayusculas("postre")} ${convertirMayusculas("gratis")}: ${postreGratis ? "Sí" : "No"}`);
  
  mostrarMensajePostre(clasificacion);
}

// Función para mostrar el resumen total de ventas
function mostrarResumenTotalVentas() {
  console.log("\n" + "=".repeat(70));
  console.log("RESUMEN TOTAL DE VENTAS DEL BISTRO");
  console.log("=".repeat(70));
  
  console.log(`${convertirMayusculas("cantidad")} de ${convertirMayusculas("pedidos")} procesados: ${pedidosProcesados.length}`);
  console.log(`${convertirMayusculas("total")} de ventas SIN ${convertirMayusculas("iva")}: ${formatearMoneda(totalVentasSinIva)}`);
  console.log(`${convertirMayusculas("total")} de ${convertirMayusculas("iva")} recaudado: ${formatearMoneda(totalIvaRecaudado)}`);
  console.log(`${convertirMayusculas("total")} de ventas CON ${convertirMayusculas("iva")}: ${formatearMoneda(totalVentasConIva)}`);
  
  console.log("=".repeat(70));
}

// Función mejorada para simular cobro
function simularCobro() {
  let intentoDeCobro = 0;
  do {
    console.log(`${convertirMayusculas("intentando cobro")}... (Intento ${intentoDeCobro + 1})`);
    
    if (intentoDeCobro === 1) {
      console.log("¡Pago exitoso!");
      break;
    }
    intentoDeCobro++;
  } while (intentoDeCobro < 2);
}

//Procesar cada pedidoCrudo
const pedidosProcesados = [];
let totalVentasSinIva = 0;
let totalVentasConIva = 0;
let totalIvaRecaudado = 0;
const MONTO_MIN_POSTRE_GRATIS = 40000;

// === EJECUCIÓN PRINCIPAL ===


mostrarListaPedidos(pedidosCrudos);
procesarColaPedidos(pedidosCrudos);


console.log("\n" + "=".repeat(60));
console.log("RESUMEN FINAL DE PEDIDOS PROCESADOS");
console.log("=".repeat(60));

pedidosProcesados.forEach((pedido, index) => {
  const cliente = pedido[pedido.length - 4];
  const total = pedido[pedido.length - 1];
  console.log(`${index + 1}. ${convertirMayusculas("cliente")}: ${cliente} - ${convertirMayusculas("total")}: ${formatearMoneda(total)}`);
});

console.log("=".repeat(60));

// Mostrar resumen total de ventas
mostrarResumenTotalVentas();

