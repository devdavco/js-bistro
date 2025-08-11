//DATOS BASE
//menu y platosCrudos
import {menu,pedidosCrudos} from './datos.js'



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
