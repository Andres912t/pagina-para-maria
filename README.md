<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(45deg, #ffb6c1, #ff69b4);
            color: #800020;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
        }.sidebar {
        width: 250px;
        background-color: #ff1493;
        padding: 20px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2);
    }

    .sidebar a {
        display: block;
        color: white;
        padding: 15px;
        text-decoration: none;
        font-size: 18px;
        margin: 5px 0;
        background-color: #ff85c0;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
    }

    .sidebar a:hover {
        background-color: #ff4081;
        transform: scale(1.1);
    }

    .content {
        margin-left: 270px;
        padding: 20px;
        flex: 1;
    }

    .container {
        background-color: #ffffff;
        padding: 20px;
        margin: 20px auto;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 800px;
        transition: transform 0.3s;
    }

    .container:hover {
        transform: scale(1.02);
    }
</style>

</head>
<body>
    <div class="sidebar">
        <a href="#inicio">Inicio</a>
        <a href="#frases">Frases Bonitas</a>
        <a href="#mensajes">Mensajes</a>
        <a href="#quimica">Química</a>
        <a href="#galeria">Galería</a>
        <a href="#canciones">Canciones para María</a>
    </div><div class="content">
    <div class="container" id="inicio">
        <h1>Bienvenida, María ❤️</h1>
        <p>Esta página está hecha con mucho amor para ti.</p>
    </div>

    <div class="container" id="frases">
        <h2>Frases Bonitas</h2>
        <p>"Eres la estrella que ilumina mi vida."</p>
        <p>"Cada momento a tu lado es un regalo."</p>
        <p>"Siempre serás mi persona favorita."</p>
    </div>

    <div class="container" id="mensajes">
        <h2>Mensajes en Tiempo Real</h2>
        <form id="messageForm">
            <input type="text" id="messageInput" placeholder="Escribe un mensaje...">
            <button type="submit">Enviar</button>
        </form>
    </div>

    <div class="container" id="quimica">
        <h2>Química para María</h2>
        <p>Sabías que el carbono es el elemento de la vida? Sin él, no existiríamos.</p>
        <p>La química es como el amor: una reacción entre dos elementos perfectos.</p>
    </div>

    <div class="container" id="galeria">
        <h2>Galería de Fotos</h2>
        <input type="file" id="fileInput" accept="image/*">
        <div id="preview"></div>
    </div>

    <div class="container" id="canciones">
        <h2>Canciones para María</h2>
        <p>Aquí tienes algunas canciones especiales para ti:</p>
        <ul>
            <li><a href="https://youtu.be/NoWqnjmh8KU?si=pF57ThDQGJtXP6V6" target="_blank">Canción 1</a></li>
            <li><a href="https://youtu.be/qWJMm0MaF8A?si=YVUN3gkhPriyi7wr" target="_blank">Canción 2</a></li>
        </ul>
    </div>
</div>

<script>
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let mensaje = document.getElementById('messageInput').value;
        alert('Mensaje enviado: ' + mensaje);
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100px';
                img.style.margin = '10px';
                document.getElementById('preview').appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });
</script>

</body>
</html>
