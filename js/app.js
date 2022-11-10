
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

let carrito2 = JSON.parse(localStorage.getItem("carrito"));

fetch("./json/data.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        for (const productoData of data) {
            let content = document.createElement("div");
            content.className = "card";
            content.innerHTML = `
            <img src="${productoData.img}">
            <h3>${productoData.nombre}</h3>
            <p class="price">${productoData.precio} $</p>
            
    
        `;
            shopContent.append(content);

            let comprar = document.createElement("button")
            comprar.innerText = "añadir";
            comprar.className = "añadir-carrito"
            content.append(comprar);

            comprar.addEventListener("click", () => {

                const repeat = carrito.some((repeatProduct) => repeatProduct.id === productoData.id);

                if (repeat) {
                    carrito.map((prod) => {
                        if (prod.id === productoData.id) {
                            prod.cantidad++;
                        }
                    });
                } else {
                    carrito.push({
                        id: productoData.id,
                        img: productoData.img,
                        nombre: productoData.nombre,
                        precio: productoData.precio,
                        cantidad: productoData.cantidad,
                    });
                    console.log(carrito);
                    carritoCounter();
                    saveLocal();
                }
            });
        }
    });

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};




