window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcula(){
    let altura = document.getElementById("Altura").value;
    let peso = document.getElementById("Peso").value;
    let nome = document.getElementById("Nome").value;
    let idade = document.getElementById("Idade").value;
    let sexo = document.getElementById("sexo").value;

    let calculo = peso / (altura * altura);

    if(calculo < 18.5){
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está abaixo do peso normal !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      }
      else if (calculo > 18.5 && calculo < 24.9){
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está com peso normal !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      }
      else if (calculo > 25 && calculo < 29.9){
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está com excesso de peso !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      }
      else if (calculo > 30 && calculo < 34.9) {
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está com obesidade classe I !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      }
      else if (calculo > 35 && calculo < 39.9) {
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está com obesidade classe II !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      }else if (calculo > 39.9) {
        document.getElementById('resultado').innerHTML = "Paciente cujo o nome é "+ nome + ", do sexo " + sexo +", com "+ idade +" anos, você está com obesidade classe III !!"
        document.getElementById('IMC').innerHTML = calculo.toFixed(2)
      } else{
        document.getElementById('resultado').innerHTML = "Digite corretamente nos campos !!"
      }
}

function limpar(){
    let altura = document.getElementById("Altura");
    let peso = document.getElementById("Peso");
    let nome = document.getElementById("Nome");
    let idade = document.getElementById("Idade");
    let sexo = document.getElementById("sexo");
    let resultado = document.getElementById('resultado');
    let IMC = document.getElementById('IMC');
    altura.value = "";
    peso.value = "";
    nome.value = "";
    idade.value = "";
    sexo.value = "";
    resultado.innerHTML = "";
    IMC.innerHTML = "-"
}