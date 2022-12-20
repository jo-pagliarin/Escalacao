const banco = require('../dbConfig')
const Pessoa = require('../models/Pessoa')

function postarDados(req, res) {
    const novoJogador = {
        nome: req.body.nome,
        idade: req.body.idade,
        posicao: req.body.posicao,
        num_camisa: req.body.num_camisa,
        id_clube: req.body.nome_clube
    }
    let vazio = 0
    let novoJogadorArray = Object.entries(novoJogador)
    for (array of novoJogadorArray) {
        if (array[1] == '') {
            vazio = 1
        }
    }
    if (vazio != 1) {
        query = `INSERT INTO jogador(nome, idade, posicao, num_camisa, id_clube) 
                VALUES 
                ('${novoJogador.nome}', 
                ${novoJogador.idade}, 
                '${novoJogador.posicao}', 
                ${novoJogador.num_camisa}, 
                ${novoJogador.id_clube})`
        
        banco.query(query, function (err, result) {
            if (err) { res.status(404).send(err) }
            else {
                console.log("Jogador cadastrado")
                res.send(result)
            }
        })
    }
}

function deletarJogador(req, res) {
    nome = req.body.nome
    id = `SELECT id from jogador WHERE jogador.nome = ${JSON.stringify(nome)}`
    banco.query(id, function (err, result) {
        if (err) { res.status(404).send(err) }
        else {
            deletar = `DELETE FROM jogador WHERE jogador.id = ${result[0].id} `
            banco.query(deletar, function(req,result2){
                if (err) { res.status(404).send(err) }
                else{
                    console.log(`Jogador de nome ${JSON.stringify(nome)} deletado!`)
                    res.send(result2)
                }
            })
        }
    })
}

function obterDados(req, res) {
    id_clube = req.body.id_clube
    query = `SELECT jogador.* FROM jogador 
            INNER JOIN clube ON 
            clube.id = jogador.id_clube
            WHERE clube.id = ${JSON.stringify(id_clube)}`
            
    banco.query(query, function (err, result) {
        if (err) { res.status(404).send(err) }
        else {
            console.log(`Foram gerados os dados sobre o clube`)
            res.send(result)
        }
    })
}


module.exports = { postarDados, deletarJogador, obterDados }