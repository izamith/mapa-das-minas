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


console.log('js mapa')

var coordenadasConjunto = []
var pessoasConjunto = []
var lugaresConjunto = []


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

map.on('load', function () {

    for (var i =0; i<conjuntos.length; i++) {
      var coord = []
      coord.push(conjuntos[i].latitude)
      coord.push(conjuntos[i].longitude)

      lugaresConjunto.push(conjuntos[i].estado)
      pessoasConjunto.push(conjuntos[i].pessoa)
      coordenadasConjunto.push(coord)

      //console.log(pessoasConjunto,coordenadasConjunto)
    }

    // Add a new source from our GeoJSON data and
    // set the 'cluster' option to true. GL-JS will
    // add the point_count property to your source data.
    addSource()
    addLayers()
    
    //bolinhas em clusters :)
    map.on('click',/* cluster layer id */ 'clusters', function (e) {
      e.preventDefault();
      var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
      var clusterId = features[0].properties.cluster_id,
      point_count = features[0].properties.point_count,
      clusterSource = map.getSource(/* cluster layer data source id */'meninas');
                      
       // Get Next level cluster Children
       // 
       clusterSource.getClusterChildren(clusterId, function(err, aFeatures){
       console.log('getClusterChildren', err, aFeatures);
       });
                      
       // Get all points under a cluster
       clusterSource.getClusterLeaves(clusterId, point_count, 0, function(err, aFeatures){
       //console.log('getClusterLeaves', err, aFeatures);
       console.log('getClusterLeaves', err, aFeatures[0].properties);
       
       var perfisEmInfo = []
       //loop dentro dos clusters, quantos @ tiver
       for (var i=0;i<aFeatures.length;i++) {
        perfisEmInfo.push(aFeatures[i].properties.mag)  
      } 
      console.log(perfisEmInfo)
      //desenhar o popup 
      document.getElementById('infoConteudo').innerHTML=''
      document.getElementById('estadoExib').innerHTML=aFeatures[0].properties.lugar.toUpperCase()
      document.getElementById('box-info').style.display="inline-block"
      var caixa = document.getElementById('infoConteudo')


      for (var i=0; i<perfisEmInfo.length; i++) {
        var link = 'https://www.instagram.com/'+ perfisEmInfo[i].substr(1)+'/';
        var a = document.createElement('a');
        a.setAttribute('href',link);
        a.setAttribute('target','_blank')
        a.innerHTML = '<p>'+perfisEmInfo[i].toUpperCase()+'<p>';
        caixa.appendChild(a);
      }

    })



       
    
       


    });
    
    //bolinhas sozinhas :(
    map.on('click', 'unclustered-point', function (e) {
      var perfilEmInfo = e.features[0].properties.mag;
      var onde = e.features[0].properties.lugar;
      console.log(perfilEmInfo,onde)

      //desenhar o popup 
      document.getElementById('infoConteudo').innerHTML=''
      document.getElementById('estadoExib').innerHTML=onde.toUpperCase()
      document.getElementById('box-info').style.display="inline-block"
      var caixa = document.getElementById('infoConteudo')

        var link = 'https://www.instagram.com/'+ perfilEmInfo.substr(1)+'/';
        var a = document.createElement('a');
        a.setAttribute('href',link);
        a.setAttribute('target','_blank')
        a.innerHTML = '<p>'+perfilEmInfo.toUpperCase()+'<p>';
        caixa.appendChild(a);
    })

    map.on('mouseenter', 'clusters', function () {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', function () {
      map.getCanvas().style.cursor = '';
    });
    map.on('click', function(e) {
      if (e.defaultPrevented === false) {
        console.log('hide taskbar');
        document.getElementById('box-info').style.display="none"
      }
    });
    
});
