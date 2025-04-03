<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="sidebar">
        <h2>💖 Para María 💖</h2>
        <a href="#inicio">Inicio</a>
        <a href="#frases">Frases Bonitas</a>
        <a href="#mensajes">Mensajes de Amor</a>
        <a href="#quimica">Cosas de Química</a>
    </div>

    <div class="content">
        <section id="inicio" class="container">
            <h1>💘 Esta página es para María 💘</h1>
            <p class="big-text">Eres mi persona favorita en el mundo. Gracias por hacer mi vida más hermosa. 💖</p>
        </section>

        <section id="frases" class="container">
            <h2>🌹 Frases de Amor 🌹</h2>
            <p class="romantic-text">"Desde que te conocí, mi vida se llenó de colores y magia. Eres mi más bello destino." 💕</p>
            <p class="romantic-text">"Si el amor tuviera un nombre, sin duda llevaría el tuyo." 😘</p>
            <p class="romantic-text">"Cada día a tu lado es un regalo, cada momento contigo es inolvidable." ❤️</p>
            <p class="romantic-text">"Si me dieran a elegir entre respirar y amarte, usaría mi último aliento para decirte cuánto te amo." 💗</p>
        </section>

        <section id="mensajes" class="container">
            <h2>💌 Enviar Mensajes 💌</h2>
            <textarea id="mensaje" placeholder="Escribe un mensaje bonito para María..."></textarea>
            <button onclick="enviarMensajeAMaria()">Enviar a María 💖</button>
            <textarea id="mensajeParaMi" placeholder="María, escribe aquí tu mensaje para mí..."></textarea>
            <button onclick="enviarMensajeParaMi()">Enviar a Jeferson 💙</button>
        </section>

        <section id="quimica" class="container">
            <h2>🔬 Química para Ti 🔬</h2>
            <p>"El amor es como una reacción química: con la persona correcta, todo encaja a la perfección." 💕</p>
            <p>"Tú eres mi elemento favorito en esta tabla periódica de la vida." 🔥</p>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
