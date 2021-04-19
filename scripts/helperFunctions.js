/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////
*/

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

////tela de carregamento////
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

////objetos////
function Mina(lugar, perfil) {
    this.estado= lugar;
    this.perfil = perfil;
  }

function Caracters(sigla, estado, lat, long, pessoa) {
  this.sigla = sigla;
  this.estado = estado;
  this.latitude = lat;
  this.longitude = long;
  this.pessoa = pessoa
}
  
////funcoes para o mapa////
function addSource() {
    map.addSource('meninas', {
        type: 'geojson',
        
          //cada menina 1 linha, tirar isso do hardcoded e colocar em uma tabela separada
            //para linkar aqui
            /*
              data:
              'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
            
            */
        
        data:{
          "type": "FeatureCollection",
          //dados para fazer as layers
          "features": [
             { "type": "Feature", "properties": { "mag": pessoasConjunto[0], "lugar": lugaresConjunto[0], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[0] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[1], "lugar": lugaresConjunto[1], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[1] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[100], "lugar": lugaresConjunto[100], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[100] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[49], "lugar": lugaresConjunto[49], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[49] } },
            
            ]},
       
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 5 // Radius of each cluster when clustering points (defaults to 50)
        });
}

function addLayers() {
    map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'meninas',
        filter: ['has', 'point_count'],
        paint: {
        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 10
        //   * Yellow, 30px circles when point count is between 10 and 50
        //   * Pink, 40px circles when point count is greater than or equal to 50
        'circle-color': [
          'step',
          ['get', 'point_count'],
              '#FAF7EE',
              0,
              '#FAF7EE',
              750,
              '#FAF7EE'
              ],
        'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
                10,
              30,
                50,
              40
              ]
              }
        });
         
        map.addLayer({
              id: 'cluster-count',
              type: 'symbol',
              source: 'meninas',
              filter: ['has', 'point_count'],
              layout: {
              'text-field': '{point_count_abbreviated}',
              'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
              'text-size': 12,
              },
              paint: {
                "text-color": "#232D18"
              }
        });
         
        map.addLayer({
              id: 'unclustered-point',
              type: 'circle',
              source: 'meninas',
              filter: ['!', ['has', 'point_count']],
              paint: {
              'circle-color': '#FAF7EE',
              'circle-radius': 4,
              
              }
        });
}

console.log('HELPER FUNCTIONS Loaded')
