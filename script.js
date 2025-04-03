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
