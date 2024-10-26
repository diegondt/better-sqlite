CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS mensajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios (nombre, email) VALUES ('Juan Perez', 'juan.perez@example.com');
INSERT INTO usuarios (nombre, email) VALUES ('Maria Lopez', 'maria.lopez@example.com');
INSERT INTO mensajes (usuario_id, mensaje) VALUES (1, 'hola que tal');
INSERT INTO mensajes (usuario_id, mensaje) VALUES (2, 'gucci y tu');