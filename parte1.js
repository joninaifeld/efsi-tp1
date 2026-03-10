function formatearNombre(nombre) {
    let result = ""
    for (let index = 0; index < nombre.length; index++) {
        const char = nombre[index];
        result += index === 0 ? char.toUpperCase() : char.toLowerCase()
    }
    return result
}
console.log(`formatearNombre("asdwasdwasd") -> ${formatearNombre("asdwasdwasd")}`)

function contarLetras(texto){
    let count = 0
    for(let char of texto){
        if(char !== " ") count++
    }
    return count
}
console.log(`contarLetras("123 123") -> ${contarLetras("123 123")}`)
