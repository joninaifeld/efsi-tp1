const usuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

// 1
    
console.log(usuarios);

// 2

function obtenerUsuarioPorId(usuarios, id) {
    return usuarios.find(usuario => usuario.id == id);
}

console.log(obtenerUsuarioPorId(usuarios, 3));

// 3

function obtenerMayoresQueX(usuarios, edad){
    return usuarios.filter(usuario => usuario.edad > edad);
}

console.log(obtenerMayoresQueX(usuarios, 18));

// 4

function crearUsuario(usuarios, nombre, edad){
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    edad: edad
  };

  usuarios.push(nuevoUsuario);
}
crearUsuario(usuarios, "Gilberto", 52);

console.log(usuarios);