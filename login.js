// En app.js
const session = require('express-session');

app.use(session({
secret: 'tu_secreto',
resave: false,
saveUninitialized: true
}));

// Función middleware para proteger páginas
const secured = (req, res, next) => {
if (req.session.id_usuario) {
next();
} else {
res.redirect('/admin/login');
}
};

// Uso en rutas privadas
app.get('/admin/novedades', secured, (req, res) => {
// renderizar página privada
});

// routes/admin/login.js
const express = require('express');
const router = express.Router();
const usuariosModel = require('../../models/usuariosModel');
const md5 = require('md5');

router.get('/login', (req, res) => {
res.render('admin/login');
});

router.post('/login', async (req, res) => {
const { usuario, password } = req.body;
const passwordEncriptado = md5(password);
const usuarioDB = await usuariosModel.getUsuario(usuario, passwordEncriptado);

if (usuarioDB !== undefined) {
req.session.id_usuario = usuarioDB.id_usuario;
req.session.nombre = usuarioDB.nombre;
res.redirect('/admin/novedades');
} else {
res.render('admin/login', { error: 'Credenciales incorrectas' });
}
});

// Ruta para logout
router.get('/logout', (req, res) => {
req.session.destroy();
res.redirect('/admin/login');
});