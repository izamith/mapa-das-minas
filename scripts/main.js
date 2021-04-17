/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/

console.log('javascript ok')

let minas = []
let estados = []
let perfis = []
let table 

let minasConjunto = []

//carrega os dados em variaveis
async function getData() {
    //carrega a tabela do arquivo csv
    const response = await fetch('data/dados.csv');
    //nome,inicio,fim
    const data = await response.text();
    //debug
        //console.log(data);

    //pega cada linha da tabela até onde acaba (enter), pode ser
    //'\n' ou '\r', vai depender da tabela, checar antes
    //como tá gerando os csv
    //.slice "corta" o cabeçalho do array (row[0]), pq
    //coloquei pra começar no 1
    table = data.split('\n').slice(1);

    //debug
        //console.log(table);
    console.log('csv carregado')
    dataCollection()
}

function dataCollection(){
    //pegar cada elemento(elt) de cada linha(row)
    //loop
    table.forEach(row=> {
        //pega cada linha até onde vai ","
        //coluna
        const columns = row.split(',');
        //elemento 0 da linha
        const nomeMina = columns[0];
        //coloca cada area numa array "xareas"
        minas.push(nomeMina);
        //elemento 1 da linha
        const estadoMina = columns[1];
        estados.push(estadoMina);

        const perfilMina = columns[2];
        perfis.push(perfilMina)
        });

        //debug
            //console.log(estados, minas)

        //passar por todos os blocos
        for (var i = 0; i<minas.length; i++) {
            var minai
        
            //cada bloco é um objeto com nome e coordenadas iniciais e finais
            minai = new Mina(minas[i],estados[i], perfis[i])
                
                minasConjunto.push(minai)
                    // console.log(blocoi)    
            //console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
        }
        console.log('minas criados')
        console.log(minasConjunto)

    //   document.getElementById('num-blocos').innerHTML=blocoConjunto.length

}

//funcao construtora de objetos MINA
function Mina(pessoa, lugar, perfil) {
    this.nome = pessoa;
    this.estado= lugar;
    this.perfil = perfil;
  }

async function Start() {
    await getData();
}

