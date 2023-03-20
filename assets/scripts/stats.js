let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const prueba = document.getElementById("prueba");

buscarDatos()


async function buscarDatos() {
    try {
        //throw new Error ("se rompio todo")
        const response = await fetch(urlApi)
        console.log(response)
        const datos = await response.json()
        console.log(datos.events);

        //prueba.innerHTML = `<p>Hola ${datos.events[5].capacity}</p>`

    }
    catch (error) {
        console.log(error);
    }
}


/* function eventMaxAttendance(unArray) {
    let event = Math.max(unArray)

} */

let familia = [
    { nombre: "Miguel", edad: 55, altura: 172, peso: 68, sexo: "masculino" },
    { nombre: "Manuel", edad: 16, altura: 180, peso: 65, sexo: "masculino" },
    { nombre: "Mariangeles", edad: "45", altura: 159, peso: 70, sexo: "femenino" },
    { nombre: "Julian", edad: 24, altura: 171, peso: 68, sexo: "masculino" },
    { nombre: "Nicolas", edad: 17, altura: 169, peso: 52, sexo: "masculino" },
    { nombre: "Mariaelena", edad: "75", altura: 158, peso: 75, sexo: "femenino" },
    { nombre: "Martin", edad: 41, altura: 180, peso: 82, sexo: "masculino" },
    { nombre: "Norma", edad: "85", altura: 156, peso: 74, sexo: "femenino" },
    { nombre: "Gaston", edad: 16, altura: 180, peso: 65, sexo: "masculino" },]

console.log(familia)

function eventMaxAttendance(unArray) {
    let event = Math.max(unArray.altura);
    return event
}

eventMaxAttendance(familia);

let resultado = eventMaxAttendance(familia);



/* const arrayDeNumeros = [43, 12, 45, -66, 44, 11, 94, 1, 4, 69];

function numeroMayor(numeros){
    let numero = Math.min(...numeros);
    return numero
}

numeroMayor(arrayDeNumeros);

let resultado = numeroMayor(arrayDeNumeros);

console.log(resultado)  */






const staticsEvents = document.getElementById("events");

staticsEvents.innerHTML = `
<thead>
    <tr>
        <th colspan="3">Events Statics</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Events with the highest of attendance</td>
        <td>Events with the lowest percentage of attendance</td>
        <td>Events with larger capacity</td>
    </tr>
    <tr>
        <td>---------</td>
        <td>---------</td>
        <td>---------</td>
    </tr>
</tbody>
`


const upcommingEvents = document.getElementById("upcomming");

upcommingEvents.innerHTML = `
<thead>
    <tr>
        <th colspan="3">Upcomming events statics by category</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Categories</td>
        <td>Revenues</td>
        <td>Percentage of attendance</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
</tbody>
`


const pastEvents = document.getElementById("past");

pastEvents.innerHTML = `
<thead>
    <tr>
        <th colspan="3">Past events statics by category</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Categories</td>
        <td>Revenues</td>
        <td>Percentage of attendance</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
    <tr>
        <td>----------</td>
        <td>----------</td>
        <td>----------</td>
    </tr>
</tbody>

`



//funcionando estilo EDU
/* fetch(urlApi)
.then(response => response.json())
.then(datos => {
    console.log(datos);
    console.log(datos.events);
    console.log(datos.events[5]);
    console.log(`Category: ${datos.events[5].category}`);
})

.catch(error => {
    console.log(error);
}) */





//funcion buscar datos funcionando
/* async function buscarDatos() {
    try {
        //throw new Error ("se rompio todo")
        const response = await fetch(urlApi)
        console.log(response)
        const datos = await response.json()
        console.log(datos.events);
        return datos;
    }
    catch (error) {
        console.log(error);
    }
} */