const contenidoCard = document.getElementById(`tarjetas`)
let tarjeta = ``


for (let event of events) {
    if (event.date >= "2022-01-01") {
        tarjeta += `<div class="card text m-2 p-0" style="width: 18rem;"> 
          <img src= ${event.image} class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"> ${event.name} </h5>
                <p class="card-text"> ${event.description} </p>
            </div>
   
            <div class="row">
                <div class="column col-8">
                    <div class="row">
                       <div class="column col-12">
                       <p class="card-text">Date: ${event.date} </p>
                </div>
            
            <div class="row">
                <div class="column col-12">
                <div class="card-footer bg-transparent border-success"> Price: $ ${event.price} 
                </div>
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