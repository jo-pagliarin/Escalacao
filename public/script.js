const novoJogador = async () => {
    const nome = document.getElementById("nome").value
    const idade = parseInt(document.getElementById('idade').value)
    const num_camisa = parseInt(document.getElementById("num_camisa").value)
    const id_clube = parseInt(document.getElementById("nome_clube").value)
    let cb_posicao = []
    document.querySelectorAll('input[name="posicao"]').
        forEach((posicao) => {
            if (posicao.checked) {
                cb_posicao.push(posicao.value)
            }
        });

    jogador = {
        nome: nome,
        idade: idade,
        posicao: cb_posicao,
        num_camisa: num_camisa,
        nome_clube: id_clube
    }

    const init = {
        method: 'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(jogador) 
    }

    const response = await fetch('/api/postarDados', init)
    const dados = await response.json()
    document.getElementById("mensagem-post-jogador").innerText = `Jogador ${nome} cadastrado com sucesso!`
}

async function novaLista (){

    const id_clube = parseInt(document.getElementById("busca_clube").value)
    const body = {
        id_clube: id_clube,
    }

    const init = {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(body) 
    }

    const response = await fetch('/api/obterDados', init)
    const dados = await response.json()

    var table = document.getElementById("table")
    table.innerHTML = ''
    
    dados.forEach(function(pessoa){
        var row = table.insertRow(-1)
        var cell1 = row.insertCell(0) 
        var cell2 = row.insertCell(1) 
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        cell1.innerHTML = pessoa.nome
        cell2.innerHTML = `Idade: ${pessoa.idade}`
        cell3.innerHTML = pessoa.posicao
        cell4.innerHTML = `Camisa: ${pessoa.num_camisa}`
    })

    
}

const deletarJogador = async () => {
    const nome_jogador = document.getElementById("nome_jogador_delete").value
    const body = {
        nome: nome_jogador
    }

    const init = {
        method: 'DELETE',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(body) 
    }

    const response = await fetch('/api/deletarJogador', init)
    const dados = await response.json()
    document.getElementById("mensagem-deletar-jogador").innerText = `Jogador ${nome_jogador} deletado!`
}

window.onload = () => {
    const btnEnviar = document.getElementById("enviarJogador")
    btnEnviar.onclick = novoJogador
    const btnNavegar = document.getElementById("navegar")
    btnNavegar.onclick = novaLista
    const btnDeletar = document.getElementById("deletar")
    btnDeletar.onclick = deletarJogador
}



