CREATE TABLE produtos(
    id         SERIAL    PRIMARY KEY,
    nome       CHAR(255) NOT NULL,
	preco     DECIMAL(10,2) NOT NULL
);





CREATE TABLE pedidos(
    id         SERIAL    PRIMARY KEY,
    status       CHAR(255) NOT NULL,
    cliente       CHAR(255) NOT NULL,
	mesa         INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE item(
    id         SERIAL    PRIMARY KEY,
    tipo       CHAR(255) NOT NULL,
    produtos_id INTEGER      NOT NULL, 
	pedidos_id INTEGER      NOT NULL,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id),
    FOREIGN KEY (pedidos_id) REFERENCES pedidos(id)
);

