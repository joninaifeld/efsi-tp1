// ejercicio 16

let productos = ["anana", "banana", "cebolla", "dado"];

function buscarProducto(productos, nombre){
    return productos.find(producto => producto == nombre);
}

console.log(buscarProducto(productos, "banana"));