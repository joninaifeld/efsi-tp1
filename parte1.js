function formatearNombre(nombre) {
    let result = ""
    for (let index = 0; index < nombre.length; index++) {
        const char = nombre[index];
        result += index === 0 ? char.toUpperCase() : char.toLowerCase()
    }
    return result
}
console.log(`formatearNombre("asdwasdwasd") -> ${formatearNombre("asdwasdwasd")}`)

//2
function contarLetras(texto){
    let count = 0
    for(let char of texto){
        if(char !== " ") count++
    }
    return count
}
console.log(`contarLetras("123 123") -> ${contarLetras("123 123")}`)

//3
function maximo(a, b, c){
    let max = a
    if (b > max) max = b
    if (c > max) max = c
    return max
}

console.log("maximo(a, b, c) -> " + maximo(3, 5, 6))

function validarPassword(password){
    return password.length >= 8 && Array.from(password).some(char => !isNaN(char))
}

console.log(`validarPassword("jashasjsaj9") -> ${validarPassword("jashasjsaj9")}`)