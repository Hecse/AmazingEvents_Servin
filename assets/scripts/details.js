const querySearch = document.location.search;

const id = new URLSearchParams(querySearch).get("id");

const masDetalle = events.find(datos => datos.id === Number(id));

const detalle = document.getElementById("details");

detalle.innerHTML = `
<div class="card text m-2 p-0" style="max-width: 75vw;">
<div class="row g-0">
    <div class="col-md-4">
    <img src= ${masDetalle.image} class="img-fluid rounded-start" alt= ${masDetalle.name}>
</div>

    <div class="col-md-8">
        <div class="card-body">
            <p class="card-text"><small>NAME: ${masDetalle.name}</small></p>
            <p class="card-text"><small>DATE: ${masDetalle.date}</small></p>
            <p class="card-text"><small>DESCRIPTION: ${masDetalle.description}</small></p>
            <p class="card-text"><small>CATEGORY: ${masDetalle.category}</small></p>
            <p class="card-text"><small>PLACE: ${masDetalle.place}</small></p>
            <p class="card-text"><small>CAPACITY: ${masDetalle.capacity}</small></p>
            <p class="card-text"><small>ASSISTANCE: ${masDetalle.assistance}</small></p>
            <p class="card-text"><small>PRICE: $ ${masDetalle.price}</small></p>
            </div>
        </div>
    </div>
 </div>
`