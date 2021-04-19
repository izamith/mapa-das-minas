/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/

//funcao construtora de objetos MINA
function Mina(lugar, perfil) {
    this.estado= lugar;
    this.perfil = perfil;
  }

//funcao construtora de objetos Caracters
function Caracters(sigla, estado, lat, long, pessoa) {
  this.sigla = sigla;
  this.estado = estado;
  this.latitude = lat;
  this.longitude = long;
  this.pessoa = pessoa
}
