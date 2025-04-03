<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página para María</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="sidebar">
        <h2>Para María</h2>
        <a href="#inicio">Inicio</a>
        <a href="#fotos">Nuestras Fotos</a>
        <a href="#mensajes">Mensajes</a>
        <a href="#quimica">Química</a>
    </div>

    <div class="content">
        <section id="inicio" class="container">
            <h1>Esta página es para María ❤️</h1>
            <p>Eres lo mejor que me ha pasado en la vida. Te amo mucho 💖</p>
        </section>

        <section id="fotos" class="container">
            <h2>Nuestras Fotos 📸</h2>
            <input type="file" id="fileInput">
            <button onclick="subirFoto()">Subir Foto</button>
            <div id="galeria"></div>
        </section>

        <section id="mensajes" class="container">
            <h2>Mensajes de Amor 💌</h2>
            <textarea id="mensaje" placeholder="Escribe algo bonito..."></textarea>
            <button onclick="enviarMensaje()">Enviar</button>
            <div id="listaMensajes"></div>
        </section>

        <section id="quimica" class="container">
            <h2>Química que te gusta ⚗️</h2>
            <p>La química orgánica e inorgánica tienen algo en común: ambas son tan maravillosas como tú ❤️.</p>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
