/* mapa das minas, 2021
piscinadepixel, Isabela Zamith 
*/

async function Start() {
    await getData();
    await getDataEstados()
}

//tela de carregamento
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
  
console.log('MAIN JS Loaded')