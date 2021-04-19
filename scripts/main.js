/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////

    Esse arquivo chama as funcoes principais (fora o desenho do mapa)
*/


//array de conjuntos de objetos Caracteres, criados na criaConjuntos()
let conjuntos = []

async function Start() {
    //dados da tabela - Minas(dados.csv)
    //para adicionar uma nova mina
    //editar a tabela em 'data/dados.csv'
    await getDataMinas();
    //dados da tabela - Estados (coordenadas.csv)
    await getDataEstados();
    //associar meninas/estads/siglas e coordenadas
    //em um objeto Conjunto que depois entra na array  conjuntos
    await criaConjuntos();
    console.log('MAIN JS Loaded')
}

