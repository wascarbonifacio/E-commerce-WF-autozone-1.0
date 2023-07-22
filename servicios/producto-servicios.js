//get

const listaAccesorios = ()=>{
    fetch("http://localhost:3000/accesorios")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

export const productoServicios={
    listaAccesorios
}