// Función para saludar al usuario
    function saludar() {
        var nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
        alert("¡Es un gusto tenerte aquí, " + nombre + "!");
    }

    // Array que almacena los productos en el carrito
    const carrito = [];

    // Función para agregar productos al carrito
    function agregarAlCarrito() {
        const producto = prompt("Ingrese el nombre del producto:");
        const cantidad = parseInt(prompt("Ingrese la cantidad:"));
        const precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (producto && !isNaN(precio) && !isNaN(cantidad)) {
            carrito.push({ producto, cantidad, precio });
            alert("Producto agregado correctamente");
        } else {
            alert("El producto no pudo ser agregado correctamente");
        }
    }

    // Función para mostrar el carrito en el DOM
    function verCarrito() {
        let total = 0;
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.innerHTML = "<h2>Carrito de Compras</h2>";

        carrito.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;

            const productoInfo = `${index + 1}. ${item.producto} - Cantidad: ${item.cantidad} - Subtotal: $${subtotal}`;
            const productoElement = document.createElement('p');
            productoElement.textContent = productoInfo;
            carritoContainer.appendChild(productoElement);
        });

        const totalElement = document.createElement('p');
        totalElement.textContent = `Total: $${total}`;
        carritoContainer.appendChild(totalElement);
    }

