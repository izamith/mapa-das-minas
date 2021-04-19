/*
/////////////////////////////////////////////////////////////////
                    mapa das minas, 2021
                piscinadepixel, Isabela Zamith 
/////////////////////////////////////////////////////////////////

    Esse arquivo tem as funcoes principais (fora o desenho do mapa)
*/

let conjuntos = []

async function Start() {
    await getData();
    await getDataEstados()
    await criaListas()
}

console.log('MAIN JS Loaded')