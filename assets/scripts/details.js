const querySearch = document.location.search;

const id = new URLSearchParams(querySearch).get("_id");

const detalle = document.getElementById("details");



async function buscarDatos() {
    let data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {

            console.log(data);
            console.log(data.events);
            return data;
        })
        .catch((error) => console.error(error));
    console.log(data);
    console.log(data.events);
    return data;
}

async function iniciar() {
    let datos = await buscarDatos();
    console.log(datos);
    console.log(datos.events);

    let masDetalle = events.find(datos => datos.id === Number(id));
}

iniciar()



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