//DATOS BASE
//menu y platosCrudos

const menu = [
    { id: 1, nombre: "Fideos a la Boloñesa", categoria: "Pasta", precio: 24000, descripcion: "Pasta fresca con salsa de tomate y carne molida" },
    { id: 2, nombre: "Pizza Margarita", categoria: "Pizza", precio: 25000, descripcion: "Masa artesanal con salsa de tomate, mozzarella y albahaca" },
    { id: 3, nombre: "Ensalada César", categoria: "Ensaladas", precio: 20000, descripcion: "Lechuga romana, pollo a la plancha, crutones y aderezo César" },
    { id: 4, nombre: "Lasaña de Pollo", categoria: "Pasta", precio: 25500, descripcion: "Capas de pasta, pollo desmechado y salsa bechamel" },
    { id: 5, nombre: "Sopa de Verduras", categoria: "Sopas", precio: 12500, descripcion: "Caldo casero con variedad de vegetales frescos" }
];

const pedidosCrudos = [
    ["Cliente 1", 1, 3],
    [null, 2, 5],
    ["Cliente 3", 5, 5, 5],
    [undefined, 1],
    ["Cliente 4", 4, 2],
    [null, 3, 1, 5],
    ["Cliente 6", 2, 2, 2],
    [undefined, 4, 5],
    ["Cliente 8", 3],
    [null, 1, 4]
];


function procesarPedido(pedido){

    let pedidoModificado= pedido.slice() //Hacemos una copia del array
    let bebida = true;
    let nombreCliente = pedidoModificado.shift(); //extraemos nombre del cliente
    
    if(nombreCliente === null || nombreCliente === undefined ){
        nombreCliente = "Cliente Anónimo"
    }
    pedidoModificado.push(nombreCliente) //Colocamos nombre del cliente al final
    pedidoModificado.unshift(bebida); //agregamos bebida al comienzo del array

    return pedidoModificado
}


function calcularIva(){
}

//Cálculos y reportes
//a) Total cada pedido



//Proceso cada pedidoCrudo
pedidosCrudos.forEach(pedidoSinProcesar => {
    let pedidoProcesado = procesarPedido(pedidoSinProcesar)

    let idsPlatosPedido = pedidoProcesado.slice(1,-1) //quito el comienzo y final del pedido procesado
    console.log(idsPlatosPedido)
 // Aquí encontrar los ids de los platos en el array menu, sumar los precios 


    //lista de pedidos formateada.
    console.log(pedidoProcesado)

});

