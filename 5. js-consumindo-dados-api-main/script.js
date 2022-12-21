async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
    var consultaCEP = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await (await consultaCEP).json()
    if(consultaCEPConvertida.erro) {
        throw Error('CEP não existente!');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');
    console.log(consultaCEPConvertida)

    cidade.value = consultaCEPConvertida.localidade;    
    logradouro.value = consultaCEPConvertida.logradouro;    
    bairro.value = consultaCEPConvertida.bairro;    
    estado.value = consultaCEPConvertida.uf;      

    return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!`
        console.log(erro)
    }
}
// buscaEndereco('01001000')

/* //exemplo de vários
let ceps = ['01001000','01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(resposta => console.log(resposta)) */

/*  .then((resposta) => resposta.json())
  .then((r) => {
    if (r.erro) {
        throw Error('Esse cep não existe!')
    }else {
        console.log(r)
    }
  })
  .catch((erro) => console.log(erro))
  .finally(mensagem => console.log('Processamento concluído')); */

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
