# SQLite

SQLite nos permite crear bases de datos sin necesidad de un servidor que las gestione, ya que todo se almacena en un único archivo. Es muy útil para aplicaciones de escritorio o móviles, donde no necesitamos concurrencia y la cantidad de datos es mediana.

## SQLite en Nodejs

Podemos trabajar con el paquete `better-sqlite3` de npm. Instalalo con `npm install better-sqlite3`.

### Crear una base de datos en memoria

Cuando creamos una base de datos en memoria, esta se elimina cuando el proceso de Nodejs termina.

```javascript
const Database = require('better-sqlite3');
const db = new Database(':memory:');
db.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
db.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");
```

### Crear una base de datos persistente

Para crear una base de datos persistente, simplemente pasamos el nombre del archivo de la base de datos. Si no existe, se creará.

```javascript
const Database = require('better-sqlite3');

const db = new Database('database.db');
db.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
db.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");
```

### Consultar datos (get)

`better-sqlite3` nos permite hacer consultas de forma segura, evitando inyecciones SQL.

```javascript
const Database = require('better-sqlite3');
const db = new Database('database.db');

const stmt = db.prepare('SELECT * FROM users WHERE user = ? AND password = ?');
const user = stmt.get('admin', '81dc9bdb52d04dc20036dbd8313ed055');
console.log(user);
```

Cuando usamos `prepare`, `better-sqlite3` se encarga de escapar los valores que pasamos como parámetros.

Si queremos obtener todos los registros, podemos usar `all` en lugar de `get`.

Para cualquier otro tipo de consulta, usamos `run`.


### Actualizar datos

```javascript
const Database = require('better-sqlite3');
const db = new Database('database.db');
const stmt = db.prepare('UPDATE users SET password = ? WHERE user = ?');
stmt.run('21232f297a57a5a743894a0e4a801fc3', 'admin');
```

### Transacciones

Podemos usar transacciones para agrupar varias consultas y asegurarnos de que se ejecuten todas o ninguna.

```javascript
const Database = require('better-sqlite3');
const db = new Database('database.db');

const insert = db.prepare('INSERT INTO users (user, password) VALUES (?, ?)');
const update = db.prepare('UPDATE users SET password = ? WHERE user = ?');

const insertTransaction = db.transaction((user, password) => {
  insert.run(user, password);
  update.run('21232f297a57a5a743894a0e4a801fc3', 'admin');
});

insertTransaction('admin2', '81dc9bdb52d04dc20036dbd8313ed055');
insertTransaction('admin3', '81dc9bdb52d04dc20036dbd8313ed055');
```