CREATE DATABASE la_queseria;

USE la_queseria;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    imagen_url VARCHAR(255),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,2),
    stock INT,
    categoria_id INT,
    imagen_url VARCHAR(255),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100),
    email VARCHAR(255),
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    estado VARCHAR(50),
    total DECIMAL(10,2),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE detalles_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio_unitario DECIMAL(10,2),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO categorias (nombre, descripcion, imagen_url) VALUES
('Quesos Frescos', 'Quesos elaborados con leche fresca', 'frescos.jpg'),
('Quesos Curados', 'Quesos madurados con tiempo', 'curados.jpg'),
('Quesos Semi-Curados', 'Quesos con maduración intermedia', 'semicurados.jpg');

INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id, imagen_url) VALUES
('Queso Fresco de Cabra', 'Queso fresco elaborado con leche de cabra', 15.99, 50, 1, 'queso-fresco-cabra.jpg'),
('Manchego Curado', 'Queso manchego con 12 meses de maduración', 24.99, 30, 2, 'manchego-curado.jpg'),
('Idiazabal Ahumado', 'Queso idiazabal con sabor ahumado', 19.99, 40, 2, 'idiazabal-ahumado.jpg');