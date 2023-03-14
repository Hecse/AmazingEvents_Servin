//filtrar categorias para los checks
/* function filtrarCategorias(array) {
    let categorias = array.map(evento => evento.category)
    let setDeCategorias = new Set(categorias)
    let categoriasFiltradas = Array.from(setDeCategorias)
} */

const contenidoCheck = document.getElementById(`check`)

pintarChecksFiltrados(events)


//pintar los checks
function pintarChecksFiltrados(unArray) {
    let categorias = unArray.map(evento => evento.category)
    let setDeCategorias = new Set(categorias)
    let categoriasFiltradas = Array.from(setDeCategorias)
    let chequeado = ``
    categoriasFiltradas.forEach(element => {
        chequeado += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1"> ${element}</label>
    </div>`
    });
    contenidoCheck.innerHTML = chequeado
}


const contenidoCard = document.getElementById(`tarjetas`)
let tarjeta = ``


for (let event of events) {
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
/* console.log(tarjeta.name) */