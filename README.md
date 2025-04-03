<!DOCTYPE html><html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para María</title>
    <style>
        body {
            background-color: pink;
            font-family: Arial, sans-serif;
            text-align: center;
            color: #333;
        }
        h1 {
            color: #d63384;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input[type="file"] {
            margin-top: 10px;
        }
        #preview {
            margin-top: 20px;
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Esta página es para María</h1>
        <p>María, eres una persona increíble. Gracias por ser tan especial y hermosa. Esta página es solo para ti.</p>
        <h2>Nuestros Recuerdos</h2>
        <p>Aquí puedes adjuntar fotos de nosotros y de tus cosas favoritas de química:</p>
        <input type="file" accept="image/*" id="fileInput">
        <br>
        <img id="preview" src="" alt="Vista previa de la imagen" style="display:none;">
    </div><script>
    document.getElementById("fileInput").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.getElementById("preview");
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
</script>

</body>
</html>
