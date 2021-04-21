/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////

    Esse arquivo pega os dados das tabelas CSV 
    @ das meninas do quad e coordenadas de cada estado brasileiro

    DADOS DAS TABELAS
    Coordenadas dos estados do Brasil:
    https://gist.github.com/ricardobeat/674646

    Compilado de @ das meninas do quad: 
    https://instagram.com/haoleskater/
*/

let estados = []
let perfis = []
let minasConjunto = []
let table 

let siglasEstados = []
let latEstados = []
let longEstados = []
let coordenadas = []


//carrega os dados em variaveis ESTADOS
async function getDataEstados() {
    //carrega a tabela do arquivo csv
    const response = await fetch('data/coordenadas.csv');
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
    dataCollectionEstados()
}
function dataCollectionEstados(){
    //pegar cada elemento(elt) de cada linha(row)
    //loop
    table.forEach(row=> {
        //pega cada linha até onde vai ","
        //coluna
        const columns = row.split(',');
        //elemento 0 da linha
        const siglaEstado = columns[1];
        //coloca cada area numa array "xareas"
        siglasEstados.push(siglaEstado);

        const lat = columns[1];
        latEstados.push(lat)
        const long = columns[2];
        longEstados.push(long)
        });

        //debug
            //console.log(estados, perfis)
        //console.log('CSV ESTADOS Loaded')
}

//carrega os dados em variaveis MENINAS
async function getDataMinas() {
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
    dataCollectionMinas()
}
function dataCollectionMinas(){
    //pegar cada elemento(elt) de cada linha(row)
    //loop
    table.forEach(row=> {
        //pega cada linha até onde vai ","
        //coluna
        const columns = row.split(',');
        //elemento 0 da linha
        const estadoMina = columns[1];
        //coloca cada area numa array "xareas"
        estados.push(estadoMina);

        const perfilMina = columns[0];
        perfis.push(perfilMina)
        });

        //debug
            //console.log(estados, perfis)

        //passar por todos as meninas
        for (var i = 0; i<perfis.length; i++) {
            var minai
            //cada menina é um objeto com nome e coordenadas iniciais e finais
            minai = new Mina(estados[i], perfis[i])
            minasConjunto.push(minai)
        }

        //console.log('CSV MINAS Loaded')
}

console.log('ALL DATA COLLECTIONS Loaded')