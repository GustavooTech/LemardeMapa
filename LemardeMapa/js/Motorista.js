import { Carro } from "./Carro.js";

class Motorista{
    constructor(nome, sobrenome, dtNasc, /* genero */ cpf, cnh, idiomas, nacionalidade, descricao){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dtNasc = dtNasc;
       /*  this.genero = genero; */
        this.cpf = cpf;
        this.cnh = cnh;
        this.idiomas = idiomas;
        this.nacionalidade = nacionalidade;;
        this.descricao = descricao;
        this.dispGuia = false;
        this.arCondicionado = false;
        this.categUsuario = 'motorista';
        this.carro
        this.listaMotorista= []
    }

    cadastrarMotorista(motorista){
        this.listaMotorista.push(motorista)
    }

    gerarId(){
        return this.listaMotorista.length;
    };

    cadastrarCarro(idUsuario, categUsuario, nome, modelo, ano, cor, placa){
        const id = this.gerarId();
        categUsuario = this.categUsuario;

        const carro = new Carro(idUsuario, categUsuario, nome, modelo, ano, cor, placa);
        this.carro = carro
    }

    addIdioma(idioma){
        this.idiomas.push(idioma)
    }

}

export{Motorista}