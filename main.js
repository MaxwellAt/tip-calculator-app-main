function e(){
    const valor = parseInt(document.getElementById('input2').value);
    const valor2 = document.getElementById('input2');
    const alerta = document.getElementById('alerta');
    if (valor === 0 ){
        alerta.style.display = 'block';
        valor2.style.boxShadow = '0 0 0 0.25rem brown';
    }
    else {
        alerta.style.display = 'none';
        valor2.style.boxShadow = 'none';
    }
}
function b(){
    const input1 = parseInt(document.getElementById('entrada1').value);
    if ( input1 > 0 || input1 < 0){
        document.getElementById('reset').removeAttribute('disabled');
    }
    else{
        document.getElementById('reset').setAttribute('disabled' , 'disabled');
    }
}