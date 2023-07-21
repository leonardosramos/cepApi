async function buscaEndereco(cep){
    const menssagemErro = document.getElementById('erro');
    menssagemErro.innerHTML = '';
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCepConvert = await consultaCep.json();
        if (consultaCepConvert.error) {
            throw Error('Cep inexistente.');
        }
        const cidade = document.getElementById('cidade')
        const endereco = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvert.localidade;
        endereco.value = consultaCepConvert.logradouro;
        estado.value = consultaCepConvert.uf;
        bairro.value = consultaCepConvert.bairro;
        console.log(consultaCepConvert); 
        return consultaCepConvert;
    } catch (error) {
        menssagemErro.innerHTML = `<p>Cep inválido</p>`
        console.log(error)
    }
    
}

const cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));