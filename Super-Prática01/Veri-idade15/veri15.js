let date = new Date();
let anoAtual = date.getFullYear();
const txtano = document.getElementById('txtano');
const radSex = document.getElementsByName('radSex');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',verificar);
function verificar(){
    if(txtano.value < 1920 || txtano.value >= anoAtual ){
        alert('Ano inválido');
    }else{
         
    }
}