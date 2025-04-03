<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #ffe4e1;
            color: #800020;
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
    </style>
</head>
<body>
    <div class="sidebar">
        <h2>💖 Para María 💖</h2>
        <a href="#inicio">Inicio</a>
        <a href="#frases">Frases Bonitas</a>
        <a href="#mensajes">Mensajes de Amor</a>
        <a href="#quimica">Cosas de Química</a>
    </div><div class="content">
    <section id="subirImagen" class="container">
        <h2>📷 Sube una Imagen 📷</h2>
        <input type="file" id="fileInput">
        <button onclick="subirImagen()">Subir Imagen</button>
        <h3>Imagen subida:</h3>
        <img id="imagenMostrada" style="max-width: 100%; display: none;">
    </section>
</div>

<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";

    const firebaseConfig = {
        apiKey: "TU_API_KEY",
        authDomain: "TU_PROYECTO.firebaseapp.com",
        projectId: "TU_PROYECTO",
        storageBucket: "TU_PROYECTO.appspot.com",
        messagingSenderId: "TU_ID",
        appId: "TU_APP_ID",
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    window.subirImagen = function() {
        const file = document.getElementById('fileInput').files[0];
        if (!file) {
            alert("Selecciona una imagen primero.");
            return;
        }

        const storageRef = ref(storage, 'imagenes/' + file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            alert("Imagen subida con éxito");
            getDownloadURL(snapshot.ref).then((url) => {
                document.getElementById('imagenMostrada').src = url;
                document.getElementById('imagenMostrada').style.display = "block";
            });
        }).catch(error => {
            console.error("Error al subir la imagen:", error);
        });
    };
</script>

</body>
</html>
