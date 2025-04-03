<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María ❤️</title>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js"></script>
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
</style>

</head>
<body>
    <div class="sidebar">
        <h2>💖 Para María 💖</h2>
        <a href="#inicio">Inicio</a>
        <a href="#frases">Frases Bonitas</a>
        <a href="#mensajes">Mensajes de Amor</a>
        <a href="#quimica">Cosas de Química</a>
        <a href="#fotos">Subir Fotos</a>
    </div><div class="content">
    <section id="fotos" class="container">
        <h2>📸 Subir Fotos 📸</h2>
        <input type="file" id="fileInput">
        <button onclick="subirFoto()">Subir Foto</button>
        <div id="imagenes"></div>
    </section>
</div>

<script>
    const firebaseConfig = {
        apiKey: "YQf0SIv_LbnIhN6-C_6t5bZaf01W8szQUcJiBsC2DZ0",
        authDomain: "tu-proyecto.firebaseapp.com",
        projectId: "tu-proyecto",
        storageBucket: "tu-proyecto.appspot.com",
        messagingSenderId: "",
        appId: ""
    };

    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();

    function subirFoto() {
        const file = document.getElementById("fileInput").files[0];
        if (!file) {
            alert("Selecciona una imagen primero.");
            return;
        }

        const storageRef = storage.ref("imagenes/" + file.name);
        storageRef.put(file).then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                mostrarImagen(url);
            });
        });
    }

    function mostrarImagen(url) {
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.margin = "10px";
        document.getElementById("imagenes").appendChild(img);
    }
</script>

</body>
</html>
