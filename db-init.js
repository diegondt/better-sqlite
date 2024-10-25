const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Ruta al archivo .sql
const sqlFilePath = path.join(__dirname, 'usuarios.sql'); // __dirname es la carpeta del script actual

// Leer el contenido del archivo .sql
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Crear una nueva base de datos o abrir una existente
const db = new Database('database.db');

// Ejecutar el script SQL
db.exec(sql);
console.log('Base de datos inicializada correctamente.');
db.close();