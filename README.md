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
        h1, h2 { text-align: center; color: #ff1493; }
        button { background-color: #ff1493; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; }
        button:hover { background-color: #ff85c0; }
        img { max-width: 100%; border-radius: 10px; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="sidebar">
        <h2>💖 Para María 💖</h2>
        <a href="#inicio">Inicio</a>
        <a href="#subir-fotos">Subir Fotos</a>
    </div><div class="content">
    <section id="inicio" class="container">
        <h1>💘 Esta página es para María 💘</h1>
    </section>

    <section id="subir-fotos" class="container">
        <h2>📷 Subir Fotos 📷</h2>
        <input type="file" id="fileInput" accept="image/*">
        <button onclick="subirImagen()">Subir Imagen</button>
        <div id="imagenesSubidas"></div>
    </section>
</div>

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

    window.subirImagen = async function () {
        const file = document.getElementById('fileInput').files[0];
        if (!file) return alert("Selecciona una imagen primero");
        
        const storageRef = ref(storage, 'imagenes/' + file.name);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.getElementById('imagenesSubidas').appendChild(imgElement);
    }
</script>

</body>
</html>
