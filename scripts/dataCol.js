/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/

let estados = []
let perfis = []
let minasConjunto = []
let table 


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
    console.log('csv estados carregado')
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
        const siglaEstado = columns[0];
        //coloca cada area numa array "xareas"
        siglasEstados.push(siglaEstado);

        const lat = columns[1];
        latEstados.push(lat)
        const long = columns[2];
        longEstados.push(long)
        });

        //debug
            //console.log(estados, perfis)

}

//carrega os dados em variaveis MENINAS
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
        const estadoMina = columns[0];
        //coloca cada area numa array "xareas"
        estados.push(estadoMina);

        const perfilMina = columns[1];
        perfis.push(perfilMina)
        });

        //debug
            //console.log(estados, perfis)

        //passar por todos os blocos
        for (var i = 0; i<perfis.length; i++) {
            var minai
        
            //cada bloco é um objeto com nome e coordenadas iniciais e finais
            minai = new Mina(estados[i], perfis[i])
                
                minasConjunto.push(minai)
                    // console.log(blocoi)    
            //console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
        }
        console.log('minas criadas')
        console.log(minasConjunto)

    //   document.getElementById('num-blocos').innerHTML=blocoConjunto.length
}

console.log('DATA COLLECTIONS Loaded')