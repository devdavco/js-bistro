const menu = [
    {
        id: 1,
        nombre: "Fideos a la Boloñesa",
        categoria: "Pasta",
        precio: 12400, // precio en número para facilitar cálculos
        descripcion: "Pasta fresca con salsa de tomate y carne molida"
    },
    {
        id: 2,
        nombre: "Pizza Margarita",
        categoria: "Pizza",
        precio: 15900,
        descripcion: "Masa artesanal con salsa de tomate, mozzarella y albahaca"
    },
    {
        id: 3,
        nombre: "Ensalada César",
        categoria: "Ensaladas",
        precio: 9800,
        descripcion: "Lechuga romana, pollo a la plancha, crutones y aderezo César"
    },
    {
        id: 4,
        nombre: "Lasaña de Pollo",
        categoria: "Pasta",
        precio: 14200,
        descripcion: "Capas de pasta, pollo desmechado y salsa bechamel"
    },
    {
        id: 5,
        nombre: "Sopa de Verduras",
        categoria: "Sopas",
        precio: 7500,
        descripcion: "Caldo casero con variedad de vegetales frescos"
    }
];


const pedidosCrudos = [
    ["cliente1", 1]
]

function procesarPedido(pedido){
    const pedidoFinal= []
    let bedida = "";
    let cliente = pedido[0] 
    pedidoFinal.unshift(bebida);

    if(cliente === null || cliente === undefined ){
        cliente = "Cliente Anonimo"
    }
    
    pedidoFinal.push(cliente)

    return pedidoFinal
}



console.log(menu)