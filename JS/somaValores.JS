//*varriaveis que ira reperentar os elemntos do html no js

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const res =  document.querySelector("#result");
//*funcão para o botão calcular
function calcular() {
          let val1,val2,resp = 0;
          val1 = parseFloat(num1.value);
          val2 = parseFloat(num2.value);
         if( num1.value=== ""&& num2.value== "" ){
          res.innerHTML = "insira valores numerico."
         } else{
          //realizar o calculo
          resp = val1 + val2;
          res.innerHTML= `o resultado da soma ${resp}`;
         }
}
//*funcão para o botão limpar
function limpartela() {
        num1.value="0";
        num2.value="0";
        res.innerHTML="";
num1.focus();
}
