import { Motorista } from "./Motorista.js";

function rederizarMapa() {
  var platform = new H.service.Platform({
    'apikey': 'yuVUo6JZN0WY2DXClC1QDo1lh6g2kykRIRi0o2kOBvM'
  });

  var defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.5, lng: 13.4 }
    });

}

rederizarMapa()

let historicoPesquisa =[];
function inputPesquisa(){

  //Função para filtrar pesquisas anteriores
  function filtroPesquisa(){
    const input = document.getElementById('barrapesquisa');
    const textoPesquisa = input.value.toUpperCase();
    const select = document.getElementById('barrapesquisa-select');

    //Limpar opções do select
    select.innerHTML = `<option value="" disabled selected>Pesquisas Anteriores</option>`;

    //Mostra as pesquisas anteriores que começam com o texto digitado
    historicoPesquisa.forEach(pesquisa => {
      if(pesquisa.toUpperCase().includes(textoPesquisa)){
        const option = document.createElement('option')
        option.setAttribute('class', 'barrapesquisaSelect-option')
        option.value = pesquisa;
        option.textContent = pesquisa;
        select.appendChild(option);
      }
    }) 

    //Exibe o seleet se houver sugestões
    select.style.display = select.options.length > 1 ? 'block' : 'none';
  }

  //Função para encher o campo de pesquisa ao selecionar uma pesquisa anterior
  function preencherPesquisa(){
    const select = document.getElementById('barrapesquisa-select');
    const input = document.getElementById('barrapesquisa');

    input.value = select.value //preencher o campo com o valor selecionado
    select.style.display='none';
  }

  //Função para add uma pesquisa ao histórico
  function addHistorico(pesquisa){
    if(pesquisa && !historicoPesquisa.includes(pesquisa)){
      historicoPesquisa.push(pesquisa);
    }
  }

  //Função para lidar com a pesquisa ao pressionar Enter
  document.getElementById('barrapesquisa').addEventListener('keydown', (evt)=>{
    if(evt.key === 'Enter'){
      evt.preventDefault();
      const input = evt.target.value.trim()
      if(input){
        addHistorico(input);
        evt.target.value = '' //Limpa o campo de pesquisa
        document.getElementById('barrapesquisa-select').style.display='none';
      }
    }
    filtroPesquisa();
    /* console.log(historicoPesquisa) */
  })

  document.getElementById('barrapesquisa-select').addEventListener('change', preencherPesquisa);

}

inputPesquisa()
console.log(historicoPesquisa);


/* function telaInicial() {
  const telaInicio = document.getElementById('tela-inicio')
  setTimeout(() => {
    telaInicio.classList.toggle('oculto');
  }, 5000)
}
 */
/* telaInicial() */

/* Botao Login */
  const loginNavbar = document.getElementById('login-navbar');
  loginNavbar.addEventListener('click', () => {
    const form = document.getElementById('loginUsuario-form');
    loginNavbar.classList.toggle('ativo');
    form.classList.toggle('ativo');
  })


/* Botão Menu Lateral Usuário */
  const navLateralUsuarioBtn = document.getElementById('navLateralUsuario-btn');
  navLateralUsuarioBtn.addEventListener('click', () => {
    const navLateralUsuario = document.getElementById('navLateral-usuario');
    const navLateralPesquisa = document.getElementById('navLateral-pesquisa');
    const navInferior = document.getElementById('nav-inferior');
    navInferior.classList.toggle('oculto')

    navLateralUsuario.classList.toggle('ativo');
    navLateralPesquisa.classList.toggle('oculto');
  })


/* Botão Menu Lateral Pesquisa */

  /* Carregar Menu Lateral Usuário */
    function carregarNavLateralUsuário(arrayMotoristas, arrayGuias) {
      const navLateralUsuario = document.getElementById('navLateral-usuario');
      /* Carregar Informações Motorista */

      /* HTML */
      function carregarHtmlMotorista(nomeMotorista, nomeCarro, modeloCarro, anoCarro, corCarro, infoAdicional) {

        let html = `<div class="mostrar-motorista item">
                                <div class="info-motorista info">
                                    <img src="assets/css/bg.jpg" alt="" class="foto-perfil">
                                    <div>
                                        <h4>${nomeMotorista}</h4>
                                        <p>${nomeCarro}, ${modeloCarro}, ${anoCarro}, ${corCarro}</p>
                                    </div>
                                </div> <!-- .info-motorista -->
                                ${infoAdicional}
                                <a href="#">Mais Informações</a>
                            </div> <!-- .mostrar-motorista -->`;
                      
        return html

      } /* function carregarHtmlMotorista( */

      let mostrarMotoristas = document.getElementById('mostrar-motoristas-id');
      mostrarMotoristas.innerHTML=''

      for (let usuario of arrayMotoristas) {
        console.log(usuario)
        const nomeMotorista = usuario.nome;
        const carro = usuario.carro;
        const nomeCarro = carro.nome;
        const modeloCarro = carro.modelo;
        const anoCarro = carro.ano;
        const corCarro = carro.cor;

        console.log(carro);
        

        let arCondicionado = ` <p class="arcondicionado">Ar-Condicionado</p>`;
        let dispGuia = `<p class="disp-guia">Disponível para guia</p>`;
        let infoAdicional = '';

        if (usuario.dispGuia || usuario.arCondicionado) {
          let infoAdicional = `div class="info-adicional">
                            </div> <!-- .info-adicional -->`;

          if (usuario.arCondicionado) {
            infoAdicional.appendChild(arCondicionado)
          }
          if (usuario.dispGuia) {
            infoAdicional.appendChild(dispGuia);
          }
        }

        let itemMotorista = carregarHtmlMotorista(nomeMotorista, nomeCarro, modeloCarro, anoCarro, corCarro, infoAdicional)
        mostrarMotoristas.innerHTML += itemMotorista        


      } /* for (let usuario of arrayMotoristas) */
      
      /* Carregar Informações Motorista */

    } /* /function carregarNavLateralUsuário()  */

  /* Carregar Menu Lateral Usuário */

  //Botao
  const navLateraPesquisaBtn = document.getElementById('navLateraPesquisa-btn');
  navLateraPesquisaBtn.addEventListener('click', () => {
    /* Exibir Menu Lateral */
    const navLateralPesquisa = document.getElementById('navLateral-pesquisa');
    const navLateralUsuario = document.getElementById('navLateral-usuario');
    const navInferior = document.getElementById('nav-inferior');
    navInferior.classList.toggle('oculto')

    navLateralPesquisa.classList.toggle('ativo');
    navLateralUsuario.classList.toggle('oculto');
    /* Exibir Menu Lateral */

      /* nome, sobrenome, dtNasc, cpf, cnh, idiomas, nacionalidade, descricao */
      let teste1 = new Motorista('nomeMotorista 1', 'sobrenomeMotorista 1', '2024-01-02', 123456789, 555555, 'idiomaMotorista', 'nacionaliadadeMotorista 1', 'descMotorista 1')
      //id1 = teste1.gerarId()
      teste1.cadastrarCarro( 'NomeCarro 1', 'modeloCarro 1', 2021, 'corCarro 1', 'placaCarro 1')
      let teste2 = new Motorista('nomeMotorista 2', 'sobrenomeMotorista 2', '2024-01-02', 123456789, 555555, 'idiomaMotorista', 'nacionaliadadeMotorista 3', 'descMotorista 2')
      teste2.cadastrarCarro('NomeCarro 2', 'modeloCarro 2', 2021, 'corCarro 2', 'placaCarro 2')

      let testeMotorista = [teste1, teste2]
      let testeGuia = []

    carregarNavLateralUsuário(testeMotorista, testeGuia)

  })
/* Botão Menu Lateral Pesquisa */


/* Botão Menu Inferior */
  const navInferiorBtn = document.getElementById("navInferior-btn");
  navInferiorBtn.addEventListener('click', () => {
    const navInferior = document.getElementById('nav-inferior');
    navInferior.classList.toggle('ativo')

    //carregar Conteúdo
    function Historicoenderecos(){
      let section = document.getElementById('navInferior-enderecos');
  
      for(let endereco of historicoPesquisa){
        const elemento = `<div class="item item-endereco">
                  <p>${endereco}</p>
              </div>`
        section.innerHTML+= elemento;
      }

      return section
    }
    console.log(Historicoenderecos());
    
  })

/* Botão Menu Inferior */

// Textos em diferentes idiomas
const translations = {
  pt: {
    barraPesquisa: "Pesquisar",
    filtrocafe: "cafés",
    filtromercado: "mercado",
    filtroturismo: "turismo",
    filtrofarmacia: "farmacia",

  },

  en: {
    barraPesquisa: "Search",
    filtrocafe: "coffees",
    filtromercado: "market",
    filtroturismo: "tourism",
    filtrofarmacia: "pharmacy",

  },

  es: {
    barraPesquisa: "Buscar",
    filtrocafe: "cafés",
    filtromercado: "mercado",
    filtroturismo: "turismo",
    filtrofarmacia: "farmacia",

  },

  po: {
    barraPesquisa: "Szukaj",
    filtrocafe: "kawiarnie",
    filtromercado: "rynek",
    filtroturismo: "turystyka",
    filtrofarmacia: "Apteka",

  },

  it: {
    barraPesquisa: "Da cercare",
    filtrocafe: "caffè",
    filtromercado: "mercato",
    filtroturismo: "turismo",
    filtrofarmacia: "farmacia",

  },
};

const languageSelect = document.getElementById("language-select");

// Área Traduzida
const barraPesquisa = document.getElementById("barrapesquisa");
const filtrocafe = document.getElementById("filtrocafe");
const filtromercado = document.getElementById("filtromercado");
const filtroturismo = document.getElementById("filtroturismo");
const filtrofarmacia = document.getElementById("filtrofarmacia");
// Área Traduzida

function changeLanguage(language) {
  const texts = translations[language];

  if (texts) {
    barraPesquisa.placeholder = texts.barraPesquisa;
    filtrocafe.textContent = texts.filtrocafe;
    filtromercado.textContent = texts.filtromercado;
    filtroturismo.textContent = texts.filtroturismo;
    filtrofarmacia.textContent = texts.filtrofarmacia;
  }
}

// Evento de mudança de idioma

languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Define o idioma padrão
changeLanguage("pt");


