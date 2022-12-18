function createTableClube(){
    query = `CREATE TABLE clube (
        id INT PRIMARY KEY AUTO_INCREMENT, 
        nome VARCHAR(50) NOT NULL,
        estado CHAR(2) NOT NULL
    )`

    banco.query()
}

function insertTableClube(){
    query = `INSERT INTO clube(nome, estado) VALUES 
        ("Palmeiras", "SP"),
        ("Fluminense", "RJ"),
        ("Corinthians", "SP"),
        ("Fortaleza", "CE" ),
        ("Coritiba", "PR");` 

    banco.query()
}