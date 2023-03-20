let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const contenidoCheck = document.getElementById(`check`)
const contenidoCard = document.getElementById(`tarjetas`)
const input = document.querySelector(`input`)


input.addEventListener(`input`, filtroDoble)
contenidoCheck.addEventListener(`change`, filtroDoble)

buscarDatos()

async function buscarDatos() {
    try {
        //throw new Error ("se rompio todo")
        const response = await fetch(urlApi)
        console.log(response)
        const datos = await response.json()
        //console.log(datos.events);
        return datos
    }
    catch (error) {
        console.log(error);
    }
}

let eventos = ""

async function iniciar(){
    eventos = await buscarDatos();
    pintarTarjetas(eventos);
    pintarChecksFiltrados(eventos)
    return eventos
}

iniciar()


function filtroDoble(){
    let filtroUno = filtrarPorTitulos(eventos.events, input.value)
    let filtroDos = filtrarPorCategorias(filtroUno)
    pintarTarjetas(filtroDos)
}

function pintarChecksFiltrados(unArray) {
    let categorias = unArray.events.map(evento => evento.category)
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
    if (unArray.events.length == 0) {
        contenidoCard.innerHTML = `<h3>No match found</h3>`
        return
    }
    let tarjeta = ``
    unArray.events.forEach(event => {
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

function filtrarPorTitulos(array, texto) {
    let tarjetasFiltradas = array.events.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    return tarjetasFiltradas
}

function filtrarPorCategorias(array) {
    let categorias = document.querySelectorAll("input[type='checkbox']")
    let arrayDeCategorias = Array.from(categorias)
    let categoriasFiltradas = arrayDeCategorias.filter(check => check.checked)
    let categoriaCheck = categoriasFiltradas.map(categoriascheck => categoriascheck.value)
    let arrayComparado = array.events.filter(element => categoriaCheck.includes(element.category))
    if (categoriasFiltradas.length > 0){
       return arrayComparado 
    }
    return array
}

