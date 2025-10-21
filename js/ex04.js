function gerarPA() {
    const a1 = parseFloat(document.getElementById('a1').value);
    const razao = parseFloat(document.getElementById('razao').value);
    const qtd = parseInt(document.getElementById('qtd').value, 10);
    const out = document.getElementById('resultado');

    out.innerHTML = '';
    if (isNaN(a1) || isNaN(razao) || isNaN(qtd) || qtd <= 0) {
        out.textContent = 'Informe valores válidos (a1, razão e quantidade > 0).';
        out.className = 'error';
        return;
    }

    const ul = document.createElement('ul');
    for (let i = 0; i < qtd; i++) {
        const termo = a1 + i * razao;
        const li = document.createElement('li');
        li.textContent = termo;
        ul.appendChild(li);
    }

    out.appendChild(ul);
    out.className = 'ok';
}