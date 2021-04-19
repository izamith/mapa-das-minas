/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/
let conjuntos = []

async function Start() {
    await getData();
    await getDataEstados()
    await criaListas()
}

function criaListas() {
  for (var i =0; i<minasConjunto.length; i++) {
    var j = minasConjunto[i].estado
    //console.log(j)

    //relacionar siglas com estados
    var incluirSigla
    var lat
    var long 
    switch (j) {
        case 'Acre':
          incluirSigla = 'AC';
          lat = -70.55;
          long = -8.77;
        break 
        
        case 'Alagoas':
          incluirSigla = 'AL';
          lat = -35.73;
          long = -9.71;
        break 
        
        case 'Amapá':
          incluirSigla = 'AP';
          lat = -51.77;
          long = 1.41;
        break 
        
        case 'Amazonas':
          incluirSigla = 'AM';
          lat = -61.66;
          long = -3.07;
        break 
        
        case 'Bahia':
          incluirSigla = 'BA'
          lat = -38.51;
          long = -12.96;
        break 
        
        case 'Ceará':
          incluirSigla = 'CE';
          lat = -38.54;
          long = -3.71;
        break 
        
        case 'Distrito Federal':
          incluirSigla = 'DF';
          lat = -47.86;
          long = -15.83;
        break 
        
        case 'Espírito Santo':
          incluirSigla = 'ES';
          lat = -40.34;
          long = -19.19;
        break 
        
        case 'Goiás':
          incluirSigla = 'GO';
          lat = -49.31;
          long = -16.64;
        break 
        
        case 'Maranhão':
          incluirSigla = 'MA';
          lat = -44.30;
          long = -2.55;
        break 
        
        case 'Mato Grosso':
          incluirSigla = 'MT';
          lat = -55.42;
          long = -12.64;
        break 
        
        case 'Mato Grosso do Sul':
          incluirSigla = 'MS';
          lat = -54.54;
          long = -20.51;
        break 

        case 'Minas Gerais':
          incluirSigla = 'MG';
          lat = -44.38;
          long = -18.10;
        break 
        
        case 'Pará':
          incluirSigla = 'PA';
          lat = -52.29;
          long = -5.53;
        break 

        case 'Paraíba':
          incluirSigla = 'PB'
          lat = -35.55;
          long = -7.06;
        break 

        case 'Paraná':
          incluirSigla = 'PR';
          lat = -51.55;
          long = -24.89;
        break 

        case 'Pernambuco':
          incluirSigla = 'PE';
          lat = -35.07;
          long = -8.28;
        break 

        case 'Piauí':
          incluirSigla = 'PI';
          lat = -43.68;
          long = -8.28;
        break 

        case 'Rio de Janeiro':
          incluirSigla = 'RJ';
          lat = -43.15;
          long = -22.84;
        break 

        case 'Rio Grande do Norte':
          incluirSigla = 'RN';
          lat = -36.52;
          long = -5.22;
        break 

        case 'Rio Grande do Sul':
          incluirSigla = 'RS';
          lat = -51.22;
          long = -30.01;
        break 

        case 'Rondônia':
          incluirSigla = 'RO';
          lat = -62.80;
          long = -11.22;
        break 

        case 'Roraima':
          incluirSigla = 'RR';
          lat = -61.22;
          long =  1.89;
        break 

        case 'Santa Catarina':
          incluirSigla = 'SC';
          lat = -49.44;
          long = -27.33;
        break 

        case 'São Paulo':
          incluirSigla = 'SP';
          lat = -46.64;
          long = -23.55;
        break 

        case 'Sergipe':
          incluirSigla = 'SE';
          lat = -37.07;
          long = -10.90;
        break 

        case 'Tocantins':
          incluirSigla = 'TO';
          lat = -48.25;
          long = -10.25;
        break 
    }

    //cada bloco é um objeto com nome e coordenadas iniciais e finais
    estadoi = new Caracters(incluirSigla, j, lat, long, minasConjunto[i].perfil )
        
        conjuntos.push(estadoi)

}
  console.log(conjuntos)
  }


//tela de carregamento
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 8000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
  }
  
  function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
  }
  
  onReady(function () {
    show('loading', false); 
  });
  
console.log('MAIN JS Loaded')