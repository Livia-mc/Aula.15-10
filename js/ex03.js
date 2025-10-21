function verificar() {
    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value;
    const out = document.getElementById('resultado');


    const usuarioValido = 'Lívia';
    const senhaValida = '1234';

    out.textContent = '';
    out.style.color = '';

    if (!login || !senha) {
        alert('Preencha login e senha.');
        return;
    }

    if (login === usuarioValido && senha === senhaValida) {
        alert('Login e senha corretos.');
        out.textContent = 'Acesso permitido.';
        out.style.color = 'green';
    } else {
        alert('Login ou senha incorretos.');
        out.textContent = 'Acesso negado.';
        out.style.color = 'red';
    }
}
