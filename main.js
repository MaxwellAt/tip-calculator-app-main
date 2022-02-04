const input2 = document.getElementById('input2'); 
const input1 = document.getElementById('entrada1');
const resete = document.getElementById('reset');
const gorjeta = document.getElementById('gorjeta');
const conta = document.getElementById('totalporpessoa');
const bt1 = document.getElementById('5');
const bt2 = document.getElementById('10');
const bt3 = document.getElementById('15');
const bt4 = document.getElementById('25');
const bt5 = document.getElementById('50');
const bt6 = document.getElementById('opcional');


document.getElementById("entrada1").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});

bt1.addEventListener('click' , function e (){
    if(input2.value == ''){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }else{
        var resultado = input1.value;
        var as = resultado * 0.05 ;
        var dois = as / input2.value;
        var resultadoFinal = parseFloat(dois).toFixed(2);
        gorjeta.innerHTML = '$' + resultadoFinal;
        var totalPorPessoa = resultado / input2.value;
        var totalPorPessoa1 = parseFloat(totalPorPessoa).toFixed(2);
        conta.innerHTML = '$' + totalPorPessoa1;
        resete.removeAttribute('disabled');
    }
})

bt2.addEventListener('click' , function e (){
    if(input2.value == ''){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }else{
        var resultado = input1.value;
        var as = resultado * 0.1 ;
        var dois = as / input2.value;
        var resultadoFinal = parseFloat(dois).toFixed(2);
        gorjeta.innerHTML = '$' + resultadoFinal;
        var totalPorPessoa = resultado / input2.value;
        var totalPorPessoa1 = parseFloat(totalPorPessoa).toFixed(2);
        conta.innerHTML = '$' + totalPorPessoa1;
        resete.removeAttribute('disabled');
    }
})

bt3.addEventListener('click' , function e (){
    if(input2.value == ''){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }else{
        var resultado = input1.value;
        var as = resultado * 0.15 ;
        var dois = as / input2.value;
        var resultadoFinal = parseFloat(dois).toFixed(2);
        gorjeta.innerHTML = '$' + resultadoFinal;
        var totalPorPessoa = resultado / input2.value;
        var totalPorPessoa1 = parseFloat(totalPorPessoa).toFixed(2);
        conta.innerHTML = '$' + totalPorPessoa1;
        resete.removeAttribute('disabled');
    }
})

bt4.addEventListener('click' , function e (){
    if(input2.value == ''){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }else{
        var resultado = input1.value;
        var as = resultado * 0.25 ;
        var dois = as / input2.value;
        var resultadoFinal = parseFloat(dois).toFixed(2);
        gorjeta.innerHTML = '$' + resultadoFinal;
        var totalPorPessoa = resultado / input2.value;
        var totalPorPessoa1 = parseFloat(totalPorPessoa).toFixed(2);
        conta.innerHTML = '$' + totalPorPessoa1;
        resete.removeAttribute('disabled');
    }
})

bt5.addEventListener('click' , function e (){
    if(input2.value == ''){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }else{
        var resultado = input1.value;
        var as = resultado * 0.5 ;
        var dois = as / input2.value;
        var resultadoFinal = parseFloat(dois).toFixed(2);
        gorjeta.innerHTML = '$' + resultadoFinal;
        var totalPorPessoa = resultado / input2.value;
        var totalPorPessoa1 = parseFloat(totalPorPessoa).toFixed(2);
        conta.innerHTML = '$' + totalPorPessoa1;
        resete.removeAttribute('disabled');
    }
})

resete.addEventListener('click' , function e(){
    input1.value = '';
    input2.value = '';
    gorjeta.innerHTML = '$0.00';
    conta.innerHTML = '$0.00';
    resete.setAttribute('disabled' , 'disabled')
})

function e(){
    const valor = parseFloat(document.getElementById('input2').value);
    const alerta = document.getElementById('alerta');
    if (valor === 0 ){
        alerta.style.display = 'block';
        input2.style.boxShadow = '0 0 0 0.25rem brown';
    }
    else {
        alerta.style.display = 'none';
        input2.style.boxShadow = 'none';
    }
}
