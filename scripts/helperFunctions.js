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
             /*
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
