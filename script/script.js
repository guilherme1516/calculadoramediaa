function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (!peso || !altura) {
      document.getElementById('resultado').innerText = "Preencha todos os campos corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = "";
  
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade Grau I";
    else if (imc < 40) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III (mórbida)";
  
    document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
  }
  