function criaNumero(){
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    tamanhoTabela = $('#tabelaRandomMicro tr').length-1;
    tamanhoTabelaOrdenada = $('#tabelaOrdenadaMicro tr').length-1;
    $('#relatorio').append(horaFormatada + ' -> Início da remoção de ' + (tamanhoTabela + tamanhoTabelaOrdenada) + ' números<br>');
    var inicioRemocaoRegistros = new Date();
    //limpa tabelas
    $("#tabelaRandomMicro tr").remove();
    $("#tabelaOrdenadaMicro tr").remove();
    $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Ordenados</b></td></tr>");//adiciona cabeçalho
    $("#tabelaRandomMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Números</b></td></tr>");
    //fim limpa tabelas
    tempoRemocaoRegistros = new Date() - inicioRemocaoRegistros;
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Fim da remoção de ' + (tamanhoTabela + tamanhoTabelaOrdenada) + ' números<br>');
    $('#relatorio').append('Tempo de remoção dos registros: ' + tempoRemocaoRegistros + 'ms<br>');

    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Início da criação de ' + $('#numero').val() + ' números<br>');
    var inicioCriacaoNumeros = new Date();
    //início criação
    numero = $('#numero').val();
    var array = [];
    for (i=0; i < numero; i++){
        array.push(i);
    }
    shuffledArray = array.sort(() => 0.5 - Math.random());//randomiza números no array
    for (i=0; i < numero; i++){//popula tabela
        $("#tabelaRandomMicro>tbody").append("<tr><th scope='row'>"+(i+1)+"</th><td>"+shuffledArray[i]+"</td></tr>");
    }
    //fim criação
    tempoCriacaoNumeros = new Date() - inicioCriacaoNumeros;
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Fim da criação de ' + $('#numero').val() + ' números<br>');
    $('#relatorio').append('Tempo de criação dos números: ' + tempoCriacaoNumeros + 'ms<br>');
}

function heapSort(shuffledArray){
    tamanhoTabelaOrdenada = $('#tabelaOrdenadaMicro tr').length-1;
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Início da remoção de ' + tamanhoTabelaOrdenada + ' números ordenados<br>');
    var inicioRemocaoRegistros = new Date();
    //remoção registros
    $("#tabelaOrdenadaMicro tr").remove();
    $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Ordenados</b></td></tr>");
    //fim remoção registros
    tempoRemocaoRegistrosOrdenados = new Date() - inicioRemocaoRegistros;
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Fim da remoção de ' + tamanhoTabelaOrdenada + ' números ordenados<br>');
    $('#relatorio').append('Tempo de remoção dos registros ordenados: ' + tempoRemocaoRegistrosOrdenados + 'ms<br>');

    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Início da ordenação de ' + ($('#tabelaRandomMicro tr').length-1) + ' números<br>');
    var inicioOrdenacaoNumeros = new Date();
   //ordenação
   array_length = shuffledArray.length;
   for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
       heap_root(shuffledArray, i);
     }

   for (i = shuffledArray.length - 1; i > 0; i--) {
       swap(shuffledArray, 0, i);
       array_length--;
     
     
       heap_root(shuffledArray, 0);
   }
    for (i=0; i < numero; i++){//popula tabela
        $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>"+(i+1)+"</th><td>"+shuffledArray[i]+"</td></tr>");
    }
    //fim ordenação
    tempoOrdenacaoNumeros = new Date() - inicioOrdenacaoNumeros;
    hora = new Date();
    horaFormatada = ("0" + hora.getHours()).slice(-2) + ':' + ("0" + hora.getMinutes()).slice(-2) + ':' + ("0" + hora.getSeconds()).slice(-2);
    $('#relatorio').append(horaFormatada + ' -> Fim da ordenação de ' + ($('#tabelaRandomMicro tr').length-1) + ' números<br>');
    $('#relatorio').append('Tempo de ordenção dos números: ' + tempoOrdenacaoNumeros + 'ms<br>');
};

function heap_root(shuffledArray, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && shuffledArray[left] > shuffledArray[max]) {
        max = left;
    }

    if (right < array_length && shuffledArray[right] > shuffledArray[max])     {
        max = right;
    }

    if (max != i) {
        swap(shuffledArray, i, max);
        heap_root(shuffledArray, max);
    }
}

function swap(shuffledArray, index_A, index_B) {
    var temp = shuffledArray[index_A];

    shuffledArray[index_A] = shuffledArray[index_B];
    shuffledArray[index_B] = temp;
}

function limparRelatorio(){
    $('#relatorio').html('');
}