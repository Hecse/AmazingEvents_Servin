const contenidoCheck = document.getElementById(`check`)
const contenidoCard = document.getElementById(`tarjetas`)
const input = document.querySelector(`input`)

input.addEventListener(`input`, () => {
    let arrayFiltrado = filtrarPorTitulos(events, input.value)
    pintarTarjetas(arrayFiltrado)
})

contenidoCheck.addEventListener(`change`, () => {
    let eventsFiltrados = filtrarPorCategorias(events);
    pintarTarjetas(eventsFiltrados)
})


pintarChecksFiltrados(events)

pintarTarjetas(events)






function pintarChecksFiltrados(unArray) {
    let categorias = unArray.map(evento => evento.category)
    let setDeCategorias = new Set(categorias)
    let categoriasFiltradas = Array.from(setDeCategorias)
    let chequeado = ``
    categoriasFiltradas.forEach(element => {
        chequeado += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="${element}" value="${element}">
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
    <img src= ${event.image} class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title"> ${event.name} </h5>
        <p class="card-text"> ${event.description} </p>
        <p class="card-text">Date: ${event.date} </p>
    </div>
   
    <div class="row">
        <div class="column col-8">
            <div class="row">
                <div class="column col-12">
                <p class="card-text">Date: ${event.date} </p>
            </div>
            
            <div class="row">
                <div class="column col-12">
                <div class="card-footer bg-transparent border-success"> Price: $ ${event.price} </div>
            </div>            
        </div>        
        </div>            
        </div>

        <div class="column col-4"><a href="./details.html" class="btn btn-primary">Details</a>
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
    let categorias = document.querySelectorAll("input[type='radio']")
    let arrayDeCategorias = Array.from(categorias)
    let categoriasFiltradas = arrayDeCategorias.filter(check => check.checked)
    let categoriaCheck = categoriasFiltradas.map(categoriascheck => categoriascheck.value)
    let arrayComparado = array.filter(element => categoriaCheck.includes(element.category))
    console.log(arrayComparado)
    return arrayComparado
}