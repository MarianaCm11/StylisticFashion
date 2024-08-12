const express = require('express');
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const bodyParser = require('body-parser');
const rutasS = require('./routes/rutasTotal'); // Asegúrate de que esta ruta sea correcta

const app = express();

// Configuración de Multer para manejo de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Configuración de Middlewares
app.use(express.json()); // Para manejar datos JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true })); // Para manejar datos de formulario

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuración de sesiones
app.use(session({
    secret: 'h3Gz9Lk1wQn8Xs4Tp2Yr7Uv6Ej5aBm9Q', // Cambia esto por una cadena secreta única
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // En producción, deberías usar true si tu sitio usa HTTPS
}));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'web')));  // Esta línea sirve archivos estáticos desde la carpeta 'web'
app.use("/", rutasS);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
