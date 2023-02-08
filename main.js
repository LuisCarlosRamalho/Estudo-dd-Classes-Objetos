let Pnome = document.querySelector('#primeiro_nome')
let Pidade = document.querySelector('#f_idade')
let Snome = document.querySelector('#sobre_nome')
let id = 0
const btnAdd = document.querySelector('#btn_add')
const resCaixa = document.querySelector('.res')
var elementos = resCaixa.childNodes
let pessoasArr = []//array para receber os objetos criados

class Pessoa{
    constructor(nome, idade, Snome, id){
        this.nome = nome
        this.idade = idade
        this.Snome = Snome
        this.id = id
    }

    getNome(){
        return this.nome
    }

    getSnome(){
        return this.Snome
    }

    getIdade(){
        return this.idade
    }

    getId(){
        return this.id
    }

    setNome(nome){
        this.nome = nome
    }

    setSnome(Snome){
        this.Snome = Snome
    }

    setIdade(idade){
        this.idade = idade
    }

    setId(id){
        this.id = id
    }
}

const validarNome = ()=> {
    if(Pnome.value.length <= 0){
        alert('O nome é obrigatório')
        Pnome.value =''
        Pidade.value =''
        Snome.value = ''
        Pnome.focus()
    } else {
        adicionar()
        Pnome.value =''
        Pidade.value =''
        Snome.value = ''
        Pnome.focus()
    }
}

const excluirCard = (indice)=>{
    pessoasArr = pessoasArr.filter((e, id) => {
        return id !== indice
    });
    montagemHTML(pessoasArr)
}



const montagemHTML = ()=>{
    resCaixa.innerHTML = ''
    pessoasArr.map((pessoa, indice)=>{
        let msg = fila(pessoa)
        const divCriada = document.createElement('div')
        const pParag = document.createElement('p')
        const iconlixeira = document.createElement('i')

        iconlixeira.setAttribute('class', 'fa-solid fa-trash-can')
        divCriada.setAttribute('class', 'divRes')

        pParag.innerHTML = `Nome: ${pessoa.getNome()}<br /> Sobrenome: ${pessoa.getSnome()}<br />Idade: ${pessoa.getIdade()} <br /> Posição na fila: ${msg}`
        resCaixa.appendChild(divCriada)
        divCriada.appendChild(pParag)
        divCriada.appendChild(iconlixeira)
        iconlixeira.addEventListener('click', () => excluirCard(indice))
        
    })
    
}


const adicionar = ()=>{ 
    const pessoa = new Pessoa(Pnome.value, Pidade.value, Snome.value)
    pessoasArr.push(pessoa)
    montagemHTML()
   
   
}
function fila(pessoa){
    
    if(pessoasArr.indexOf(pessoa)!==0){
        return pessoasArr.indexOf(pessoa) + 1   
    } else {
       return "Sua vez"
    }
}

btnAdd.addEventListener('click', ()=> validarNome())
