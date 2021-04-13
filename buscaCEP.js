const cepUsuario = document.getElementById('entrada')
const botaoConsulta = document.getElementById('botao')
const botaoLimpar = document.getElementById('botao-limpar')
botaoConsulta.addEventListener('click',consultaCEP)
botaoLimpar.addEventListener('click',limparValores)
cepUsuario.addEventListener("keypress",validaCEP)
let container = document.getElementById('resultado')
container.style.display = 'none'

function consultaCEP(event){
    
    let cep = cepUsuario.value
        const url = `https://viacep.com.br/ws/${cep}/json`
        fetch(url)
            .then(response => response.json())
            .then(cep => {
                console.log(cep)
                document.getElementById('bairro').innerText = cep.bairro
                document.getElementById('logradouro').innerText = cep.logradouro    
                document.getElementById('cidade').innerText = cep.localidade
                document.getElementById('uf').innerText = cep.uf
            }) 
        
        .catch(err => {
            console.log("Falha!!! ",err)
        })
        container.style.display = "block"
    }

function validaCEP(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault()
    }
}

function limparValores(){
    cepUsuario.value = ""
    container.style.display = 'none'

}