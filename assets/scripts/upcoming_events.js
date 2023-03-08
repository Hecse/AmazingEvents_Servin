const contenidoCard = document.getElementById(`tarjetas`)
let tarjeta = ``


for (let event of events) {
    if (event.date >= "2022-01-01") {
        tarjeta += `<div class="card text m-2 p-0" style="width: 18rem;"> 
    <img src= ${event.image} class="card-img-top" alt="Costume Party">
    <div class="card-body">
        <h5 class="card-title"> ${event.name} </h5>
        <p class="card-text"> ${event.description} </p>
    </div>

    <div class="container">
        <div class="row">
            <div class="column col-6">
                <div class="card-footer bg-transparent border-success">Price $ ${event.price} </div>
            </div>

            <div class="column col-6"><a href="./details.html" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
    </div>`
    }
}

contenidoCard.innerHTML = tarjeta
/* console.log(tarjeta.name) */



