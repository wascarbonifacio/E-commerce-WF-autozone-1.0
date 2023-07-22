//este es el evento para capturar los datos de los inputs de crear-producto.html
const formularioCrear = document.getElementById("formCrear");

formularioCrear.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("titulo").value;
    const imgeUrl = document.getElementById("imgUrl").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    nuevoAccesorio(nombre,imgeUrl,precio,descripcion);

    
});

//esta es la funcion de crear el nuevo elemento en el index.html
const nuevoAccesorio = (nombre,imgeUrl,precio,descripcion)=>{
    const card = document.createElement("div");
    card.classList.add("container__productos");


    const contenido = `    
    <h2 class="titulo__producto">${nombre}</h2>
    <div class="container__img">
        <img src="${imgeUrl}" alt="Brembo Negro mate" class="img__producto">
    </div>
    <p class="precio__producto">${precio}</p>
    <p class="descripcion__producto">${descripcion}</p>
    <div class="container__btnProductos">
        <a href="#" class="enlace__producto">Ver producto</a>
    </div>`;

    card.innerHTML = contenido;
    // card.dataset.id = id;


    // console.log(contenido);
    // return card;
    const accesorioContainer = document.getElementById("accesorios");
    accesorioContainer.appendChild(card);
};


// console.log(accesorioContainer)
// obteniendo de mi archivo db.json

const http = new XMLHttpRequest();

http.onload = () => {
    if (http.status === 200) {
        const data = JSON.parse(http.response);
        console.log(data);
        const accesorioContainer = document.getElementById("accesorios");
        data.forEach((accesorio) => {
            const nuevoAccesorioJson = nuevoAccesorio(accesorio.nombre, accesorio.imageUrl, accesorio.precio, accesorio.descripcion);
            accesorioContainer.appendChild(nuevoAccesorioJson);
        });
    } else {
        console.error("Error al obtener los datos del servidor.");
    }
};

//segun chat-gpt el problema esta en las url de los scripts, no lo hare ahora antes de mandar el repositorio a git porque estoy tarde, son las 1 AM en mi pais y debo levantarme a las 6 Am para alistarme a trabajar (Trabajo en un taller de mecanica como mecanico)