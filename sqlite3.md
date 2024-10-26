# SQLite3

## CLI

```bash
sqlite3 # lanzar la consola de SQLite
.help # ayuda
.read database.sql # ejecutar un archivo SQL
.tables # listar las tablas
.schema users # ver la estructura de la tabla users
sqlite3 database.db # abrir una base de datos
sqlite3 database.db .dump > database.sql # exportar la base de datos a un archivo SQL
sqlite3 database.db < database.sql # importar la base de datos desde un archivo SQL
.exit # salir
```

## Sintaxis SQL

```sql
CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT);
INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055');
INSERT INTO users (user, password) VALUES ('user', '21232f297a57a5a743894a0e4a801fc3');
SELECT * FROM users WHERE user = 'admin' AND password = '81dc9bdb52d04dc20036dbd8313ed055';
UPDATE users SET password = 'password' WHERE user = 'user';
DELETE FROM users WHERE user = 'user';
```

## Node.js

### sqlite3

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
  db.run("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");
  db.run("INSERT INTO users (user, password) VALUES ('user', '21232f297a57a5a743894a0e4a801fc3')");

  db.each("SELECT * FROM users", (err, row) => {
    console.log(row);
  });
});

db.close();
```

### better-sqlite3

```javascript
const Database = require('better-sqlite3');
const db = new Database('database.db');

const stmt = db.prepare('SELECT * FROM users WHERE user = ? AND password = ?');
const user = stmt.get('admin', '81dc9bdb52d04dc20036dbd8313ed055');
console.log(user);
``` 