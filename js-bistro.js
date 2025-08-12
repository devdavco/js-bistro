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
  const IVA = 1.19;
  let valorSinIva = valorTotalpedido / IVA;
//   console.log("Valor Iva: $",valorIva )
    let iva = Math.round((valorTotalpedido - valorSinIva)*100)/100;
  return iva
}

// function facturaFinal(){

//     //Valor pedido x cliente
//     // Nombre de cliente
//     //Valor Iva
//     //
// }

//Cálculos y reportes
//a) Total cada pedido

//Proceso cada pedidoCrudo

const pedidosProcesados = [];
let totalVentas = 0;




pedidosCrudos.forEach((pedidoSinProcesar) => {
  let pedidoProcesado = procesarPedido(pedidoSinProcesar);
  let idsPlatosPedido = pedidoProcesado.slice(1, -1); //quita bebida y nombre cliente

  let totalPedido = 0; //$$$

  idsPlatosPedido.forEach((idplato) => {
    totalPedido =
      totalPedido + menu.find((plato) => plato.id === idplato)?.precio;
  });



  console.log("Calculo de iva: $",calcularIva(totalPedido))

  totalVentas = totalVentas + totalPedido;

  // console.log("Pedido: $",totalPedido,pedidoProcesado[pedidoProcesado.length-1] )

  //Postre Gratis
  const MONTO_MIN_POSTRE_GRATIS = 40000;

  const postreGratis =
    totalPedido >= MONTO_MIN_POSTRE_GRATIS && idsPlatosPedido.length >= 1
      ? "Postre Gratis"
      : "";

  pedidoProcesado.push(postreGratis);
  pedidoProcesado.push(totalPedido);

  pedidosProcesados.push(pedidoProcesado);

  //lista de pedidos formateada.
  // console.log(pedidoProcesado)
});

console.log(pedidosProcesados);
console.log("Total: $", totalVentas);
