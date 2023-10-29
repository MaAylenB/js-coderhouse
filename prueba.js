function saludar() {
    var reply = prompt("Buenas ¿cuál es tu nombre?", "")
    alert ( "Es un gusto tenerte aquí " + reply + "!")
}

const carrito = [];

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

function verCarrito() {
    let total = 0;
    console.log("Carrito de Compras:");
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        console.log(`${index + 1}. ${item.producto} - Cantidad: ${item.cantidad} - Subtotal: $${subtotal}`);
    });
    console.log(`Total: $${total}`);
}