
// Seleciona as tags select pelo ID
const selectMes = document.querySelector('#mes');
const selectAno = document.querySelector('#ano');

// Lista de objetos com os meses
const meses = [
    { value: '1', texto: 'Janeiro' },
    { value: '2', texto: 'Fevereiro' },
    { value: '3', texto: 'Março' },
    { value: '4', texto: 'Abril' },
    { value: '5', texto: 'Maio' },
    { value: '6', texto: 'Junho' },
    { value: '7', texto: 'Julho' },
    { value: '8', texto: 'Agosto' },
    { value: '9', texto: 'Setembro' },
    { value: '10', texto: 'Outubro' },
    { value: '11', texto: 'Novembro' },
    { value: '12', texto: 'Dezembro' }
];

// Lista de objetos com os anos
const anos = [
    { value: '2024', texto: '2024' },
    { value: '2025', texto: '2025' },
    { value: '2026', texto: '2026' },
    { value: '2027', texto: '2027' },
    { value: '2028', texto: '2028' },
    { value: '2029', texto: '2029' },
    { value: '2030', texto: '2030' }
];

// Limpa as opções existentes no HTML
selectMes.innerHTML = '';
selectAno.innerHTML = '';

// Percorre a lista de meses
meses.forEach(mes => {

    // Cria o elemento option
    const option = document.createElement('option');

    // Define o valor e o texto da opção
    option.value = mes.value;
    option.textContent = mes.texto;

    // Insere a opção no select de meses
    selectMes.append(option);
});

// Percorre a lista de anos
anos.forEach(ano => {

    // Cria o elemento option
    const option = document.createElement('option');

    // Define o valor e o texto da opção
    option.value = ano.value;
    option.textContent = ano.texto;

    // Insere a opção no select de anos
    selectAno.append(option);
});

// Define o mês e o ano inicialmente selecionados
selectMes.value = '10';
selectAno.value = '2026';

function buscarDados() {}
