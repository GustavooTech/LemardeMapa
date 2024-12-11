import { Motorista } from "./Motorista.js";
import { GuiaTuristico } from "./GuiaTuristico.js"

const tipoCadastro = document.getElementById('tipoCadastro');
tipoCadastro.addEventListener('change', ()=>{

    if(tipoCadastro.value === 'motoristaOption'){
        const formGuiaTur = document.getElementById('cadastro-guia');
        formGuiaTur.style.display= 'none';
        const formMotorista = document.getElementById('cadastro-motorista');
        formMotorista.style.display= 'inherit';
    }
    else if(tipoCadastro.value === 'guiaTurOption'){
        const formMotorista = document.getElementById('cadastro-motorista');
        formMotorista.style.display= 'none';
    }
})


    /* const possuiCarro = document.getElementsByName('possuiCarro');
    possuiCarro.addEventListener('change', ()=>{

        if(possuiCarro.value === 'sim'){
            alert('ok')
        }
    }) */

const cadastrarMotoristaBtn = document.getElementById('cadastrarMotorista')
cadastrarMotoristaBtn.addEventListener('click', cadastrarMotorista)

const cadastrarCarroBtn = document.getElementById('CadastrarCarro-btn');
cadastrarCarroBtn.addEventListener('click', cadastrarCarro)

function cadastrarMotorista(e) {
    e.preventDefault();
    const nome = document.getElementById("nomeUserMotorista").value;
    const sobrenome = document.getElementById("sobrenomeUserMotorista").value;
    const dtNasc = document.getElementById('dtNascUserMotorista').value;
    const cpf = document.getElementById('cpfUserMotorista').value;
    const cnh = document.getElementById('cnhUserMotorista').value;
    const idiomas = document.getElementById('idiomasUserMotorista').value;
    const nacionalidade = document.getElementById('nacionalidadeUserMotorista').value;
    const descricao = document.getElementById('descUserMotorista').value;

    const modelo = document.getElementById("modeloCarro").value;
    const ano = document.getElementById('anoCarro').value;
    const cor = document.getElementById('corCarro').value;
    const placa = document.getElementById('placaCarro').value;

/*     const opcoesInput = document.querySelector('.possuiCarro-input').value; */

    const motorista = new Motorista (nome, sobrenome, dtNasc, cpf, cnh, idiomas, nacionalidade, descricao);
    motorista.cadastrarMotorista(motorista)

    console.log(motorista);


    alert("Motorista cadastrado com sucesso!");
}

function cadastrarCarro(id, e){
    e.preventDefault();



    const carro = new Carro
}
