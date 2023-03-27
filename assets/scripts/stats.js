const prueba = document.getElementById("prueba");
const staticsEvents = document.getElementById("events");
const url = "https://mindhub-xj03.onrender.com/api/amazing"

buscarDatos()

async function buscarDatos() {
    let data = await fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            //console.log(data.events);
            //console.log(data.currentDate);
            return data;
        })
        .catch((error) => console.error(error));
    //console.log(data);
    //console.log(data.events);
    return data;
}

async function iniciar() {
    let datos = await buscarDatos();
    arrayPast = past(datos.events, datos.currentDate);
    arrayUpcoming = upcoming(datos.events, datos.currentDate);
    //console.log(datos);
    //console.log(datos.events);
    //console.log(arrayPast);
    //console.log(arrayUpcoming);
    

    const eventoConMayorCapacidad = ewLargeCapacity(datos);
    const eventoConMayorAsistencia = highestAttendance(datos);
    const eventoConMenorAsistencia = lowesttAttendance(datos);
    const eventosPasados = filtrarPorCategoria(datos);
    //console.log(eventosPasados);
    //filtrarPorCategoria(datos)

    staticsEvents.innerHTML = `
<thead>
    <tr>
        <th colspan="3">Events Statics</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Event with the highest percentage of attendance</td>
        <td>Event with the lowest percentage of attendance</td>
        <td>Event with larger capacity</td>
    </tr>
    <tr>
        <td>${eventoConMayorAsistencia.name}, (${(eventoConMayorAsistencia.assistance * 100 / eventoConMayorAsistencia.capacity).toFixed(2)}%)</td>
        <td> ${eventoConMenorAsistencia.name}, (${eventoConMenorAsistencia.assistance * 100 / eventoConMenorAsistencia.capacity}%) </td>
        <td> ${eventoConMayorCapacidad.name}, capacity (${eventoConMayorCapacidad.capacity
        })</td>
    </tr>
</tbody>
`

//eventos pasados
function filtrarPorCategoria(unArray) {
    let pastEstaticsByCategory = {
        //currentDate: unArray.currentDate,
        events: []
    };

    for (let i = 0; i < unArray.events.length; i++) {
        let eventAct = unArray.events[i];
        let catAct = eventAct.category;
        let objetoExistente = pastEstaticsByCategory.events.find(objeto => objeto.category === catAct);

        if (objetoExistente) {
            objetoExistente.capacity += eventAct.capacity;
            objetoExistente.price += eventAct.price;
            objetoExistente.assistance += eventAct.assistance;

        } else {
            let nuevoObjeto = {
                category: catAct,
                capacity: eventAct.capacity,
                price: eventAct.price,
                assistance: eventAct.assistance,
            };
            pastEstaticsByCategory.events.push(nuevoObjeto);
        }
    }
    console.log(pastEstaticsByCategory);
    return pastEstaticsByCategory;
}

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
}

iniciar()


function past(data, currentDate) {
    return data.filter(event => event.date < currentDate)
}

function upcoming(data, currentDate) {
    return data.filter(event => event.date > currentDate)
}

//funcion para pintar las tablas
/* function tablaPast(unArray) {
    let past = ``
    unArray.forEach(event => {
        past += `<div class="card text m-2 p-0" style="width: 18rem;"> 
    <img src= ${event.image} class="card-img-top" alt= ${event.name}>
    <div class="card-body">
        <h5 class="card-title"> ${event.name} </h5>
        <p class="card-text"> ${event.description} </p>        
    </div>
    
    <div class="row">
        <div class="column col-12">        
            <div class="card-footer bg-transparent">
            Date: ${event.date} 
            </div>
        </div>        
    </div>

    <div class="row">
        <div class="column col-8">
            <div class="row">
                <div class="column col-12">
                <p class="card-text">Price: $ ${event.price} </p>
                </div>
            </div>                        
        </div>

        <div class="column col-4">
            <a href="./details.html?_id=${event._id}" class="btn btn-primary mb-1">Details</a>
        </div>
    </div>
    </div>`
    });
    contenidoCard.innerHTML = tarjeta
} */


//evento con mayor capacidad
function ewLargeCapacity(array) {
    return array.events.reduce((largeCapacity, event) => {
        if (event.capacity > largeCapacity.capacity) {
            return event;
        } else {
            return largeCapacity;
        }
    });
}

//evento con mayor porcentaje de asistencia
function highestAttendance(array) {
    return array.events.reduce((hAttendance, event) => {
        if (event.assistance * 100 / event.capacity > hAttendance.assistance * 100 / hAttendance.capacity) {
            return event;
        } else {
            return hAttendance;
        }
    });
}

//evento con menor porcentaje de asistencia
function lowesttAttendance(array) {
    return array.events.reduce((lAttendance, event) => {
        if (event.assistance * 100 / event.capacity < lAttendance.assistance * 100 / lAttendance.capacity) {
            return event;
        } else {
            //console.log(hAttendance);
            return lAttendance;
        }
    });
}


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






