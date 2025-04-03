// Función para subir imágenes y mostrarlas
function subirFoto() {
    let input = document.getElementById('fileInput');
    let galeria = document.getElementById('galeria');

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '150px';
            img.style.margin = '10px';
            galeria.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Función para enviar mensajes
function enviarMensaje() {
    let mensajeInput = document.getElementById('mensaje');
    let listaMensajes = document.getElementById('listaMensajes');

    if (mensajeInput.value.trim() !== '') {
        let nuevoMensaje = document.createElement('p');
        nuevoMensaje.innerText = mensajeInput.value;
        nuevoMensaje.style.padding = '10px';
        nuevoMensaje.style.background = '#ffd6e0';
        nuevoMensaje.style.borderRadius = '10px';
        listaMensajes.appendChild(nuevoMensaje);
        mensajeInput.value = '';
    }
}
