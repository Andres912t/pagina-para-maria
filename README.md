<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #ffe4e1; /* Color romántico */
            color: #800020; /* Rojo vino para el texto */
            margin: 0;
            padding: 0;
            display: flex;
        }

        .sidebar {
            width: 250px;
            background-color: #ff69b4;
            padding: 20px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
        }

        .sidebar h2 {
            color: #fff;
            text-align: center;
        }

        .sidebar a {
            display: block;
            color: white;
            padding: 10px;
            text-decoration: none;
            margin: 10px 0;
            text-align: center;
            border-radius: 8px;
            background-color: #ff1493;
        }

        .sidebar a:hover {
            background-color: #ff85c0;
        }

        .content {
            margin-left: 270px;
            padding: 20px;
        }

        .container {
            background-color: #ffffff;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
            color: #ff1493;
            text-align: center;
        }

        .big-text {
            font-size: 24px;
            text-align: center;
            font-weight: bold;
        }

        .romantic-text {
            font-size: 20px;
            font-style: italic;
            text-align: center;
            color: #ff007f;
        }

        textarea {
            width: 100%;
            height: 80px;
            border: 2px solid #ff69b4;
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
        }

        button {
            display: block;
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            background-color: #ff1493;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
        }

        button:hover {
            background-color: #ff85c0;
        }
    </style>
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

    <script>
        // Enviar mensaje a María
        function enviarMensajeAMaria() {
            let mensaje = document.getElementById('mensaje').value;
            let numeroMaria = "573145954548"; // Número de María

            if (mensaje.trim() !== '') {
                let url = `https://wa.me/${numeroMaria}?text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
            } else {
                alert("Escribe un mensaje antes de enviarlo.");
            }
        }

        // Enviar mensaje a Jeferson
        function enviarMensajeParaMi() {
            let mensaje = document.getElementById('mensajeParaMi').value;
            let numeroJeferson = "573174118938"; // Tu número

            if (mensaje.trim() !== '') {
                let url = `https://wa.me/${numeroJeferson}?text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
            } else {
                alert("Escribe un mensaje antes de enviarlo.");
            }
        }
    </script>
</body>
</html>
