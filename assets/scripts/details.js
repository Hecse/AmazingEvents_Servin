const querySearch = document.location.search;
const id = new URLSearchParams(querySearch).get("_id");
const detalle = document.getElementById("details");


async function buscarDatos() {
  try {
    let data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then(response => response.json())
      .then(data => {
        return data;
      });
    return data;
  } catch (error) {
    console.error(error);
    let data = await fetch("./assets/scripts/amazing.json")
      .then(response => response.json())
      .then(data => {
        return data;
      });
    return data;
  }
}


async function iniciar() {
  let datos = await buscarDatos();
  //console.log(datos);
  //console.log(datos.events);
  let masDetalle = datos.events.find(datos => datos._id === Number(id));

  detalle.innerHTML = `
  <div class="card text m-2 p-0" style="max-width: 100vw;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src= ${masDetalle.image} class="img-fluid rounded-start" alt= ${masDetalle.name}>
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text"><small>NAME: <br> ${masDetalle.name}</small></p>
          <p class="card-text"><small>DATE: <br> ${masDetalle.date}</small></p>
          <p class="card-text"><small>DESCRIPTION: <br> ${masDetalle.description}</small></p>
          <p class="card-text"><small>CATEGORY: <br> ${masDetalle.category}</small></p>
          <p class="card-text"><small>PLACE: <br> ${masDetalle.place}</small></p>
          <p class="card-text"><small>CAPACITY: <br> ${masDetalle.capacity}</small></p>
          <p class="card-text"><small>PRICE: <br> $ ${masDetalle.price}</small></p>
        </div>
      </div>
    </div>
  </div>
`
}

iniciar()

