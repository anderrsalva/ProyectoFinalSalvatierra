
const btnFinCompra = document.querySelector("#botonFinalizar");
btnFinCompra.addEventListener("click", alertaFinal);

function alertaFinal(e) {
  e.preventDefault();
  swal({
    position: 'top-center',
    icon: 'success',
    title: 'Tu compra y pago ha sido realizado con éxito. ',
    showConfirmButton: false,
    timer: 4500
  })
    .then(function () {
      window.location.href = "../index.html";
      localStorage.clear();
    })
}

const storage = JSON.parse(localStorage.getItem("carrito"));

const carritoCounterForm = () => {
  cantidadCarrito.style.display = "block";
  const carritoLength = storage.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounterForm();
