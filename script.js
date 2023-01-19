var saida = document.getElementById("saida");
var imprimir = "";
var ano = ["Janeiro","Fevereiro","Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];
alert(ano.length);
for(var i = 0; i < ano.length; i ++){
    imprimir += ano [2] + "<br>";
}
saida.innerHTML = imprimir;