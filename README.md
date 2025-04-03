<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"></script>
    <style>
        body {
            background: linear-gradient(to right, #f8b7d0, #f9c2d7, #ff9bb6);
            font-family: 'Arial', sans-serif;
            text-align: left;
            color: #ffffff;
            display: flex;
            margin: 0;
            padding: 0;
        }
        .sidebar {
            width: 250px;
            background: rgba(255, 90, 140, 0.9);
            padding: 20px;
            position: fixed;
            height: 100vh;
            overflow: auto;
            border-radius: 0 20px 20px 0;
        }
        .sidebar h2 {
            text-align: center;
            color: #fff;
            font-size: 1.5em;
            font-weight: bold;
        }
        .sidebar a {
            display: block;
            padding: 12px;
            margin: 10px 0;
            background: #fff;
            color: #ff4e50;
            text-decoration: none;
            text-align: center;
            border-radius: 15px;
            font-weight: bold;
        }
        .sidebar a:hover {
            background: #ff4e50;
            color: white;
        }
        .content {
            margin-left: 270px;
            width: calc(100% - 270px);
            padding: 40px;
            background: rgba(255, 255, 255, 0.8);
            height: 100vh;
            overflow-y: auto;
        }
        h1, h2 {
            color: #ff4e50;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .container {
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
        }
        input[type="file"] {
            margin-top: 10px;
        }
        #preview {
            margin-top: 20px;
            max-width: 100%;
            border-radius: 10px;
        }
        .heart {
            color: red;
            font-size: 1.5em;
            animation: heartbeat 1s infinite;
        }
        @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <h2>🌸 Para María 🌸</h2>
        <a href="#frases">💖 Frases de amor</a>
        <a href="#recuerdos">📸 Nuestros recuerdos</a>
        <a href="#quimica">🧪 Tu pasión por la química</a>
        <a href="#mensaje">✉️ Enviar mensaje</a>
    </div>
    <div class="content">
        <div class="container">
            <h1>Para mi hermosa María ❤️</h1>
            <p>Mi amor por ti es infinito, cada día contigo es un regalo del cielo. 💕</p>
            <p class="heart">❤️</p>
        </div>
        <div class="container" id="frases">
            <h2>Frases de amor 💖</h2>
            <p>✨ "Cada momento contigo es un sueño hecho realidad."</p>
            <p>✨ "Tu sonrisa ilumina mi vida y cada día que paso contigo me siento más afortunado."</p>
            <p>✨ "Eres el sol que ilumina mis días más oscuros. Te amo con todo mi corazón."</p>
        </div>
        <div class="container" id="recuerdos">
            <h2>Nuestros Recuerdos 📸</h2>
            <p>Sube nuestras fotos y guárdalas para siempre en este lugar especial:</p>
            <input type="file" accept="image/*" id="fileInput">
            <br>
            <img id="preview" src="" alt="Vista previa de la imagen" style="display:none;">
        </div>
        <div class="container" id="quimica">
            <h2>🧪 Tu pasión por la química 🧪</h2>
            <p>La química es más que una ciencia, es un reflejo de nuestra conexión. Me encanta ver cómo te apasionas por todo lo que haces. 💕</p>
        </div>
        <div class="container" id="mensaje">
            <h2>✉️ Enviar mensaje</h2>
            <form action="mailto:tu_correo@ejemplo.com" method="post" enctype="text/plain">
                <textarea name="mensaje" rows="5" cols="50" placeholder="Escribe tu mensaje aquí..."></textarea><br>
                <input type="submit" value="Enviar mensaje">
            </form>
        </div>
    </div>

    <script>
        const firebaseConfig = {
            apiKey: "TU_API_KEY",
            authDomain: "TU_PROYECTO.firebaseapp.com",
            projectId: "TU_PROYECTO",
            storageBucket: "TU_PROYECTO.appspot.com",
            messagingSenderId: "TU_MENSAJERIA_ID",
            appId: "TU_APP_ID"
        };

        firebase.initializeApp(firebaseConfig);
        const storage = firebase.storage();

        document.getElementById("fileInput").addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById("preview").src = e.target.result;
                    document.getElementById("preview").style.display = "block";
                };
                reader.readAsDataURL(file);

                const storageRef = storage.ref("imagenes/" + file.name);
                storageRef.put(file).then(() => {
                    alert("Imagen subida exitosamente");
                    storageRef.getDownloadURL().then(url => {
                        document.getElementById("preview").src = url;
                    });
                });
            }
        });
    </script>
</body>
</html>
