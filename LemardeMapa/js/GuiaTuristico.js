class GuiaTuristico{

    constructor(nome, sobrenome, dtNasc, genero, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dtNasc = dtNasc;
        this.genero = genero;
        this.cpf = cpf;
        this.idiomas = ['Português']
    }

    addIdioma(idioma){
        this.idiomas.push(idioma)
    }
}

export { GuiaTuristico }