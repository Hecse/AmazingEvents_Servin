//ejercicio 1
let miNombre = "nombre"
miNombre = "Hector"

//ejercicio 2
let miApellido = "apellido"
miApellido = "Servin"

//ejercicio 3
let miEdad = 0
miEdad = 51

//ejercicio 4
let miMascota = "mascota"
miMascota = "Jake"

//ejercicio 5
let edadMascota = 0
edadMascota = 7

//ejercicio 7
let nombreCompleto = "Nombre Copleto"
nombreCompleto = miNombre + " " + miApellido

//ejercicio 8
let textoPresentacion = "texto"
textoPresentacion = "Mi nombre es " + nombreCompleto + ", tengo " + miEdad + " años" + ", mi mascota se llama " + miMascota + " y tiene " + edadMascota + " años" 

//ejercicio 9
let sumaEdades = 0
sumaEdades = miEdad + edadMascota

let restaEdades = 0
restaEdades = miEdad - edadMascota

let productoEdades = 0
productoEdades = miEdad * edadMascota

let divisionEdades = 0
divisionEdades = miEdad / edadMascota

//ejercicio 10
/* miNombre = prompt("Ingrese su nombre")
console.log("Nombre: " + miNombre)

miApellido = prompt("Ingrese su apellido")
console.log("Apellido: " + miApellido)

miEdad = prompt("Ingrese su Edad")
console.log("Edad: " + miEdad)

miMascota = prompt("Nombre de su mascota")
console.log("Nombre de la mascota: " + miMascota)

miMascota = prompt("Nombre de su mascota")
console.log("Edad de la mascota: " + edadMascota)*/

/* miNombre = prompt("Ingrese su nombre")
miApellido = prompt("Ingrese su apellido")
miEdad = prompt("Ingrese su edad")
miMascota = prompt("Nombre de su mascota")
edadMascota = prompt("Edad de su mascota")
console.log("Nombre y Apellido: " + miNombre + " " + miApellido) 
console.log("Mi nombre es " + miNombre + " " + miApellido + ", tengo " + miEdad + " años" + ", mi mascota se llama " + miMascota + " y tiene " + edadMascota + " años")
console.log("Nuestras edades suman: " + sumaEdades)
console.log("Restando nuestras edades: " + restaEdades)
console.log("El producto de nuestras edades: " + productoEdades)
console.log("La división de nuestras edades: " + divisionEdades) */

//ejercicio 11
/* let alumno = {
    nombre: "Hector",
    apellido: "Servin",
    edad: 51,
    curso: "FE15-TM",
    aprobado: true,
}

console.table(alumno)
console.log("Nombre alumno: " + alumno.nombre)
console.log("Apellido alumno: " + alumno.apellido)
console.log("Edad alumno: " + alumno.edad)
console.log("Curso: " + alumno.curso)
console.log("Aprobado? " + alumno.aprobado) */

//ejercicio 12
let mascota = {
    nombre: "Jake",
    raza: "Boxer",
    edad: 6,
    color: "Marron",
    macho: true,
}

console.table(mascota)

console.log("Nombre de la mascota: " + mascota.nombre)

console.log("Raza: " + mascota.raza)

console.log("Edad: " + mascota.edad)

console.log("Color: " + mascota.color)

console.log("Macho? " + mascota.macho)

//ejercicio 13