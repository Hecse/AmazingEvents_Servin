const contenidoCheck = document.getElementById(`check`)
const contenidoCard = document.getElementById(`tarjetas`)
const input = document.querySelector(`input`)



input.addEventListener(`input`, filtroDoble)

contenidoCheck.addEventListener(`change`, filtroDoble)



pintarChecksFiltrados(events)

pintarTarjetas(events)



function filtroDoble() {
    let filtroUno = filtrarPorTitulos(events, input.value)
    let filtroDos = filtrarPorCategorias(filtroUno)
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
    if (unArray.length == 0) {
        contenidoCard.innerHTML = `<h3>No match found</h3>`
        return
    }
    let tarjeta = ``
    for (let event of unArray) {
        if (event.date <= "2022-01-01") {
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
        }
    }
    contenidoCard.innerHTML = tarjeta
}

function filtrarPorTitulos(array, texto) {
    let tarjetasFiltradas = array.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    return tarjetasFiltradas
}

function filtrarPorCategorias(array) {
    let categorias = document.querySelectorAll("input[type='checkbox']")
    let arrayDeCategorias = Array.from(categorias)
    let categoriasFiltradas = arrayDeCategorias.filter(check => check.checked)
    let categoriaCheck = categoriasFiltradas.map(categoriascheck => categoriascheck.value)
    let arrayComparado = array.filter(element => categoriaCheck.includes(element.category))
    if (categoriasFiltradas.length > 0) {
        return arrayComparado
    }
    return array
}