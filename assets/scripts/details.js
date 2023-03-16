const querySearch = document.location.search;

const id = new URLSearchParams(querySearch).get("id");

const detalleTarjeta = events.find(datos => datos.id === Number(id));

const detalle = document.getElementById("details");

detalle.innerHTML = `
<div class="card text m-2 p-0" style="max-width: 75vw;">
<div class="row g-0">
    <div class="col-md-4">
    <img src="./assets/img/foodFair.jpg" class="img-fluid rounded-start" alt="Food Fair">
</div>

    <div class="col-md-8">
        <div class="card-body">
            <p class="card-text"><small>NAME: ${detalleTarjeta.name} </small></p>
            <p class="card-text"><small>DATE: </small></p>
            <p class="card-text"><small>DESCRIPTION: </small></p>
            <p class="card-text"><small>CATEGORY: </small></p>
            <p class="card-text"><small>PLACE: </small></p>
            <p class="card-text"><small>CAPACITY: </small></p>
            <p class="card-text"><small>ASSISTANCE: </small></p>
            <p class="card-text"><small>PRICE: </small></p>
            </div>
        </div>
    </div>
 </div>
`