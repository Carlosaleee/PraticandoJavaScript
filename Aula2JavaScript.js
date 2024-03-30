function mostrar() {
	var nome = document.querySelector('input[name=nome]').value;
	var idade = document.querySelector('input[name=idade]').value;
	document.getElementById("saida").innerHTML=nome+" tem "+idade+" anos ";
	document.getElementById("saida2").innerText=nome+" tem "+idade+" anos ";
    alert(nome+" tem "+idade+" anos ");
    console.log(nome+" tem "+idade+" anos ");
}

function escrever(){
	var nome = document.querySelector('input[name=nome]').value;
	var idade = document.querySelector('input[name=idade]').value;
	document.write(nome+" tem "+idade+" anos ");
}

function imc() {
	var nome = document.querySelector('input[name=nomec]').value;
	var altura = document.querySelector('input[name=altura]').value;
	var peso = document.querySelector('input[name=peso]').value;
	var imc = peso/(altura*altura);
	document.getElementById("resultadoIMC").innerHTML = nome+" Tem o seu IMC calculado de: "+imc.toFixed(2);
}
function multiplicar() {
	var n1 = document.querySelector('input[name=n1]').value;
	var n2 = document.querySelector('input[name=n2]').value;
	var igual = n1*n2;
	document.getElementById('resultadoCalc').innerHTML = igual;
}
function dividir() {
	var n1 = document.querySelector('input[name=n1]').value;
	var n2 = document.querySelector('input[name=n2]').value;
	var igual = n1/n2;
	document.getElementById('resultadoCalc').innerHTML = igual;
}
function somar() {
	var n1 = document.querySelector('input[name=n1]').value;
	var n2 = document.querySelector('input[name=n2]').value;
	var igual = parseFloat(n1)+parseFloat(n2);
	document.getElementById('resultadoCalc').innerHTML = igual;
}
function subtrair() {
	var n1 = document.querySelector('input[name=n1]').value;
	var n2 = document.querySelector('input[name=n2]').value;
	var igual = n1-n2;
	document.getElementById('resultadoCalc').innerHTML = igual;
}
function cancela() {
	var nome = document.querySelector('input[name=nomeco]').value;
	var idade = document.querySelector('input[name=idade2]').value;
	document.getElementById("passagem").innerHTML = nome;
	var idadeInt = parseInt(idade);
	document.getElementById("passagem").innerHTML = nome;
   if (idade >= 18) {
	      document.getElementById("passagem2").innerHTML = "LIBERADO";
	      document.getElementById("passagem2").style.color = "green";
}
    else {
	     document.getElementById("passagem2").innerHTML = "NEGADO";
	     document.getElementById("passagem2").style.color = "red";
   }
}


function lanchonete() {
	var opcao = document.querySelector('select[name=lanche]').value;
	var qtd = parseFloat(document.querySelector('input[name=qtd]').value);
    
    if(opcao === "ab") {
	var valor = 3.50*qtd;
	}
	else if(opcao ==="bc") {
	 var valor = 6.50*qtd;
	}

	else if(opcao === "cd") {
	var valor = 8.5*qtd;
   }
    document.getElementById("valor").innerHTML ="R$ "+ valor.toFixed(2);
}


