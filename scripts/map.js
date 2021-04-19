/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////

    Esse arquivo constrói o mapa e os pontos
    Tutorial clusters mapbox 
    https://docs.mapbox.com/mapbox-gl-js/example/cluster/   
    [adaptado]
*/

var coordenadasConjunto = []
var pessoasConjunto = []
var lugaresConjunto = []

//mapbox assets
const styleURL = 'mapbox://styles/piscinadepixel/cknl6psxv12rz17teuir6yp6a'
const accessTOKEN = 'pk.eyJ1IjoicGlzY2luYWRlcGl4ZWwiLCJhIjoiY2trenk1ZzE2MGViYTJ1cG5hbXY1c3A5ZCJ9.lso-cNpB8Id_MW1s6_BM7A'
const mapZOOM = 3
const mapCENTER = [-54.54,-20.51]
let start = []

mapboxgl.accessToken = accessTOKEN;
var map = new mapboxgl.Map({
  container: 'map',
  style: styleURL,
  center: mapCENTER, // starting position
  zoom: mapZOOM
});

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

//Quando o mapa carregar
map.on('load', function () {
    //passar por todos os objetos Conjunto 
    //do array conjuntos
    for (var i =0; i<conjuntos.length; i++) {
      var coord = []
      //obter info de lat e long
      //não sei se a nomenclatura pra cada uma ta certa
      //mas as posicoes (1,2) estao certinhas geograficamente
      coord.push(conjuntos[i].latitude)
      coord.push(conjuntos[i].longitude)

      //criar conjuntos de lugares, pessoas e coordenadas 
      //na ordem, para cada elemento do array conjuntos 
      //e push dentro de arrays novas pra eu acessar lá embaixo
      lugaresConjunto.push(conjuntos[i].estado)
      pessoasConjunto.push(conjuntos[i].pessoa)
      coordenadasConjunto.push(coord)
    }

    // Add a new source from our GeoJSON data and
    // set the 'cluster' option to true. GL-JS will
    // add the point_count property to your source data.
    //Coloquei essas funcoes no helperFunctions.js
    //porque estava muita coisa nesse arquivo
    addSource()
    addLayers()
    
    //depois que o mapa carrega,
    //ao clicar em 
    //clusters
    map.on('click',/* cluster layer id */ 'clusters', function (e) {
      //funcao pra poder identificar se clicar fora do cluster
      e.preventDefault();
      //acessar as features de cada um dos clusters
      //isso é para poder agrupá-las 
      //e mostrar todas juntas no pop-up de cada estado
      //no tutorial a opcao nessa etapa é dar zoom na área e abrir
      //em vários pontos individuais. Para esse projeto os pontos
      //individuais não são interessantes porque todas as minas
      //se sobrepoe nas mesmas coordenadas do seu estado
      var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
      var clusterId = features[0].properties.cluster_id,
      point_count = features[0].properties.point_count,
      clusterSource = map.getSource(/* cluster layer data source id */'meninas');
                      
       // Get Next level cluster Children
       clusterSource.getClusterChildren(clusterId, function(err, aFeatures){
       //debug
          //console.log('getClusterChildren', err, aFeatures);
       });
                      
       // Get all points under a cluster
       clusterSource.getClusterLeaves(clusterId, point_count, 0, function(err, aFeatures){
       //debug
          //console.log('getClusterLeaves', err, aFeatures);
          //console.log('getClusterLeaves', err, aFeatures[0].properties);
       
       //array para exibir os estados no pop-up
       var perfisEmInfo = []

       //loop dentro dos clusters, quantos @ tiver
       for (var i=0;i<aFeatures.length;i++) {
        //colocar no array perfisEmInfo a propriedade 'mag' de cada feature (elemento? da database geojson)
        //mag é um termo arbitrário, já está assim no tutorial e eu não troquei pra não dar trabalho
        perfisEmInfo.push(aFeatures[i].properties.mag)  
      } 
      //debug
        //console.log(perfisEmInfo)

      //desenhar o popup 
      //esvaziar os @ se ja tiver algum
      document.getElementById('infoConteudo').innerHTML='';
      //exibir o estado em letra maiuscula no campo estadoExib
      document.getElementById('estadoExib').innerHTML=aFeatures[0].properties.lugar.toUpperCase();
      document.getElementById('box-info').style.height= '400px';
      document.getElementById('box-info').style.opacity= 1;

      //variavel para colocar a lista de @
      var caixa = document.getElementById('infoConteudo')
      //em clusters há sempre + de 1 @
      //então precisa colocar esse loop pra appen todos dentro da caixa de exibcao
      for (var i=0; i<perfisEmInfo.length; i++) {
        //criar o link que é sempre o mesmo instagram + perfil (sem o @)
        //o @ é sempre o primeiro caracter da string perfisEmInfo, é só cortar ali
        var link = 'https://www.instagram.com/'+ perfisEmInfo[i].substr(1)+'/';
        var a = document.createElement('a');
        a.setAttribute('href',link);
        a.setAttribute('target','_blank')
        a.innerHTML = '<p>'+perfisEmInfo[i].toUpperCase()+'<p>';
        caixa.appendChild(a);
      }

    })
  });
    
    //mudar o cursor ao sobrepor nos clusters
    map.on('mouseenter', 'clusters', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', function () {
    map.getCanvas().style.cursor = '';
    });

    //caso clique fora da bolinha
    //fecha a box-info
    //pra fechar de um jeito mais dinamico
    map.on('click', function(e) {
      if (e.defaultPrevented === false) {
        //debug
          //console.log('hide taskbar');
        document.getElementById('box-info').style.height= '0';
        document.getElementById('box-info').style.opacity= 0;
     }
   });

    //bolinhas sozinhas :(
      //mesmo esquema dos clusters, mas sozinhas
      //dps ver se consigo fazer uma funcao só pros dois
      //não fiz porque tem algumas coisas diferentes nesse aqui
    map.on('click', 'unclustered-point', function (e) {
      map.on('mouseenter', 'unclustered-point', function () {
        map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'unclustered-point', function () {
        map.getCanvas().style.cursor = '';
        });
      var perfilEmInfo = e.features[0].properties.mag;
      var onde = e.features[0].properties.lugar;
      //debug
        //console.log(perfilEmInfo,onde)

      //desenhar o popup 
      document.getElementById('infoConteudo').innerHTML=''
      document.getElementById('estadoExib').innerHTML=onde.toUpperCase()
      document.getElementById('box-info').style.height= '400px';
      document.getElementById('box-info').style.opacity= 1;
      var caixa = document.getElementById('infoConteudo');
      var link = 'https://www.instagram.com/'+ perfilEmInfo.substr(1)+'/';
      var a = document.createElement('a');
      a.setAttribute('href',link);
      a.setAttribute('target','_blank');
      a.innerHTML = '<p>'+perfilEmInfo.toUpperCase()+'<p>';
      caixa.appendChild(a);
    })
});