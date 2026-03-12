const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}



function descripcionUsuario({ nombre, edad }){
    return `${nombre} tiene ${edad} años`
}
console.log(usuario)
console.log(`descripcionUsuario(usuario) -> ${descripcionUsuario(usuario)}`)

function activarUsuario(usuario){
    usuario.activo = true
}
console.log("activarUsuario(usuario) -> ")
activarUsuario(usuario)
console.log(usuario)

const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

function calcPrecioTotal(productos){
    const precios = productos.map(producto => producto.precio)
    return precios.reduce((acum, precio) => acum + precio, 0)
}
console.log(productos)
console.log(`calcPrecioTotal(productos) -> ${calcPrecioTotal(productos)}`)