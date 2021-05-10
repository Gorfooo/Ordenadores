function enviaNumeroBubble(){
    $("#tabelaRandomMicro tr").remove();//limpa tabela
    $("#tabelaOrdenadaMicro tr").remove();
    $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Ordenados</b></td></tr>");//adiciona cabeçalho
    $("#tabelaRandomMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Números</b></td></tr>");
    numero = $('#numero').val();//criada sem var para poder usar o "shuffledArray" em outras funções
    var array = [];
    for (i=0; i < numero; i++){//adiciona os números no array
        array.push(i);
    }
    shuffledArray = array.sort((a, b) => 0.5 - Math.random());//randomiza números no array
    for (i=0; i < numero; i++){//popula tabela
        $("#tabelaRandomMicro>tbody").append("<tr><th scope='row'>"+(i+1)+"</th><td>"+shuffledArray[i]+"</td></tr>");
    }
}

function bubbleSort(shuffledArray){
    $("#tabelaOrdenadaMicro tr").remove();
    $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>Qtd</th><td><b>Ordenados</b></td></tr>");
    let len = shuffledArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (shuffledArray[i] > shuffledArray[i + 1]) {
                let tmp = shuffledArray[i];
                shuffledArray[i] = shuffledArray[i + 1];
                shuffledArray[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    for (i=0; i < numero; i++){//popula tabela
        $("#tabelaOrdenadaMicro>tbody").append("<tr><th scope='row'>"+(i+1)+"</th><td>"+shuffledArray[i]+"</td></tr>");
    }
};