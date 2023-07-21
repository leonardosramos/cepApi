const consultaCep = fetch('https://viacep.com.br/ws/11380220/json/')
.then( resposta => resposta.json()
.then(r => {
    if (r.erro){
        throw Error('esse cep não existe')
    } else{
        console.log(r)
    }
})
.catch(erro => console.log(erro)).finally(msg => console.log('processamento concluido')));

console.log(consultaCep)