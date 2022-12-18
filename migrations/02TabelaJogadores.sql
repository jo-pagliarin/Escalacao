
function createTableJogador (){
    query = `CREATE TABLE jogador (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
        nome VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        posicao SET('goleiro', 'zagueiro', 'lateral', 'meio_campo', 'atacante'), 
        num_camisa INT NOT NULL
        id_clube INT NOT NULL, 
        constraint fk_jogador_clube foreign key (id_clube) references clube (id)
    )`

    banco.query(query, function(err, result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}