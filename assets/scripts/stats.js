const staticsEvents = document.getElementById("events");
const pastEvents = document.getElementById("past");
const upcommingEvents = document.getElementById("upcomming");
const url = "https://mindhub-xj03.onrender.com/api/amazing";


async function buscarDatos() {
    try {
        let data = await fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
            });
        return data;
    } catch (error) {
        console.error(error);
        let data = await fetch("./assets/scripts/amazing.json")
            .then(response => response.json())
            .then(data => {
                return data;
            });
        return data;
    }
}

async function iniciar() {
    let datos = await buscarDatos();
    let arrayPast = past(datos.events, datos.currentDate);
    let arrayUpcoming = upcoming(datos.events, datos.currentDate);
    
    const eventoConMayorCapacidad = ewLargeCapacity(datos);
    const eventoConMayorAsistencia = highestAttendance(datos);
    const eventoConMenorAsistencia = lowesttAttendance(datos);
    const eventosPasados = filtrarPasadoPorCategoria(arrayPast);
    const eventosFuturos = filtrarfuturoPorCategoria(arrayUpcoming);
        
    tablaPast(eventosPasados.events)
    tablaUpcomming(eventosFuturos.events)

    staticsEvents.innerHTML = `
<thead>
    <tr>
        <th colspan="3" class="text-danger">Events Statics</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Event with the highest percentage of attendance</td>
        <td>Event with the lowest percentage of attendance</td>
        <td>Event with larger capacity</td>
    </tr>
    <tr>
        <td>${eventoConMayorAsistencia.name}, (${(eventoConMayorAsistencia.assistance * 100 / eventoConMayorAsistencia.capacity).toFixed(2)} %)</td>
        <td> ${eventoConMenorAsistencia.name}, (${eventoConMenorAsistencia.assistance * 100 / eventoConMenorAsistencia.capacity} %)</td>
        <td> ${eventoConMayorCapacidad.name}, (${new Intl.NumberFormat().format(eventoConMayorCapacidad.capacity)})</td>
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

//eventos pasados
function filtrarPasadoPorCategoria(unArray) {
    let pastEstaticsByCategory = {
        events: []
    };

    for (let i = 0; i < unArray.length; i++) {
        let eventAct = unArray[i];
        let catAct = eventAct.category;
        let objetoExistente = pastEstaticsByCategory.events.find(objeto => objeto.category === catAct);

        if (objetoExistente) {
            objetoExistente.capacity += eventAct.capacity;
            objetoExistente.price += eventAct.price;
            objetoExistente.assistance += eventAct.assistance;
            objetoExistente.reveneus += eventAct.assistance * eventAct.price;

        } else {
            let nuevoObjeto = {
                category: catAct,
                capacity: eventAct.capacity,
                price: eventAct.price,
                assistance: eventAct.assistance,
                reveneus: eventAct.assistance * eventAct.price,
            };
            pastEstaticsByCategory.events.push(nuevoObjeto);
        }
    }
    //console.log(pastEstaticsByCategory);
    return pastEstaticsByCategory;
}

//eventos futuros
function filtrarfuturoPorCategoria(unArray) {
    let upcommingEstaticsByCategory = {
        events: []
    };

    for (let i = 0; i < unArray.length; i++) {
        let eventAct = unArray[i];
        let catAct = eventAct.category;
        let objetoExistente = upcommingEstaticsByCategory.events.find(objeto => objeto.category === catAct);

        if (objetoExistente) {
            objetoExistente.capacity += eventAct.capacity;
            objetoExistente.price += eventAct.price;
            objetoExistente.estimate += eventAct.estimate;
            objetoExistente.reveneus += eventAct.estimate * eventAct.price;

        } else {
            let nuevoObjeto = {
                category: catAct,
                capacity: eventAct.capacity,
                price: eventAct.price,
                estimate: eventAct.estimate,
                reveneus: eventAct.estimate * eventAct.price,
            };
            upcommingEstaticsByCategory.events.push(nuevoObjeto);
        }
    }
    //console.log(upcommingEstaticsByCategory);
    return upcommingEstaticsByCategory;
}

//funcion pintar tabla upcomming
function tablaUpcomming(unArray) {
    let upcomming = ``
    unArray.forEach(event => {
        upcomming += `
    <tr>
        <td>${event.category}</td>
        <td>u$s ${new Intl.NumberFormat().format(event.reveneus)}</td>
        <td>${(event.estimate * 100 / event.capacity).toFixed(2)} %</td>
    </tr> 
`
    });
    upcommingEvents.innerHTML = upcomming
}

//funcion pintar tabla past
function tablaPast(unArray) {
    let past = ``
    unArray.forEach(event => {
        past += `
    <tr>
        <td>${event.category}</td>
        <td>u$s ${new Intl.NumberFormat().format(event.reveneus)}</td>
        <td>${(event.assistance * 100 / event.capacity).toFixed(2)} %</td>
    </tr> 
`
    });
    pastEvents.innerHTML = past
}

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

