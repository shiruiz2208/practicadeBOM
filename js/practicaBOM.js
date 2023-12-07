//windows.alert('hola mundo');
let contador = 1
function saludar(){
    document.write('Hola mundo')
    if(contador === 5 ){
        clearInterval(id)
    }
    contador ++ ;
}

//setTimeout - setIterval

// window.setTimeout(saludar,6000);
// setTimeout(saludar,3000);

const id = setInterval(saludar,1000);