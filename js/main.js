// PRODUCTOS
const productos = [
    // Tortas
    {
        id: "torta-01",
        titulo: "Chaja",
        imagen: "../img/Tortas/chaja-entera.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 8000
    },
    {
        id: "torta-02",
        titulo: "Cheesecake",
        imagen: "../img/Tortas/cheesecake-entera.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 7000
    },
    {
        id: "torta-03",
        titulo: "Concorde",
        imagen: "../img/Tortas/concorde-zoom.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 9000
    },
    {
        id: "torta-04",
        titulo: "Marquise",
        imagen: "../img/Tortas/marquise-entera.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 9000
    },
    {
        id: "torta-05",
        titulo: "Milhojas",
        imagen: "../img/Tortas/milhojas-zoom.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 10000
    },

    {
        id: "torta-06",
        titulo: "Pavlova",
        imagen: "../img/Tortas/pavlova-entera.jpg",
        categoria: {
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 7000
    },
    //Tartas
    {
        id: "Tarta-01",
        titulo: "Tarta Beni",
        imagen: "../img/Tartas/beni-zoom.jpg",
        categoria: {
            nombre: "Tartas",
            id: "tartas"
        },
        precio: 6000
    },
    {
        id: "Tarta-02",
        titulo: "Tarta de frutillas",
        imagen: "../img/Tartas/frutillas-entera.jpg",
        categoria: {
            nombre: "Tartas",
            id: "tartas"
        },
        precio: 7000
    },
    {
        id: "Tarta-03",
        titulo: "Tarta de Maracuya",
        imagen: "../img/Tartas/maracuya-zoom.jpg",
        categoria: {
            nombre: "Tartas",
            id: "tartas"
        },
        precio: 8000
    },
    {
        id: "Tarta-04",
        titulo: "Pasta frolla",
        imagen: "../img/Tartas/pasta-frolla-zoom.jpg",
        categoria: {
            nombre: "Tartas",
            id: "tartas"
        },
        precio: 6000
    },
    {
        id: "Tarta-05",
        titulo: "Peras y Almendras",
        imagen: "../img/Tartas/peras-almendras.jpg",
        categoria: {
            nombre: "Tartas",
            id: "tartas"
        },
        precio: 7000
    },
    //Pequeñas tentaciones
    {
        id: "Tentaciones-01",
        titulo: "Alfajor de chocolate",
        imagen: "../img/pequeñas tentaciones/alfajor-chocolate-zoom.jpg",
        categoria: {
            nombre: "Pequeñas Tentaciones",
            id: "tentaciones"
        },
        precio: 500
    },
    {
        id: "Tentaciones-02",
        titulo: "Alfajor de maicena",
        imagen: "../img/pequeñas tentaciones/alfajor-maicena.jpg",
        categoria: {
            nombre: "Pequeñas Tentaciones",
            id: "tentaciones"
        },
        precio: 500
    },
    {
        id: "Tentaciones-03",
        titulo: "Alfajor de nuez",
        imagen: "../img/pequeñas tentaciones/alfajor-nuez-zoom.jpg",
        categoria: {
            nombre: "Pequeñas Tentaciones",
            id: "tentaciones"
        },
        precio: 500
    },
    {
        id: "Tentaciones-04",
        titulo: "Bandeja de Masas",
        imagen: "../img/pequeñas tentaciones/bandeja-de-masas-zoom.jpg",
        categoria: {
            nombre: " PequeñasTentaciones",
            id: "tentaciones"
        },
        precio: 10000
    },
    {
        id: "Tentaciones-05",
        titulo: "Cuadrado de brownie",
        imagen: "../img/pequeñas tentaciones/brownie-zoom.jpg",
        categoria: {
            nombre: "Pequeñas Tentaciones",
            id: "tentaciones"
        },
        precio: 500
    },
    {
        id: "Tentaciones-05",
        titulo: "Cuadrado de Coco",
        imagen: "../img/pequeñas tentaciones/cuadrado-coco.jpg",
        categoria: {
            nombre: "Pequeñas Tentaciones",
            id: "tentaciones"
        },
        precio: 500
    },
];

const contenedorProductos = document.querySelector('#contenedorProductos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('producto-agregar');
const numerito = document.querySelector('#numerito');

botonesCategorias.forEach(boton => boton.addEventListener('click', ()=> {
    MediaStreamAudioDestinationNode.classList.remove('aside-visible');
}))

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = '';

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-nombre">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton=>{
    boton.addEventListener('click', (e)=>{

        botonesCategorias.forEach(boton=> boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if(e.currentTarget.id != 'todos'){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = 'Todos los productos';
            cargarProductos(productos);
        }
    })
})
function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton=> {
        boton.addEventListener('click', agregarAlCarrito);
    });
}
let productosEnCarrito;


const productosEnCarritoLS = localStorage.getItem('productos-en-carrito');

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}