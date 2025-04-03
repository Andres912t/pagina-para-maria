<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"></script>
    <style>
        body {
            background: linear-gradient(to right, #ffecd2, #fcb69f, #ff9a8b);
            font-family: 'Arial', sans-serif;
            text-align: left;
            color: #fff;
            display: flex;
        }
        .sidebar {
            width: 250px;
            background: rgba(255, 100, 150, 0.9);
            padding: 20px;
            position: fixed;
            height: 100vh;
            overflow: auto;
            border-radius: 0 20px 20px 0;
        }
        .sidebar h2 {
            text-align: center;
        }
        .sidebar a {
            display: block;
            padding: 10px;
            margin: 10px 0;
            background: #fff;
            color: #ff4e50;
            text-decoration: none;
            text-align: center;
            border-radius: 10px;
            font-weight: bold;
        }
        .sidebar a:hover {
            background: #ff4e50;
            color: white;
        }
        .content {
            margin-left: 270px;
            width: 70%;
            padding: 20px;
        }
        h1 {
            color: #ff4e50;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .container {
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }
        input[type="file"] {
            margin-top: 10px;
        }
        #preview {
            margin-top: 20px;
            max-width: 100%;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <h2>🌸 Para María 🌸</h2>
        <a href="#frases">💖 Frases para ti</a>
        <a href="#recuerdos">📸 Nuestros Recuerdos</a>
        <a href="#quimica">🧪 Tu pasión por la química</a>
    </div>
    <div class="content">
        <div class="container">
            <h1>Para mi hermosa María ❤️</h1>
            <p>Eres mi razón de ser, la persona que ilumina mis días. No hay palabras suficientes para expresar cuánto te amo. 💕</p>
        </div>
        <div class="container" id="frases">
            <h2>Frases para ti 💖</h2>
            <p>✨ "Eres mi sueño hecho realidad."
            <p>✨ "Tu sonrisa es mi sol en días nublados."
            <p>✨ "Cada segundo contigo es un regalo del cielo."
        </div>
        <div class="container" id="recuerdos">
            <h2>Nuestros Recuerdos 📸</h2>
            <p>Sube aquí nuestras fotos y guárdalas para siempre:</p>
            <input type="file" accept="image/*" id="fileInput">
            <br>
            <img id="preview" src="" alt="Vista previa de la imagen" style="display:none;">
        </div>
        <div class="container" id="quimica">
            <h2>🧪 Tu pasión por la química 🧪</h2>
            <p>"La química es como el amor, no se ve pero se siente en el corazón." 💕</p>
            <p>Te admiro por tu inteligencia y pasión por la ciencia. Eres increíble en todo lo que haces. 💖</p>
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
        };firebase.initializeApp(firebaseConfig);
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
