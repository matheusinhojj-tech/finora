function atualizarRenda(e) {
    e.preventDefault()

// O target do evento de submit do formulário é o próprio formulário
    const formulario = e.target;


    // Cria um objeto com os dados do formulário
    const dados = {
        nome: formulario.nome.value,
        renda: Number(formulario.renda.value),
}


    // Mostra os dados no console do navegador
    console.log(dados);


    /*
        Precisamos transformar um objeto JavaScript num objeto JSON, que é o formato reconhecido
        pelo protocolo HTTP.
    */
    const json = JSON.stringify(dados);


    // Chama a função que faz o envio dos dados
    enviar(json);
}


/*
    Enviar os dados de um formulário é uma operação demorada. Os dados são enviados, o serviço
    recebedor captura os dados. armazena e devolve uma resposta positiva, caso os dados tenham
    sido efetivamente armazenado. Como esse processo é demorado, a função precisa ser marcada 
    como assíncrona (async).
*/
async function enviar(json) {


    // Endreço para onde os dados devem ser enviados.
    const url = "https://6aeb2ffaee39618d7bf7faf5.mockapi.io/perfil/1";
    // Objeto que contém as configurações básicas de uma requisição HTTP
    const conf = {
        // O método HTTP utilizado. POST é o método utilizado sempre que queremos criar um recurso novo
        method: 'PUT',
        // Informa que os dados enviados estarão no formato JSON
        headers: { 'Content-Type': 'application/json' },
        body: json // Os dados no formato JSON que serão enviados
    }


    /*
        A função fetch é um cliente HTTP que faz requisições a uma API ou serviço externo.
        Esse processo é demorada, por isso precisamos aguardar a resposta usando o await
    */
    const resposta = await fetch(url,conf);


    // Caso a requisição tenha ocorrida sem problemas
    if(resposta.ok) {
        // Exibe a mensagem de sucesso e encerra a função
        alert('OK: os dados foram enviados!!');
        return;
    }


    // Se der algum erro na requisição, essa mensagem é exibida
    alert('Houve um erro ao enviar os dados');
}
