/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////
*/

function criaConjuntos() {
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
      estadoi = new Conjunto(incluirSigla, j, lat, long, minasConjunto[i].perfil )
          
          conjuntos.push(estadoi)
  
  }
    //debug
      //console.log(conjuntos)
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

function Conjunto(sigla, estado, lat, long, pessoa) {
  this.sigla = sigla;
  this.estado = estado;
  this.latitude = lat;
  this.longitude = long;
  this.pessoa = pessoa
}


////funcoes para o mapa////
function addSource() {
  var p=pessoasConjunto.length
  console.log('A lista tem '+p+' meninas!')
  //editar a quantidade de meninas em data/dados.csv

    map.addSource('meninas', {
        type: 'geojson',
        
          //cada menina 1 linha, tirar isso do hardcoded e colocar em uma tabela separada
            //para linkar aqui
            /*
              data:
              'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
            
            */
        data: {
          "type": "FeatureCollection",
          //sempre pessoasConjunto - 1
          "features": [
             { "type": "Feature", "properties": { "mag": pessoasConjunto[0], "lugar": lugaresConjunto[0], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[0] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[1], "lugar": lugaresConjunto[1], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[1] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[2], "lugar": lugaresConjunto[2], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[2] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[3], "lugar": lugaresConjunto[3], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[3] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[4], "lugar": lugaresConjunto[4], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[4] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[5], "lugar": lugaresConjunto[5], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[5] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[6], "lugar": lugaresConjunto[6], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[6] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[7], "lugar": lugaresConjunto[7], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[7] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[8], "lugar": lugaresConjunto[8], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[8] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[9], "lugar": lugaresConjunto[9], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[9] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[10], "lugar": lugaresConjunto[10], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[10] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[11], "lugar": lugaresConjunto[11], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[11] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[12], "lugar": lugaresConjunto[12], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[12] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[13], "lugar": lugaresConjunto[13], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[13] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[14], "lugar": lugaresConjunto[14], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[14] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[15], "lugar": lugaresConjunto[15], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[15] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[16], "lugar": lugaresConjunto[16], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[16] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[17], "lugar": lugaresConjunto[17], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[17] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[18], "lugar": lugaresConjunto[18], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[18] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[19], "lugar": lugaresConjunto[19], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[19] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[20], "lugar": lugaresConjunto[20], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[20] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[21], "lugar": lugaresConjunto[21], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[21] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[22], "lugar": lugaresConjunto[22], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[22] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[23], "lugar": lugaresConjunto[23], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[23] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[24], "lugar": lugaresConjunto[24], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[24] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[25], "lugar": lugaresConjunto[25], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[25] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[26], "lugar": lugaresConjunto[26], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[26] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[27], "lugar": lugaresConjunto[27], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[27] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[28], "lugar": lugaresConjunto[28], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[28] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[29], "lugar": lugaresConjunto[29], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[29] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[30], "lugar": lugaresConjunto[30], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[30] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[31], "lugar": lugaresConjunto[31], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[31] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[32], "lugar": lugaresConjunto[32], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[32] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[33], "lugar": lugaresConjunto[33], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[33] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[34], "lugar": lugaresConjunto[34], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[34] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[35], "lugar": lugaresConjunto[35], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[35] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[36], "lugar": lugaresConjunto[36], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[36] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[37], "lugar": lugaresConjunto[37], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[37] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[38], "lugar": lugaresConjunto[38], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[38] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[39], "lugar": lugaresConjunto[39], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[39] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[40], "lugar": lugaresConjunto[40], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[40] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[41], "lugar": lugaresConjunto[41], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[41] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[42], "lugar": lugaresConjunto[42], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[42] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[43], "lugar": lugaresConjunto[43], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[43] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[44], "lugar": lugaresConjunto[44], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[44] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[45], "lugar": lugaresConjunto[45], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[45] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[46], "lugar": lugaresConjunto[46], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[46] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[47], "lugar": lugaresConjunto[47], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[47] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[48], "lugar": lugaresConjunto[48], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[48] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[49], "lugar": lugaresConjunto[49], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[49] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[50], "lugar": lugaresConjunto[50], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[50] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[51], "lugar": lugaresConjunto[51], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[51] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[52], "lugar": lugaresConjunto[52], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[52] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[53], "lugar": lugaresConjunto[53], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[53] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[54], "lugar": lugaresConjunto[54], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[54] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[55], "lugar": lugaresConjunto[55], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[55] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[56], "lugar": lugaresConjunto[56], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[56] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[57], "lugar": lugaresConjunto[57], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[57] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[58], "lugar": lugaresConjunto[58], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[58] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[59], "lugar": lugaresConjunto[59], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[59] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[60], "lugar": lugaresConjunto[60], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[60] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[61], "lugar": lugaresConjunto[61], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[61] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[62], "lugar": lugaresConjunto[62], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[62] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[63], "lugar": lugaresConjunto[63], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[63] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[64], "lugar": lugaresConjunto[64], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[64] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[65], "lugar": lugaresConjunto[65], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[65] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[66], "lugar": lugaresConjunto[66], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[66] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[67], "lugar": lugaresConjunto[67], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[67] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[68], "lugar": lugaresConjunto[68], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[68] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[69], "lugar": lugaresConjunto[69], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[69] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[70], "lugar": lugaresConjunto[70], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[70] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[71], "lugar": lugaresConjunto[71], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[71] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[72], "lugar": lugaresConjunto[72], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[72] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[73], "lugar": lugaresConjunto[73], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[73] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[74], "lugar": lugaresConjunto[74], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[74] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[75], "lugar": lugaresConjunto[75], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[75] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[76], "lugar": lugaresConjunto[76], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[76] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[77], "lugar": lugaresConjunto[77], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[77] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[78], "lugar": lugaresConjunto[78], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[78] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[79], "lugar": lugaresConjunto[79], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[79] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[80], "lugar": lugaresConjunto[80], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[80] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[81], "lugar": lugaresConjunto[81], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[81] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[82], "lugar": lugaresConjunto[82], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[82] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[83], "lugar": lugaresConjunto[83], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[83] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[84], "lugar": lugaresConjunto[84], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[84] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[85], "lugar": lugaresConjunto[85], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[85] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[86], "lugar": lugaresConjunto[86], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[86] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[87], "lugar": lugaresConjunto[87], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[87] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[88], "lugar": lugaresConjunto[88], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[88] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[89], "lugar": lugaresConjunto[89], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[89] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[90], "lugar": lugaresConjunto[90], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[90] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[91], "lugar": lugaresConjunto[91], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[91] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[92], "lugar": lugaresConjunto[92], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[92] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[93], "lugar": lugaresConjunto[93], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[93] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[94], "lugar": lugaresConjunto[94], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[94] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[95], "lugar": lugaresConjunto[95], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[95] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[96], "lugar": lugaresConjunto[96], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[96] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[97], "lugar": lugaresConjunto[97], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[97] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[98], "lugar": lugaresConjunto[98], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[98] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[99], "lugar": lugaresConjunto[99], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[99] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[100], "lugar": lugaresConjunto[100], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[100] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[101], "lugar": lugaresConjunto[101], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[101] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[102], "lugar": lugaresConjunto[102], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[102] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[103], "lugar": lugaresConjunto[103], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[103] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[104], "lugar": lugaresConjunto[104], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[104] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[105], "lugar": lugaresConjunto[105], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[105] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[106], "lugar": lugaresConjunto[106], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[106] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[107], "lugar": lugaresConjunto[107], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[107] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[108], "lugar": lugaresConjunto[108], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[108] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[109], "lugar": lugaresConjunto[109], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[109] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[110], "lugar": lugaresConjunto[110], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[110] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[111], "lugar": lugaresConjunto[111], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[111] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[112], "lugar": lugaresConjunto[112], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[112] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[113], "lugar": lugaresConjunto[113], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[113] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[114], "lugar": lugaresConjunto[114], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[114] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[115], "lugar": lugaresConjunto[115], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[115] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[116], "lugar": lugaresConjunto[116], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[116] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[117], "lugar": lugaresConjunto[117], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[117] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[118], "lugar": lugaresConjunto[118], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[118] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[119], "lugar": lugaresConjunto[119], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[119] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[120], "lugar": lugaresConjunto[120], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[120] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[121], "lugar": lugaresConjunto[121], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[121] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[122], "lugar": lugaresConjunto[122], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[122] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[123], "lugar": lugaresConjunto[123], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[123] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[124], "lugar": lugaresConjunto[124], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[124] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[125], "lugar": lugaresConjunto[125], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[124] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[126], "lugar": lugaresConjunto[126], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[126] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[127], "lugar": lugaresConjunto[127], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[127] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[128], "lugar": lugaresConjunto[128], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[128] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[129], "lugar": lugaresConjunto[129], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[129] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[130], "lugar": lugaresConjunto[130], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[130] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[131], "lugar": lugaresConjunto[131], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[131] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[132], "lugar": lugaresConjunto[132], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[132] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[133], "lugar": lugaresConjunto[133], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[133] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[134], "lugar": lugaresConjunto[134], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[134] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[135], "lugar": lugaresConjunto[135], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[135] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[136], "lugar": lugaresConjunto[136], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[136] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[137], "lugar": lugaresConjunto[137], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[137] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[138], "lugar": lugaresConjunto[138], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[138] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[139], "lugar": lugaresConjunto[139], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[139] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[140], "lugar": lugaresConjunto[140], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[140] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[141], "lugar": lugaresConjunto[141], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[141] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[142], "lugar": lugaresConjunto[142], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[142] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[143], "lugar": lugaresConjunto[143], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[143] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[144], "lugar": lugaresConjunto[144], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[144] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[145], "lugar": lugaresConjunto[145], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[145] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[146], "lugar": lugaresConjunto[146], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[146] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[147], "lugar": lugaresConjunto[147], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[147] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[148], "lugar": lugaresConjunto[148], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[148] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[149], "lugar": lugaresConjunto[149], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[149] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[150], "lugar": lugaresConjunto[150], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[150] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[151], "lugar": lugaresConjunto[151], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[151] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[152], "lugar": lugaresConjunto[152], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[152] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[153], "lugar": lugaresConjunto[153], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[153] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[154], "lugar": lugaresConjunto[154], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[154] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[155], "lugar": lugaresConjunto[155], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[155] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[156], "lugar": lugaresConjunto[156], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[156] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[157], "lugar": lugaresConjunto[157], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[157] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[158], "lugar": lugaresConjunto[158], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[158] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[159], "lugar": lugaresConjunto[159], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[159] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[160], "lugar": lugaresConjunto[160], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[160] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[161], "lugar": lugaresConjunto[161], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[161] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[162], "lugar": lugaresConjunto[162], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[162] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[163], "lugar": lugaresConjunto[163], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[163] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[164], "lugar": lugaresConjunto[164], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[164] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[165], "lugar": lugaresConjunto[165], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[165] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[166], "lugar": lugaresConjunto[166], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[166] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[167], "lugar": lugaresConjunto[167], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[167] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[168], "lugar": lugaresConjunto[168], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[168] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[169], "lugar": lugaresConjunto[169], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[169] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[170], "lugar": lugaresConjunto[170], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[170] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[171], "lugar": lugaresConjunto[171], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[171] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[172], "lugar": lugaresConjunto[172], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[172] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[173], "lugar": lugaresConjunto[173], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[173] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[174], "lugar": lugaresConjunto[174], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[174] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[175], "lugar": lugaresConjunto[175], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[175] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[176], "lugar": lugaresConjunto[176], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[176] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[177], "lugar": lugaresConjunto[177], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[177] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[178], "lugar": lugaresConjunto[178], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[178] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[179], "lugar": lugaresConjunto[179], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[179] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[180], "lugar": lugaresConjunto[180], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[180] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[181], "lugar": lugaresConjunto[181], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[181] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[182], "lugar": lugaresConjunto[182], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[182] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[183], "lugar": lugaresConjunto[183], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[183] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[184], "lugar": lugaresConjunto[184], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[184] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[185], "lugar": lugaresConjunto[185], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[185] } },   
             { "type": "Feature", "properties": { "mag": pessoasConjunto[186], "lugar": lugaresConjunto[186], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[186] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[187], "lugar": lugaresConjunto[187], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[187] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[188], "lugar": lugaresConjunto[188], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[188] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[189], "lugar": lugaresConjunto[189], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[189] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[190], "lugar": lugaresConjunto[190], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[190] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[191], "lugar": lugaresConjunto[191], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[191] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[192], "lugar": lugaresConjunto[192], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[192] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[193], "lugar": lugaresConjunto[193], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[193] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[194], "lugar": lugaresConjunto[194], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[194] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[195], "lugar": lugaresConjunto[195], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[195] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[196], "lugar": lugaresConjunto[196], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[196] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[197], "lugar": lugaresConjunto[197], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[197] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[198], "lugar": lugaresConjunto[198], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[198] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[199], "lugar": lugaresConjunto[199], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[199] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[200], "lugar": lugaresConjunto[200], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[200] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[201], "lugar": lugaresConjunto[201], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[201] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[202], "lugar": lugaresConjunto[202], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[202] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[203], "lugar": lugaresConjunto[203], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[203] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[204], "lugar": lugaresConjunto[204], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[204] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[205], "lugar": lugaresConjunto[205], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[205] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[206], "lugar": lugaresConjunto[206], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[206] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[207], "lugar": lugaresConjunto[207], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[207] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[208], "lugar": lugaresConjunto[208], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[208] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[209], "lugar": lugaresConjunto[209], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[209] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[210], "lugar": lugaresConjunto[210], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[210] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[211], "lugar": lugaresConjunto[211], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[211] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[212], "lugar": lugaresConjunto[212], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[212] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[213], "lugar": lugaresConjunto[213], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[213] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[214], "lugar": lugaresConjunto[214], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[214] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[215], "lugar": lugaresConjunto[215], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[215] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[216], "lugar": lugaresConjunto[216], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[216] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[217], "lugar": lugaresConjunto[217], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[217] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[218], "lugar": lugaresConjunto[218], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[218] } },  
             { "type": "Feature", "properties": { "mag": pessoasConjunto[219], "lugar": lugaresConjunto[219], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[219] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[220], "lugar": lugaresConjunto[220], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[220] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[221], "lugar": lugaresConjunto[221], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[221] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[222], "lugar": lugaresConjunto[222], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[222] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[223], "lugar": lugaresConjunto[223], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[223] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[224], "lugar": lugaresConjunto[224], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[224] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[225], "lugar": lugaresConjunto[225], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[225] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[226], "lugar": lugaresConjunto[226], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[226] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[227], "lugar": lugaresConjunto[227], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[227] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[228], "lugar": lugaresConjunto[228], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[228] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[229], "lugar": lugaresConjunto[229], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[229] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[230], "lugar": lugaresConjunto[230], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[230] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[231], "lugar": lugaresConjunto[231], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[231] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[232], "lugar": lugaresConjunto[232], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[232] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[233], "lugar": lugaresConjunto[233], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[233] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[234], "lugar": lugaresConjunto[234], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[234] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[235], "lugar": lugaresConjunto[235], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[235] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[236], "lugar": lugaresConjunto[236], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[236] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[237], "lugar": lugaresConjunto[237], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[237] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[238], "lugar": lugaresConjunto[238], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[238] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[239], "lugar": lugaresConjunto[239], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[239] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[240], "lugar": lugaresConjunto[240], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[240] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[241], "lugar": lugaresConjunto[241], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[241] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[242], "lugar": lugaresConjunto[242], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[242] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[243], "lugar": lugaresConjunto[243], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[243] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[244], "lugar": lugaresConjunto[244], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[244] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[245], "lugar": lugaresConjunto[245], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[245] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[246], "lugar": lugaresConjunto[246], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[246] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[247], "lugar": lugaresConjunto[247], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[247] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[248], "lugar": lugaresConjunto[248], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[248] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[249], "lugar": lugaresConjunto[249], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[249] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[250], "lugar": lugaresConjunto[250], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[250] } }, 
             { "type": "Feature", "properties": { "mag": pessoasConjunto[251], "lugar": lugaresConjunto[251], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[251] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[252], "lugar": lugaresConjunto[252], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[252] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[253], "lugar": lugaresConjunto[253], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[253] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[254], "lugar": lugaresConjunto[254], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[254] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[255], "lugar": lugaresConjunto[255], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[255] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[256], "lugar": lugaresConjunto[256], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[256] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[257], "lugar": lugaresConjunto[257], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[257] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[258], "lugar": lugaresConjunto[258], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[258] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[259], "lugar": lugaresConjunto[259], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[259] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[260], "lugar": lugaresConjunto[260], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[260] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[261], "lugar": lugaresConjunto[261], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[261] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[262], "lugar": lugaresConjunto[262], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[262] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[263], "lugar": lugaresConjunto[263], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[263] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[264], "lugar": lugaresConjunto[264], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[264] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[265], "lugar": lugaresConjunto[265], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[265] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[266], "lugar": lugaresConjunto[266], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[266] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[267], "lugar": lugaresConjunto[267], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[267] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[268], "lugar": lugaresConjunto[268], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[268] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[269], "lugar": lugaresConjunto[269], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[269] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[270], "lugar": lugaresConjunto[270], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[270] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[271], "lugar": lugaresConjunto[271], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[271] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[272], "lugar": lugaresConjunto[272], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[272] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[273], "lugar": lugaresConjunto[273], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[273] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[274], "lugar": lugaresConjunto[274], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[274] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[275], "lugar": lugaresConjunto[275], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[275] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[276], "lugar": lugaresConjunto[276], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[276] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[277], "lugar": lugaresConjunto[277], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[277] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[278], "lugar": lugaresConjunto[278], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[278] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[279], "lugar": lugaresConjunto[279], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[279] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[280], "lugar": lugaresConjunto[280], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[280] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[281], "lugar": lugaresConjunto[281], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[281] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[282], "lugar": lugaresConjunto[282], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[281] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[283], "lugar": lugaresConjunto[283], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[283] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[284], "lugar": lugaresConjunto[284], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[284] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[285], "lugar": lugaresConjunto[285], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[285] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[286], "lugar": lugaresConjunto[286], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[286] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[287], "lugar": lugaresConjunto[287], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[287] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[288], "lugar": lugaresConjunto[288], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[288] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[289], "lugar": lugaresConjunto[289], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[289] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[290], "lugar": lugaresConjunto[290], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[290] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[291], "lugar": lugaresConjunto[291], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[291] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[292], "lugar": lugaresConjunto[292], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[292] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[293], "lugar": lugaresConjunto[293], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[293] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[294], "lugar": lugaresConjunto[294], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[294] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[295], "lugar": lugaresConjunto[295], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[295] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[296], "lugar": lugaresConjunto[296], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[296] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[297], "lugar": lugaresConjunto[297], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[297] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[298], "lugar": lugaresConjunto[298], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[298] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[299], "lugar": lugaresConjunto[299], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[299] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[300], "lugar": lugaresConjunto[300], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[300] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[301], "lugar": lugaresConjunto[301], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[301] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[302], "lugar": lugaresConjunto[302], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[302] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[303], "lugar": lugaresConjunto[303], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[303] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[304], "lugar": lugaresConjunto[304], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[304] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[305], "lugar": lugaresConjunto[305], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[305] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[306], "lugar": lugaresConjunto[306], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[306] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[307], "lugar": lugaresConjunto[307], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[307] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[308], "lugar": lugaresConjunto[308], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[308] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[309], "lugar": lugaresConjunto[309], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[309] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[310], "lugar": lugaresConjunto[310], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[310] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[311], "lugar": lugaresConjunto[311], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[311] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[312], "lugar": lugaresConjunto[312], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[312] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[313], "lugar": lugaresConjunto[313], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[313] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[314], "lugar": lugaresConjunto[314], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[314] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[315], "lugar": lugaresConjunto[315], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[315] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[316], "lugar": lugaresConjunto[316], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[316] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[317], "lugar": lugaresConjunto[317], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[317] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[318], "lugar": lugaresConjunto[318], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[318] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[319], "lugar": lugaresConjunto[319], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[319] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[320], "lugar": lugaresConjunto[320], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[320] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[321], "lugar": lugaresConjunto[321], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[321] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[322], "lugar": lugaresConjunto[322], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[322] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[323], "lugar": lugaresConjunto[323], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[323] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[324], "lugar": lugaresConjunto[324], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[324] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[325], "lugar": lugaresConjunto[325], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[325] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[326], "lugar": lugaresConjunto[326], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[326] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[327], "lugar": lugaresConjunto[327], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[327] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[328], "lugar": lugaresConjunto[328], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[328] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[329], "lugar": lugaresConjunto[329], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[329] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[330], "lugar": lugaresConjunto[330], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[330] } },  
              { "type": "Feature", "properties": { "mag": pessoasConjunto[331], "lugar": lugaresConjunto[331], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[331] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[332], "lugar": lugaresConjunto[332], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[332] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[333], "lugar": lugaresConjunto[333], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[333] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[334], "lugar": lugaresConjunto[334], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[334] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[335], "lugar": lugaresConjunto[335], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[335] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[336], "lugar": lugaresConjunto[336], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[336] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[337], "lugar": lugaresConjunto[337], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[337] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[338], "lugar": lugaresConjunto[338], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[338] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[339], "lugar": lugaresConjunto[339], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[339] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[340], "lugar": lugaresConjunto[340], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[340] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[341], "lugar": lugaresConjunto[341], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[341] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[342], "lugar": lugaresConjunto[342], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[342] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[343], "lugar": lugaresConjunto[343], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[343] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[344], "lugar": lugaresConjunto[344], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[344] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[345], "lugar": lugaresConjunto[345], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[345] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[346], "lugar": lugaresConjunto[346], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[346] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[347], "lugar": lugaresConjunto[347], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[347] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[348], "lugar": lugaresConjunto[348], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[348] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[349], "lugar": lugaresConjunto[349], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[349] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[350], "lugar": lugaresConjunto[350], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[350] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[351], "lugar": lugaresConjunto[351], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[351] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[352], "lugar": lugaresConjunto[352], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[352] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[353], "lugar": lugaresConjunto[353], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[353] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[354], "lugar": lugaresConjunto[354], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[354] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[355], "lugar": lugaresConjunto[355], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[355] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[356], "lugar": lugaresConjunto[356], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[356] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[357], "lugar": lugaresConjunto[357], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[357] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[358], "lugar": lugaresConjunto[358], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[358] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[359], "lugar": lugaresConjunto[359], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[359] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[360], "lugar": lugaresConjunto[360], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[360] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[361], "lugar": lugaresConjunto[361], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[361] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[362], "lugar": lugaresConjunto[362], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[362] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[363], "lugar": lugaresConjunto[363], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[363] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[364], "lugar": lugaresConjunto[364], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[364] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[365], "lugar": lugaresConjunto[365], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[365] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[366], "lugar": lugaresConjunto[366], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[366] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[367], "lugar": lugaresConjunto[367], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[367] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[368], "lugar": lugaresConjunto[368], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[368] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[369], "lugar": lugaresConjunto[369], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[369] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[370], "lugar": lugaresConjunto[370], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[370] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[371], "lugar": lugaresConjunto[371], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[371] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[372], "lugar": lugaresConjunto[372], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[372] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[373], "lugar": lugaresConjunto[373], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[373] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[374], "lugar": lugaresConjunto[374], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[374] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[375], "lugar": lugaresConjunto[375], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[375] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[376], "lugar": lugaresConjunto[376], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[376] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[377], "lugar": lugaresConjunto[377], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[377] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[378], "lugar": lugaresConjunto[378], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[378] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[379], "lugar": lugaresConjunto[379], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[379] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[380], "lugar": lugaresConjunto[380], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[380] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[381], "lugar": lugaresConjunto[381], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[381] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[382], "lugar": lugaresConjunto[382], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[382] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[383], "lugar": lugaresConjunto[383], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[383] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[384], "lugar": lugaresConjunto[384], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[384] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[385], "lugar": lugaresConjunto[385], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[385] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[386], "lugar": lugaresConjunto[386], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[386] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[387], "lugar": lugaresConjunto[387], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[387] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[388], "lugar": lugaresConjunto[388], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[388] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[389], "lugar": lugaresConjunto[389], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[389] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[390], "lugar": lugaresConjunto[390], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[390] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[391], "lugar": lugaresConjunto[391], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[391] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[392], "lugar": lugaresConjunto[392], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[392] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[393], "lugar": lugaresConjunto[393], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[393] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[394], "lugar": lugaresConjunto[394], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[394] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[395], "lugar": lugaresConjunto[395], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[395] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[396], "lugar": lugaresConjunto[396], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[396] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[397], "lugar": lugaresConjunto[397], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[397] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[398], "lugar": lugaresConjunto[398], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[398] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[399], "lugar": lugaresConjunto[399], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[399] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[400], "lugar": lugaresConjunto[400], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[400] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[401], "lugar": lugaresConjunto[401], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[401] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[402], "lugar": lugaresConjunto[402], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[402] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[403], "lugar": lugaresConjunto[403], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[403] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[404], "lugar": lugaresConjunto[404], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[404] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[405], "lugar": lugaresConjunto[405], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[405] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[406], "lugar": lugaresConjunto[406], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[406] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[407], "lugar": lugaresConjunto[407], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[407] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[408], "lugar": lugaresConjunto[408], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[408] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[409], "lugar": lugaresConjunto[409], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[409] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[410], "lugar": lugaresConjunto[410], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[410] } },
            
              { "type": "Feature", "properties": { "mag": pessoasConjunto[411], "lugar": lugaresConjunto[411], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[411] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[412], "lugar": lugaresConjunto[412], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[412] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[413], "lugar": lugaresConjunto[413], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[413] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[414], "lugar": lugaresConjunto[414], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[414] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[415], "lugar": lugaresConjunto[415], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[415] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[416], "lugar": lugaresConjunto[416], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[416] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[417], "lugar": lugaresConjunto[417], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[417] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[418], "lugar": lugaresConjunto[418], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[418] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[419], "lugar": lugaresConjunto[419], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[419] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[420], "lugar": lugaresConjunto[420], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[420] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[421], "lugar": lugaresConjunto[421], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[421] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[422], "lugar": lugaresConjunto[422], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[422] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[423], "lugar": lugaresConjunto[423], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[423] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[424], "lugar": lugaresConjunto[424], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[424] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[425], "lugar": lugaresConjunto[425], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[425] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[426], "lugar": lugaresConjunto[426], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[426] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[427], "lugar": lugaresConjunto[427], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[427] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[428], "lugar": lugaresConjunto[428], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[428] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[429], "lugar": lugaresConjunto[429], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[429] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[430], "lugar": lugaresConjunto[430], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[430] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[431], "lugar": lugaresConjunto[431], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[431] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[432], "lugar": lugaresConjunto[432], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[432] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[433], "lugar": lugaresConjunto[433], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[433] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[434], "lugar": lugaresConjunto[434], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[434] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[435], "lugar": lugaresConjunto[435], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[435] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[436], "lugar": lugaresConjunto[436], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[436] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[437], "lugar": lugaresConjunto[437], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[437] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[438], "lugar": lugaresConjunto[438], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[438] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[439], "lugar": lugaresConjunto[439], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[439] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[440], "lugar": lugaresConjunto[440], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[440] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[441], "lugar": lugaresConjunto[441], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[441] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[442], "lugar": lugaresConjunto[442], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[442] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[443], "lugar": lugaresConjunto[443], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[443] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[444], "lugar": lugaresConjunto[444], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[444] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[445], "lugar": lugaresConjunto[445], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[445] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[446], "lugar": lugaresConjunto[446], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[446] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[447], "lugar": lugaresConjunto[447], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[447] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[448], "lugar": lugaresConjunto[448], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[448] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[449], "lugar": lugaresConjunto[449], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[449] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[450], "lugar": lugaresConjunto[450], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[450] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[451], "lugar": lugaresConjunto[451], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[451] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[452], "lugar": lugaresConjunto[452], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[452] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[453], "lugar": lugaresConjunto[453], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[453] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[454], "lugar": lugaresConjunto[454], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[454] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[455], "lugar": lugaresConjunto[455], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[455] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[456], "lugar": lugaresConjunto[456], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[456] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[457], "lugar": lugaresConjunto[457], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[457] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[458], "lugar": lugaresConjunto[458], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[458] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[459], "lugar": lugaresConjunto[459], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[459] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[460], "lugar": lugaresConjunto[460], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[460] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[461], "lugar": lugaresConjunto[461], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[461] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[462], "lugar": lugaresConjunto[462], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[462] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[463], "lugar": lugaresConjunto[463], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[463] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[464], "lugar": lugaresConjunto[464], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[464] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[465], "lugar": lugaresConjunto[465], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[465] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[466], "lugar": lugaresConjunto[466], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[466] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[467], "lugar": lugaresConjunto[467], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[467] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[468], "lugar": lugaresConjunto[468], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[468] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[469], "lugar": lugaresConjunto[469], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[469] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[470], "lugar": lugaresConjunto[470], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[470] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[471], "lugar": lugaresConjunto[471], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[471] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[472], "lugar": lugaresConjunto[472], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[472] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[473], "lugar": lugaresConjunto[473], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[473] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[473], "lugar": lugaresConjunto[473], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[473] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[473], "lugar": lugaresConjunto[473], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[473] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[473], "lugar": lugaresConjunto[473], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[473] } },
              { "type": "Feature", "properties": { "mag": pessoasConjunto[474], "lugar": lugaresConjunto[474], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[474] } },
             /*
             { "type": "Feature", "properties": { "mag": pessoasConjunto[475], "lugar": lugaresConjunto[475], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[475] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[476], "lugar": lugaresConjunto[476], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[476] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[477], "lugar": lugaresConjunto[477], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[477] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[478], "lugar": lugaresConjunto[478], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[478] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[479], "lugar": lugaresConjunto[479], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[479] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[480], "lugar": lugaresConjunto[480], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[480] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[481], "lugar": lugaresConjunto[481], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[481] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[482], "lugar": lugaresConjunto[482], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[482] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[483], "lugar": lugaresConjunto[483], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[483] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[484], "lugar": lugaresConjunto[484], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[484] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[485], "lugar": lugaresConjunto[485], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[485] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[486], "lugar": lugaresConjunto[486], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[486] } },
             { "type": "Feature", "properties": { "mag": pessoasConjunto[487], "lugar": lugaresConjunto[487], "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": coordenadasConjunto[487] } },             
              */
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

function abreSaibaMais() {
  document.getElementById('maisInfo').style.height="100%"
  document.getElementById('maisInfo').style.opacity=1
  document.getElementById('maisInfo').style.display='flex'

}

function fechaSaibaMais() {
  document.getElementById('maisInfo').style.height="0"
  document.getElementById('maisInfo').style.opacity=0
  document.getElementById('maisInfo').style.display='none'
}


console.log('HELPER FUNCTIONS Loaded')
