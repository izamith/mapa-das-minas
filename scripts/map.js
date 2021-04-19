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

      lugaresConjunto.push(conjuntos[i].sigla)
      pessoasConjunto.push(conjuntos[i].pessoa)
      coordenadasConjunto.push(coord)
      

      //console.log(pessoasConjunto,coordenadasConjunto)
    }

    // Add a new source from our GeoJSON data and
    // set the 'cluster' option to true. GL-JS will
    // add the point_count property to your source data.
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
         { "type": "Feature", "properties": { "mag": pessoasConjunto[1], "lugar": lugaresConjunto[1], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[1] } }
    ]},
   
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 5 // Radius of each cluster when clustering points (defaults to 50)
    });
     
    map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'meninas',
    filter: ['has', 'point_count'],
    paint: {
    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
    // with three steps to implement three types of circles:
    //   * Blue, 20px circles when point count is less than 100
    //   * Yellow, 30px circles when point count is between 100 and 750
    //   * Pink, 40px circles when point count is greater than or equal to 750
    'circle-color': [
      'step',
      ['get', 'point_count'],
          '#FAF7EE',
          100,
          '#FAF7EE',
          750,
          '#FAF7EE'
          ],
    'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
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
  
    /*
    // inspect a cluster on click
    map.on('click', 'clusters', function (e) {

                    
        
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var mag = e.features[0].properties.mag;
                    
                    console.log(e.features.properties)
                    // Ensure that if the map is zoomed out such that
                    // multiple copies of the feature are visible, the
                    // popup appears over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                      }
                      
                      new mapboxgl.Popup()
                      .setLngLat(coordinates)
                      .setHTML(
                      'magnitude: ' + mag
                      )
                      .addTo(map);
                      });
    
     */                 

                      map.on('click',/* cluster layer id */ 'clusters', function (e) {

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
                          console.log('getClusterLeaves', err, aFeatures);
                        })
                      
                      });








                      map.on('mouseenter', 'clusters', function () {
                      map.getCanvas().style.cursor = 'pointer';
                      });
                      map.on('mouseleave', 'clusters', function () {
                      map.getCanvas().style.cursor = '';
                      });

/*  
    // When a click event occurs on a feature in
    // the unclustered-point layer, open a popup at
    // the location of the feature, with
    // description HTML from its properties.
    map.on('click', 'unclustered-point', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var mag = e.features[0].properties.mag;
    var tsunami;
     
    if (e.features[0].properties.tsunami === 1) {
    tsunami = 'yes';
    } else {
    tsunami = 'no';
    }
     
    // Ensure that if the map is zoomed out such that
    // multiple copies of the feature are visible, the
    // popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(
    'magnitude: ' + mag + '<br>Was there a tsunami?: ' + tsunami
    )
    .addTo(map);
    });
     
    map.on('mouseenter', 'clusters', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', function () {
    map.getCanvas().style.cursor = '';
    });
  */
});

//////////////////////////////HELPER FUNCTIONS//////////////////////////////////
