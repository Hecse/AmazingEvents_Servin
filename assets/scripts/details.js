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
  <div class="card text m-0" style="max-width: 60vw;">
    <div class="row g-0">
      <div class="col-md-5">
        <img src= ${masDetalle.image} class="img-fluid rounded-start" alt= ${masDetalle.name}>
      </div>

      <div class="col-md-7">
        <div class="card-body">
          <div class="text-danger fs-5">NAME</div>
          <p class="card-text"><small>${masDetalle.name}</small></p>
          <div class="text-danger fs-5">DATE</div>
          <p class="card-text"><small>${masDetalle.date}</small></p>
          <div class="text-danger fs-5">DESCRIPTION</div>
          <p class="card-text"><small>${masDetalle.description}</small></p>
          <div class="text-danger fs-5">CATEGORY</div>
          <p class="card-text"><small>${masDetalle.category}</small></p>
          <div class="text-danger fs-5">PLACE</div>
          <p class="card-text"><small>${masDetalle.place}</small></p>
          <div class="text-danger fs-5">CAPACITY</div>
          <p class="card-text"><small>${masDetalle.capacity}</small></p>
          <div class="text-danger fs-5">PRICE</div>
          <p class="card-text"><small>u$s ${masDetalle.price}</small></p>
        </div>
      </div>
    </div>
  </div>
`
}

iniciar()

