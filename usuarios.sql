-- init.sql

-- Crear tabla de ejemplo
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- Insertar datos iniciales
INSERT INTO usuarios (nombre, email) VALUES ('Juan Perez', 'juan.perez@example.com');
INSERT INTO usuarios (nombre, email) VALUES ('Maria Lopez', 'maria.lopez@example.com');