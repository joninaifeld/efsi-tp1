const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

function getNames(usuarios){
    return usuarios.map(usuario => usuario.nombre)
}
console.log(usuarios)
console.log(`getNames(usuarios) -> ${getNames(usuarios)}`)

function getAdults(usuarios){
    return usuarios.filter(u => u.edad >= 18)
}
console.log(`getAdults(usuarios) -> ${getNames(getAdults(usuarios))}`)

function calcEdadTotal(usuarios){
    const precios = usuarios.map(usuario => usuario.edad)
    return precios.reduce((acum, edad) => acum + edad, 0)
}

console.log(`calcEdadTotal(usuarios) -> ${calcEdadTotal(usuarios)}`)