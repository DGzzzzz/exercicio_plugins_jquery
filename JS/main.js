$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#CPF').mask('000.000.000-00');
    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: { 
                required: true
            },
            email: { 
                required: true,
                email:true
            },
            telefone: { 
                required: true
            },
            CPF: {
                required: true,
            },
            Endereco: { 
                required: true,
            },
            CEP: {
                required: true,
            CPF: {
                required:true,
            }
            }},
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            Endereco: 'Por favor, insira seu endereço completo',
            CEP: 'Por favor, insira seu CEP',
            CPF: 'Por favor, insira seu CPF'
    }})        
})
