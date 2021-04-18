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

        //passar por todos os blocos
        for (var i = 0; i<siglasEstados.length; i++) {
            var estadoi
        
           //relacionar siglas com estados
            var incluirEstado
            switch (siglasEstados[i]) {
                case 'AC':
                    incluirEstado = 'Acre'
                break 
                
                case 'AL':
                    incluirEstado = 'Alagoas'
                break 
                
                case 'AP':
                    incluirEstado = 'Amapá'
                break 
                
                case 'AM':
                    incluirEstado = 'Amazonas'
                break 
                
                case 'BA':
                    incluirEstado = 'Bahia'
                break 
                
                case 'CE':
                    incluirEstado = 'Ceará'
                break 
                
                case 'DF':
                    incluirEstado = 'Distrito Federal'
                break 
                
                case 'ES':
                    incluirEstado = 'Espírito Santo'
                break 
                
                case 'GO':
                    incluirEstado = 'Goiás'
                break 
                
                case 'MO':
                    incluirEstado = 'Maranhão'
                break 
                
                case 'MA':
                    incluirEstado = 'Maranhão'
                break 
                
                case 'MT':
                    incluirEstado = 'Mato Grosso'
                break 
                
                case 'MS':
                    incluirEstado = 'Mato Grosso do Sul'
                break 

                case 'MG':
                    incluirEstado = 'Minas Gerais'
                break 
                
                case 'PA':
                    incluirEstado = 'Pará'
                break 

                case 'PB':
                    incluirEstado = 'Paraíba'
                break 

                case 'PR':
                    incluirEstado = 'Paraná'
                break 

                case 'PE':
                    incluirEstado = 'Pernambuco'
                break 

                case 'PI':
                    incluirEstado = 'Piauí'
                break 

                case 'RJ':
                    incluirEstado = 'Rio de Janeiro'
                break 

                case 'RN':
                    incluirEstado = 'Rio Grande do Norte'
                break 

                case 'RS':
                    incluirEstado = 'Rio Grande do Sul'
                break 

                case 'RO':
                    incluirEstado = 'Rondônia'
                break 

                case 'RR':
                    incluirEstado = 'Roraima'
                break 

                case 'SC':
                    incluirEstado = 'Santa Catarina'
                break 

                case 'SP':
                    incluirEstado = 'São Paulo'
                break 

                case 'SE':
                    incluirEstado = 'Sergipe'
                break 

                case 'TO':
                    incluirEstado = 'Tocantins'
                break 
            }

            //cada bloco é um objeto com nome e coordenadas iniciais e finais
            estadoi = new Estado(siglasEstados[i], incluirEstado, latEstados[i], longEstados[i])
                
                coordenadas.push(estadoi)

        }
        console.log(coordenadas)
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