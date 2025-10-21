function calcular() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const out = document.getElementById("resultado");

    out.className = ''; 

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        out.textContent = 'Informe altura e peso válidos.';
        return;
    }

    const imc = peso / (altura * altura); 
    const imcText = imc.toFixed(2);

    let msg = '';
    let cls = '';

    if (imc < 18.5) {
        msg = 'Abaixo do peso';
        cls = 'imc-abaixo';
    } else if (imc < 25) {
        msg = 'Peso normal';
        cls = 'imc-normal';
    } else if (imc < 30) {
        msg = 'Sobrepeso';
        cls = 'imc-sobrepeso';
    } else {
        msg = 'Obesidade mórbida';
        cls = 'imc-obesidade';
    }

    out.textContent = `IMC: ${imcText} — ${msg}`;
    out.classList.add(cls);
}
