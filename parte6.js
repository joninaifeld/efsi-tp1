// ejercicio 16

const productos = [

{nombre:"banana", precio: 70},
{nombre:"anana", precio: 30},
{nombre:"cebolla", precio: 60},
{nombre:"dado", precio: 40}
]

function buscarProducto(productos, nombre){
    return productos.find(producto => producto.nombre == nombre);
}

console.log(buscarProducto(productos, "banana"));

// ejercicio 17

function buscarProdMayorX(productos, precio){
    return productos.filter(producto => producto.precio > precio)
}

console.log(buscarProdMayorX(productos, 50));

// ejercicio 18

let numeros = [1, 2, 31, 5];

function promediar(numeros){
    let total = numeros.reduce((acum, num) => acum + num, 0);
    return total / (numeros.length);
}

console.log(promediar(numeros));