/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({nombre, precio});
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombre} ha sido agregado al carrito.`);
}

// Mostrar el carrito
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoModal = document.getElementById('carritoModal');
    const carritoContenido = document.getElementById('carritoContenido');

    carritoContenido.innerHTML = ''; // Limpiar contenido anterior

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach((producto, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                            <span>${producto.nombre} - $${producto.precio}</span>
                            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
                        `;
            carritoContenido.appendChild(itemDiv);
        });
    }

    carritoModal.classList.add('show');
}

// Cerrar el carrito
function cerrarCarrito() {
    document.getElementById('carritoModal').classList.remove('show');
}

// Vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Eliminar un producto del carrito
function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}
   
   function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenidoCarrito = '<h3>Productos en tu carrito:</h3>';
    
    if (carrito.length === 0) {
        contenidoCarrito += '<p>No hay productos en el carrito.</p>';
    } else {
        carrito.forEach(item => {
            contenidoCarrito += `<p>${item.nombre} - $${item.precio}</p>`;
        });
    }
    
    contenidoCarrito += '<button onclick="cerrarCarrito()">Cerrar</button>';
    document.getElementById('popupCarrito').innerHTML = contenidoCarrito;
    document.getElementById('popupCarrito').style.display = 'block';
}

function cerrarCarrito() {
    document.getElementById('popupCarrito').style.display = 'none';
}