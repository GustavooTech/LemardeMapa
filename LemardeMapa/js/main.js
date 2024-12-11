function rederizarMapa(){
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

function telaInicial(){
  const telaInicio = document.getElementById('tela-inicio')
  setTimeout(()=>{
    telaInicio.classList.toggle('oculto');
  }, 5000)
}

telaInicial()

/* Botao Login */
  const loginNavbar = document.getElementById('login-navbar');
  loginNavbar.addEventListener('click', () => {
    const form = document.getElementById('loginUsuario-form');
    loginNavbar.classList.toggle('ativo');
    form.classList.toggle('ativo');
  })
/* Botao Login */

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
/* Botão Menu Lateral Usuário */

/* Botão Menu Lateral Pesquisa */
  const navLateraPesquisaBtn = document.getElementById('navLateraPesquisa-btn');
  navLateraPesquisaBtn.addEventListener('click', ()=>{
    const navLateralPesquisa = document.getElementById('navLateral-pesquisa');
    const navLateralUsuario = document.getElementById('navLateral-usuario');
    const navInferior = document.getElementById('nav-inferior');
    navInferior.classList.toggle('oculto')

    navLateralPesquisa.classList.toggle('ativo');
    navLateralUsuario.classList.toggle('oculto');
 })
/* Botão Menu Lateral Pesquisa */

/* Botão Menu Inferior */
  const navInferiorBtn = document.getElementById("navInferior-btn");
  navInferiorBtn.addEventListener('click', ()=>{
    const navInferior = document.getElementById('nav-inferior');
    navInferior.classList.toggle('ativo')
  })
/* Botão Menu Inferior */

rederizarMapa()

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

  if(texts) {
    barraPesquisa.placeholder = texts.barraPesquisa;
    filtrocafe.textContent = texts.filtrocafe;
    filtromercado.textContent = texts.filtromercado;
    filtroturismo.textContent = texts.filtroturismo;
    filtrofarmacia.textContent = texts.filtrofarmacia;
  }
}

  // Evento de mudança de idioma

  languageSelect.addEventListener("change",(event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  });

  // Define o idioma padrão
 changeLanguage("pt"); 


  