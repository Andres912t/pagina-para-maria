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
        }.sidebar {
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
<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDUesPIr1jfoZG0gC104SbxS_Ha3fnDBFo",
        authDomain: "pagina-web-maria-1617f.firebaseapp.com",
        projectId: "pagina-web-maria-1617f",
        storageBucket: "pagina-web-maria-1617f.appspot.com",
        messagingSenderId: "97743837037",
        appId: "1:97743837037:web:9ed480cb30a0f71bbb6c64",
        measurementId: "G-217XW7J9D4"
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    window.uploadImage = async function () {
        const folderName = document.getElementById('folderName').value;
        const file = document.getElementById('fileInput').files[0];
        if (!folderName || !file) {
            alert("Debes ingresar un nombre de carpeta y seleccionar un archivo.");
            return;
        }
        const storageRef = ref(storage, `${folderName}/${file.name}`);
        await uploadBytes(storageRef, file);
        alert("Imagen subida correctamente en la carpeta " + folderName);
    };
</script>

</head>
<body>
    <div class="sidebar">
        <h2>💖 Para María 💖</h2>
        <a href="#inicio">Inicio</a>
        <a href="#frases">Frases Bonitas</a>
        <a href="#mensajes">Mensajes de Amor</a>
        <a href="#quimica">Cosas de Química</a>
        <a href="#subir">Subir Fotos</a>
    </div><div class="content">
    <section id="inicio" class="container">
        <h1>💘 Esta página es para María 💘</h1>
        <p class="big-text">Eres mi persona favorita en el mundo. Gracias por hacer mi vida más hermosa. 💖</p>
    </section>

    <section id="subir" class="container">
        <h2>📷 Subir Fotos 📷</h2>
        <input type="text" id="folderName" placeholder="Nombre de la carpeta">
        <input type="file" id="fileInput">
        <button onclick="uploadImage()">Subir Imagen</button>
    </section>
</div>

</body>
</html>
