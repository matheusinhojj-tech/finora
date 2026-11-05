const select = document.querySelector('#categoria');

const opcoes = [
    { value: '', texto: 'selecione...' },
    { value: 'Alimentação', texto: 'Alimentação' },
    { value: 'Moradia', texto: 'Moradia' },
    { value: 'Transporte', texto: 'Transporte' },
    { value: 'Assinaturas', texto: 'Assinaturas' },
    { value: 'Contas de Casa', texto: 'Contas de Casa' },
    { value: 'Fatura do cartão', texto: 'Fatura do cartão' },
    { value: 'Lazer', texto: 'Lazer' },
    { value: 'Saúde', texto: 'Saúde' },
    { value: 'Educação', texto: 'Educação' },
    { value: 'Renda extra', texto: 'Renda extra' },
    { value: 'Outros', texto: 'Outros' }
];

opcoes.forEach(categoria => {
    const option = document.createElement('option');
    option.innerHTML = `
        <option value="${categoria.value}">${categoria.texto}</option>
    `;
    select.append(option);
});