/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/

/* 
Coordenadas dos estados do Brasil:
https://gist.github.com/ricardobeat/674646
*/

let siglasEstados = []
let latEstados = []
let longEstados = []
let coordenadas = []

//funcao construtora de objetos ESTADO
function Estado(sigla, estado, lat, long) {
    this.sigla = sigla;
    this.estado = estado;
    this.latitude = lat;
    this.longitude = long;
  }
