const producto = {

nombre:"Notebook",

precio:1000

}
console.log(producto)

function extraerNombreYPrecio({ nombre, precio }){
    console.log(`${nombre} & ${precio}`)
}

function crearCopiaMasStock(producto, stock){
    return {...producto, stock: stock}
}

console.log(`crearCopiaMasStock(producto, 10) ->`)
console.log(crearCopiaMasStock(producto, 10))
