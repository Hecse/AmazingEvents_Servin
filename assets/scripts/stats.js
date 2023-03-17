let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"


buscarDatos()

async function buscarDatos() {
    try {
        //throw new Error ("se rompio todo")
        const response = await fetch(urlApi)
        console.log(response)
        const datos = await response.json()
        console.log(datos.events);
    }
    catch (error) {
        console.log(error);
    }
}


//funcionando
/* fetch(urlApi)
.then(response => response.json())
.then(datos => {
    console.log(datos); 
    console.log(datos.events);
    console.log(datos.events[5]);
    console.log(`Category: ${datos.events[5].category}`);
})

.catch(error => {
    console.log(error);
}) */