async function buscaEndereco(cep) {
    try {
    var consultaCEP = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await (await consultaCEP).json()
    if(consultaCEPConvertida.erro) {
        throw Error('CEP não existente!');
    }
    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
    }
}
let ceps = ['01001000','01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(resposta => console.log(resposta))
// buscaEndereco()
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