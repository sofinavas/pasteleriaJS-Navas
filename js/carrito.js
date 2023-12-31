let productosEnCarrito = localStorage.getItem('productos-en-carrito');
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector('#carrito-acciones-vaciar');
const contenedorTotal = document.querySelector('#total')
const botonComprar = document.querySelector('#carrito-acciones-comprar');

function cargarProductosCarrito() {

  if (productosEnCarrito && productosEnCarrito.length > 0) {

    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');
    contenedorCarritoComprado.classList.add('disabled');

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {

      const div = document.createElement('div');
      div.classList.add('carrito-producto');
      div.innerHTML = `
          <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="carrito-producto-nombre">
            <small>Producto</small>
            <h3>${producto.titulo}</h3>
          </div>
          <div class="carrrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
          </div>
          <div class="carrrito-producto-precio">
            <small>Precio</small>
            <p>$${producto.precio}</p>
          </div>
          <div class="carrrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
          </div>
          <button class="carrito-producto-eliminar" id='${producto.id}'><i class="bi bi-trash-fill"></i></button>
    `;
      contenedorCarritoProductos.append(div);
    })

    actualizarBotonesEliminar();
    actualizarTotal();

  } else {

    contenedorCarritoVacio.classList.remove('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.add('disabled');
  }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

  botonesEliminar.forEach(boton => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  Toastify({
    text: "Producto eliminado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #c34262, rgba(248, 244, 244, 0.8))",
        borderRadius: "1.5rem",
        textTransform: "uppercase",
        fontSize: ".75rem",
    },
    onClick: function(){} // Callback after click
}).showToast();

  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

  localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
  Swal.fire({
    title: 'Estas seguro?',
    text: "Los productos serán eliminados del carrito.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#c34262',
    cancelButtonColor: 'rgb(117, 117, 117)',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      productosEnCarrito.length = 0;
      localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
      cargarProductosCarrito();
      Swal.fire(
        'Eliminado',
        'El carrito está vacío',
        'success'
      )
    }
  })
  
}

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  total.innerText = `$${totalCalculado}`;
}


botonComprar.addEventListener('click', comprarCarrito);
function comprarCarrito() {

  productosEnCarrito.length = 0;
  localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));

  contenedorCarritoVacio.classList.add('disabled');
  contenedorCarritoProductos.classList.add('disabled');
  contenedorCarritoAcciones.classList.add('disabled');
  contenedorCarritoComprado.classList.remove('disabled');
}