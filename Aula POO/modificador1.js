// Na aula 06 precisamos montar a estrutura de funções Capitalizer a Ordenar em objetos. Até agora vimos como fazer essas duas funções em um array com strings somente.

// para substituir o for vamos usar o .map() nessa função. Para criar um vetor novo sem alterar o vetor inicial. Os novos valores, tanto de Cap, qnt de Ord serão armazenados em uma nova variável, preservando o vetor original.
function fnCapitalizarNovo (colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        var resultado = colecao.map(function(obj) {
            var letraInicial = 
                obj[atributo].charAt(0).toUpperCase();
        var restoTexto = 
                obj[atributo].slice(1);

            obj[atributo] = letraInicial + restoTexto;
            return obj;
        });
        console.log(resultado)
    }
}


function fnCapitalizar(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial + restoTexto;
        modificado[i] = resultado;
    }
    return modificado;
}

function fnOrdenar(vetor) {
    return vetor.sort(function(a, b){
        return a.localeCompare(b);
    });
}

function fnCaixaAlta (vetor) {
    var modificado = [];
    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }
    return modificado;    
}

export default {
    capitalizar: fnCapitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}