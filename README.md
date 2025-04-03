<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María</title>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"></script>
    <style>
        body {
            background: linear-gradient(to right, #ff9a9e, #fad0c4);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            text-align: center;
            color: #fff;
        }
        h1 {
            color: #ff4e50;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .container {
            width: 90%;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 20px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            position: relative;
        }
        input[type="file"] {
            margin-top: 10px;
        }
        #preview {
            margin-top: 20px;
            max-width: 100%;
            border-radius: 10px;
        }
        .hearts {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            overflow: hidden;
        }
        .heart {
            position: absolute;
            width: 30px;
            height: 30px;
            background: url('https://i.imgur.com/oNDo7VF.png') no-repeat center;
            background-size: contain;
            animation: float 4s linear infinite;
        }
        @keyframes float {
            0% { transform: translateY(100vh) scale(0.5); opacity: 1; }
            100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
    </style>
</head>
<body>
    <div class="hearts"></div>
    <div class="container">
        <h1>Para mi hermosa María ❤️</h1>
        <p>Eres la mejor persona del mundo, la más tierna, inteligente y maravillosa. Te amo con todo mi corazón. 💖</p>
        <h2>Nuestros Recuerdos 📸</h2>
        <p>Sube aquí nuestras fotos y guárdalas para siempre:</p>
        <input type="file" accept="image/*" id="fileInput">
        <br>
        <img id="preview" src="" alt="Vista previa de la imagen" style="display:none;">
    </div><script>
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

    function createHearts() {
        const heartContainer = document.querySelector('.hearts');
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heartContainer.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 4000);
        }
    }
    setInterval(createHearts, 500);
</script>

</body>
</html>
