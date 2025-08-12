//DATOS BASE
//menu y platosCrudos

const menu = [
    { id: 100, nombre: "Fideos a la Boloñesa", categoria: "Pasta", precio: 24000, descripcion: "Pasta fresca con salsa de tomate y carne molida" },
    { id: 101, nombre: "Pizza Margarita", categoria: "Pizza", precio: 25000, descripcion: "Masa artesanal con salsa de tomate, mozzarella y albahaca" },
    { id: 102, nombre: "Ensalada César", categoria: "Ensaladas", precio: 20000, descripcion: "Lechuga romana, pollo a la plancha, crutones y aderezo César" },
    { id: 103, nombre: "Lasaña de Pollo", categoria: "Pasta", precio: 25500, descripcion: "Capas de pasta, pollo desmechado y salsa bechamel" },
    { id: 104, nombre: "Sopa de Verduras", categoria: "Sopas", precio: 12500, descripcion: "Caldo casero con variedad de vegetales frescos" }
];

const pedidosCrudos = [
    ["Cliente 1", 101, 103],
    [null, 102, 104],
    ["Cliente 3", 104, 104, 104],
    [undefined, 101],
    ["Cliente 5", 104, 102],
    [null, 103, 101, 104],
    ["Cliente 7", 102, 102, 102],
    [undefined, 104, 104],
    ["Cliente 9", 103],
    [null, 101, 104]
];
//
function procesarPedido(pedido){
    let pedidoProcesado = pedido.slice() //Hacemos una copia del array
    let nombreCliente = pedidoProcesado.shift(); //extraemos nombre del cliente

    if(nombreCliente === null || nombreCliente === undefined || nombreCliente === "" ){
        nombreCliente = "Cliente Anónimo"
    }
    pedidoProcesado.push(nombreCliente) //Colocamos nombre del cliente al final
    let bebida = "bebida";
    pedidoProcesado.unshift(bebida); //agregamos bebida al comienzo del array
    
    // console.log("Pedidos Procesados: \n",pedidoProcesado)
    return pedidoProcesado
}


function calcularIva(){

}

//Cálculos y reportes
//a) Total cada pedido

//Proceso cada pedidoCrudo

const pedidosProcesados = []    ;
pedidosCrudos.forEach(pedidoSinProcesar => {

    let pedidoProcesado = procesarPedido(pedidoSinProcesar)
    let idsPlatosPedido = pedidoProcesado.slice(1,-1) //quita bebida y nombre cliente

    let totalPedido = 0 //$$$

    idsPlatosPedido.forEach(idplato => {
        totalPedido = totalPedido + menu.find(plato=> plato.id === idplato)?.precio 
    });

    console.log("Total Pedido: ",totalPedido,pedidoProcesado[pedidoProcesado.length-1] )

    //Postre Gratis
    const MONTO_MIN_POSTRE_GRATIS = 40000;

    const postreGratis = totalPedido>=MONTO_MIN_POSTRE_GRATIS && idsPlatosPedido.length>=1 ? 'Postre Gratis': 'Sin Postre Gratis';
    
    console.log(postreGratis);

    pedidosProcesados.push(pedidoProcesado)
    //lista de pedidos formateada.
    // console.log(pedidoProcesado)

});

console.log(pedidosProcesados)

