function sumarArray(numeros){
    let result = 0
    numeros.forEach(n => {
      result += n  
    })
    return result
}

console.log(`sumarArray([4, 2]) -> ${sumarArray([4, 2])}`)

function maximo(nums){ 
    let max = -Infinity
    nums.forEach(num => { if(num > max) max = num })
    return max === -Infinity ? null : max
}

console.log(`maximo([20, 10, 5, 44]) -> ${maximo([20, 10, 5, 44])}`)

function obtenerPares(numeros){
    let pares = []
    pares = numeros.filter(n => n % 2 === 0)
    return pares
}

console.log(`obtenerPares([20, 10, 5, 44]) -> ${obtenerPares([20, 10, 5, 44])}`)