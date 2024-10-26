const Database = require('better-sqlite3');
const { readUser, createUser, updateUser, deleteUser } = require('./crud');

const db = new Database('database.db');
db.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
db.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");