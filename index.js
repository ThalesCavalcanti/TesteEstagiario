document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio de dados vazios

        // Obter valores dos campos nome, email e telefone
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        // Validação dos campos obrigatórios
        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, Email e Telefone).');
            return;
        }

        // Criar objeto com os dados do formulário
        const dadosFormulario = {
            nome: nome,
            email: email,
            telefone: telefone 
        };

        // Exibir objeto no console
        console.log('Dados do formulário:', dadosFormulario);

        // Ocultar formulário e mostrar mensagem de sucesso
        form.style.display = 'none';
        mensagemSucesso.style.display = 'block';
    });
});