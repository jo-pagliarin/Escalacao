const banco = require('../dbConfig')
const Pessoa = require('../models/Pessoa')

function postarDadosJogador(req, res) {
    const novoJogador = {
        nome: req.query.nome,
        idade: req.query.idade,
        posicao: req.query.posicao,
        num_camisa: req.query.num_camisa,
        id_clube: req.query.nome_clube
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
            if (err) { res.sendCode(500) }
            else {
                console.log("Jogador cadastrado")
                res.send(result)
                // res.redirect('/api/obterDadosJogador')
            }

        })
    }
}
function obterDadosJogador(req, res) {
    const query = `SELECT * FROM jogador`
    banco.query(query, function (err, result) {
        if (err) { res.sendCode(500) }
        else {
            geral = result.map(function (pessoa) {
                aux = new Pessoa(pessoa.nome, pessoa.idade, pessoa.posicao, pessoa.num_camisa)
                return aux
            })
            res.json(result)
        }
    })
}

function deletarJogador(req, res) {
    nome = req.query.nome
    query = `DELETE FROM jogador WHERE nome = ${JSON.stringify(nome)}`
    banco.query(query, function (err, result) {
        if (err) { res.sendCode(500) }
        else {
            console.log(`Jogador de nome "${nome}" deletado`)
            res.redirect('/api/obterDadosJogador')
        }
    })
}

function pesquisarClube(req, res) {
    id_clube = req.query.nome_clube
    query = `SELECT jogador.* FROM jogador 
            INNER JOIN clube ON 
            clube.id = jogador.id_clube
            WHERE clube.id = ${JSON.stringify(id_clube)}`
            
    banco.query(query, function (err, result) {
        if (err) { res.sendCode(500) }
        else {
            console.log(`Foram gerados os dados sobre o clube`)
            res.json(result)
        }
    })
}


module.exports = { postarDadosJogador, obterDadosJogador, deletarJogador, pesquisarClube }