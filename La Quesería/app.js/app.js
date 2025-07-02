require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return new Date(date).toLocaleDateString();
        }
    }
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

async function conexionDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Conectado a la base de datos');
        return connection;
    } catch (error) {
        console.error('Error en la conexión:', error);
        throw error;
    }
}

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const routes = require('./routes/index')(transporter);
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor ejecutándose en puerto ${port}`);
});