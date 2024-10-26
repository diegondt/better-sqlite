const Database = require('better-sqlite3');
const crypto = require('crypto');
const fs = require('fs');
const { readUser, createUser, updateUser, deleteUser } = require('./crud');

let db_aux = null;
if(!fs.existsSync('database.db')){
    db_aux = new Database('database.db');
    db_aux.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('pikachu', '04dac8afe0ca501587bad66f6b5ce5ad')");
} else {
    db_aux = new Database('database.db');
}

const db = db_aux;

const user = readUser(db,'admin');
console.log(user);