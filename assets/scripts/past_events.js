const contenidoCheck = document.getElementById(`check`)
const contenidoCard = document.getElementById(`tarjetas`)
const input = document.querySelector(`input`)


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

    pintarChecksFiltrados(datos.events);
    pintarTarjetas(datos.events);

    input.addEventListener('input', filtroDoble);
    contenidoCheck.addEventListener('change', filtroDoble);

    async function filtroDoble() {
        let datosApi = await buscarDatos()
        let filtroUno = filtrarPorTitulos(datosApi.events, input.value)
        console.log(datosApi);
        console.log(datosApi.events);
        let filtroDos = filtrarPorCategorias(filtroUno)
        pintarTarjetas(filtroDos)
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
}

iniciar()


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
        if (event.date < "2023-03-10") {
            tarjeta += 
            `<div class="card text m-1" style="width: 18rem;"> 
            <a href="./details.html?_id=${event._id}" class="text-decoration-none text-white"><img src= ${event.image} class="card-img-top" alt= ${event.name}>
                <div class="card-body">
                    <h5 class="card-title text-danger"> ${event.name} </h5>
                    <p class="card-text"> ${event.description} </p>
                    <p class="card-text"> Date: ${event.date} </p>
                    <p class="card-text"> Price: u$s ${event.price} </p>              
                </div>
            </a>
        </div>`
        }
    }
    contenidoCard.innerHTML = tarjeta
}

