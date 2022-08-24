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
        document.getElementById('resultado').innerHTML = "Abaixo do peso Normal"
      }
      else if (calculo > 18.5 && calculo < 24.9){
        document.getElementById('resultado').innerHTML = "Peso Normal"
      }
      else if (calculo > 25 && calculo < 29.9){
        document.getElementById('resultado').innerHTML = "Excesso de Peso"
      }
      else if (calculo > 30 && calculo < 34.9) {
        document.getElementById('resultado').innerHTML = "Obesidade classe I"
      }
      else if (calculo > 35 && calculo < 39.9) {
        document.getElementById('resultado').innerHTML = "Obesidade classe II"
      }else if (calculo > 39.9) {
        document.getElementById('resultado').innerHTML = "Obesidade classe III"
      } else{
        document.getElementById('resultado').innerHTML = "Digite corretamente nos campos"
      }
}

function limpar(){
    let altura = document.getElementById("Altura");
    let peso = document.getElementById("Peso");
    let nome = document.getElementById("Nome");
    let idade = document.getElementById("Idade");
    let sexo = document.getElementById("sexo");
    altura.value = "";
    peso.value = "";
    nome.value = "";
    idade.value = "";
    sexo.value = ""
}