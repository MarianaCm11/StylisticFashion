const express = require('express');
const BaseBD = require('../bd/BaseBD');
const bcrypt = require("bcrypt");
const multer = require('multer');
const path = require('path');
const { error } = require('console');
const ruta = express.Router();
const baseBD = new BaseBD();

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta de destino para los archivos subidos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo con la extensión
    }
});


const upload = multer({ storage: storage });

// Middleware para hacer `usuario` disponible en todas las vistas
ruta.use((req, res, next) => {
    res.locals.usuario = req.session.usuario || null;
    next();
});

ruta.get("/", (req, res) => {
    res.render("menu");
});

ruta.get("/inicio", (req, res) => {
    res.render("inicio");
});

ruta.get('/ropa', async (req, res) => {
    const usuarioId = req.session.userId;
    if (!usuarioId) {
        return res.redirect('/'); // Redirige a la raíz si no hay usuario en sesión
    }

    try {
        const usuario = await baseBD.obtenerUsuarioPorId(usuarioId);
        if (!usuario) {
            return res.redirect('/'); // Redirige a la raíz si el usuario no se encuentra
        }

        res.render('ropa', { usuario });
    } catch (error) {
        console.error("Error obteniendo el usuario:", error.message);
        res.status(500).send('Error al obtener el perfil');
    }
});


ruta.get("/favoritos", (req, res) => {
    res.render("favoritos");
});

ruta.post("/register", async (req, res) => {

    const { usuario, correo, contrasena } = req.body;
    console.log("Correo:", correo); // Verifica que el correo se recibe
    console.log("Contraseña:", contrasena); // Verifica que la contraseña se recibe
    try {
        if (!usuario || !correo || !contrasena) {
            console.log("Faltan datos necesarios para el registro");
            return res.status(400).send('Faltan datos necesarios');
        }
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const resultado = await baseBD.registrarUsuario(usuario, correo, contrasena);
        if (resultado) {
            req.session.userId = resultado.insertId; // Asigna el ID del nuevo usuario a la sesión
            res.redirect("/ropa");
        } else {
            res.status(500).send('Error al registrar el usuario');
        }
    } catch (error) {
        console.error("Error registrando el usuario:", error.message);
        res.status(500).send('Error al registrar el usuario');
    }

});


ruta.post("/login", async (req, res) => {
    // const { correo, contrasena } = req.body;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;

    console.log("Correo:", correo); // Verifica que el correo se recibe
    console.log("Contraseña:", contrasena); // Verifica que la contraseña se recibe
    try {
        const usuarios = await baseBD.obtenerUsuarioPorCorreo(correo);
        if (usuarios.length === 0) {
            console.log("Correo o contraseña incorrectos");
            return res.redirect('/');
        }

        const usuario = usuarios[0];
        const esContrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
        console.log('Contraseña ingresada:', contrasena);
        console.log('Hash almacenado:', usuario.contrasena);
        console.log('Contraseña válida:', esContrasenaValida);
        if (!esContrasenaValida) {
            console.log("Correo o contraseña incorrectos", error.message);
            return res.redirect('/');
        }

        req.session.userId = usuario.id; // Asigna el ID del usuario a la sesión
        req.session.usuario = usuario;

        console.log("Inicio de sesión exitoso");
        res.redirect("/ropa");
    } catch (error) {
        console.error("Error obteniendo el usuario:", error);
        res.redirect('/');
    }
});



ruta.get('/editar-perfil/:id', async (req, res) => {
    const { id } = req.params;
    console.log("ID del usuario:", id);
    try {
        const usuario = await baseBD.obtenerUsuarioPorId(id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.render('editar', { usuario }); // Asegúrate de pasar `usuario` aquí
    } catch (error) {
        console.error("Error obteniendo el perfil:", error.message);
        res.status(500).send("Error obteniendo el perfil");
    }
});

ruta.post("/editar-perfil/:id", upload.single('foto'), async (req, res) => {
    const userId = req.params.id;
    const { usuario, correo, contrasena } = req.body;
    let fotoRuta = req.file ? `/uploads/${req.file.filename}` : null;

    console.log('req.body:', req.body);
    console.log('req.file:', req.file);

    if (!usuario || !correo) {
        console.log('Faltan datos necesarios para la edición del perfil');
        return res.status(400).send('Faltan datos necesarios');
    }

    try {
        const resultado = await baseBD.actualizarPerfil(userId, usuario, correo, contrasena, fotoRuta);

        /*if (resultado) {
            req.session.destroy(err => {
                if (err) {
                    console.error('Error al destruir la sesión:', err);
                    return res.status(500).send('Error al destruir la sesión');
                } else {
                   // Redirige al usuario a la página de inicio
                }
            });
        } else {
            res.status(500).send('Error al actualizar el perfil');
        }*/

            res.redirect(`/editar-perfil/${userId}`); 
    } catch (error) {
        console.error('Error actualizando el perfil:', error.message);
        res.status(500).send('Error al actualizar el perfil');
    }
});





const hash = '$2b$10$U.qXcA02Il95LJeVXOHPuO.M3N90zSvsAEVNbPp.31FVatxGfWENG';
const passwordToCheck = '12345678';


bcrypt.compare(passwordToCheck, hash, function (err, result) {
    if (err) throw err;
    console.log(result); // true si las contraseñas coinciden, false si no coinciden
});

module.exports = ruta;
