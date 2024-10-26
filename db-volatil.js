// database.js
const Database = require('better-sqlite3');
const crypto = require('crypto');
const fs = require('fs');
const { readUser } = require('./crud');

const db = new Database(':memory:');
db.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
db.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");

const user = readUser('admin');
console.log(user);

