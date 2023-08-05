document.getElementById('meuForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    adicionarDados();
});

function adicionarDados() {
    // Pegar os valores do formulário
    const id = document.getElementById('id').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const dataFormatada = moment(data).format('DD-MM-YYYY');
    const valorInput = document.getElementById('valor').value;
    const valor = parseFloat(valorInput.replace(',', '.'));

    //Verifica se o valor é um número
    if (isNaN(valor)) {
        alert("Não é um número!");
        return;

    }

    //Crias os Objetos  
    const objts = {
        id: id,
        descricao: descricao,
        data: dataFormatada,
        valor: valor
    };

    //Transforma os objetos em Json
    const dadosJson = JSON.stringify(objts)

    //Referencia o ID da tabela e a inserção de linhas
    const tabela = document.getElementById('dadosTable');
    const novaLinha = tabela.insertRow();

    //Defini varivaveis para a adição das linhas
    const celulaid = novaLinha.insertCell();
    const celulaDescricao = novaLinha.insertCell();
    const celulaData = novaLinha.insertCell();
    const celulaValor = novaLinha.insertCell()

    //Adiciona as Linhas a partir do Json
    celulaid.textContent = objts.id;
    celulaDescricao.textContent = objts.descricao;
    celulaData.textContent = objts.data;
    celulaValor.textContent = objts.valor;


    console.log(dadosJson);

    document.getElementById('id').value = "";
    document.getElementById('descricao').value = "";
    document.getElementById('data').value = "";
    document.getElementById('valor').value = "";


}

function excluirDados() {
    if (id = objts.id) {
        const tiraLinha = tabela.DeleteRow();

        const celulaid = tiraLinha.DelteCell();
        const celulaDescricao = tiraLinha.DeleteCell();
        const celulaData = tiraLinha.DeleteCell();
        const celulaValor = tiraLinha.DeleteCell()
    } else {
        return;
    }

}
