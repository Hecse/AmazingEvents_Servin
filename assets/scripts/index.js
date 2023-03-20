let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const contenidoCheck = document.getElementById(`check`)
const contenidoCard = document.getElementById(`tarjetas`)
const input = document.querySelector(`input`)


//input.addEventListener(`input`, filtroDoble)
//contenidoCheck.addEventListener(`change`, filtroDoble)

buscarDatos()

async function buscarDatos() {
    try {
        //throw new Error ("se rompio todo")
        const response = await fetch(urlApi)
        console.log(response)
        const datos = await response.json()
        console.log(datos);
        console.log(datos.events);
        //return datos

        pintarTarjetas(datos.events);
        pintarChecksFiltrados(datos.events);

        input.addEventListener('input', () => {
            filtroDoble(datos);
        });

        contenidoCheck.addEventListener('change', () => {
            filtroDoble(datos);
        });

    }
    catch (error) {
        console.log(error);
    }
}

function filtroDoble(datos) {
    let filtroUno = filtrarPorTitulos(datos.events, input.value)
    let filtroDos = filtrarPorCategorias(filtroUno.events)
    pintarTarjetas(filtroDos)
}

function pintarChecksFiltrados(unArray) {
    let categorias = unArray.map(evento => evento.category)
    let setDeCategorias = new Set(categorias)
    let categoriasFiltradas = Array.from(setDeCategorias)
    let chequeado = ``
    categoriasFiltradas.forEach(element => {
        chequeado += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
    <label class="form-check-label" for="${element}"> ${element}</label>
    </div>`
    });
    contenidoCheck.innerHTML = chequeado
}

function pintarTarjetas(unArray) {
    const arrayDeEventos = Array.from(unArray);
    console.log(arrayDeEventos);
    if (arrayDeEventos.length == 0) {
        contenidoCard.innerHTML = `<h3>No match found</h3>`;
        return;
    }
    let tarjeta = ``
    arrayDeEventos.forEach(event => {
        tarjeta += `<div class="card text m-2 p-0" style="width: 18rem;"> 
    <img src= ${event.image} class="card-img-top" alt="Costume Party">
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
            <a href="./details.html?id=${event.id}" class="btn btn-primary mb-1">Details</a>
        </div>
    </div>
    </div>`
    });
    contenidoCard.innerHTML = tarjeta
}

async function filtrarPorTitulos(array, texto) {
    try {
        let tarjetasFiltradas = array.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
        console.log(tarjetasFiltradas);

        return tarjetasFiltradas
    } catch (error) {
        console.error(error)
    }
}

async function filtrarPorCategorias(array) {
    const categorias = document.querySelectorAll("input[type='checkbox']");
    const arrayDeCategorias = Array.from(categorias);
    const categoriasFiltradas = arrayDeCategorias.filter((check) => check.checked);
    const categoriaCheck = categoriasFiltradas.map((categoriascheck) => categoriascheck.value);

    if (categoriasFiltradas.length > 0) {
        try {
            const response = await fetch(urlApi);
            const eventos = await response.json();
            const eventosFiltrados = eventos.events.filter((evento) => categoriaCheck.includes(evento.category));
            
            return eventosFiltrados;
        } catch (error) {
            console.error("Error al obtener los eventos de la API", error);
        }
    }
    return { events: array };
}


