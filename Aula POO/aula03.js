var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
// uma forma de melhorar e distribuir as responsabilidades de capitalizar e ordenar o array é inserindo funções específicas para RESVOLER isso
function capitalizar(ingredientes) {
    var modificado = [];

    for (var i = 0; i < ingredientes.length; i++) {
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1);
        var resultado = letraInicial + restoTexto;
        modificado[i] = resultado;
    }
    return modificado;
}

function ordenar(ingredientes) {
    return ingredientes.sort(function(a, b){
        return a.localeCompare(b);
    });
}
// agora temos duas funções com responsabilidades de capitalizar e ordenar. O próximo passao é juntar isso tudo.

// Não é a melhor abordagem, mas pode ser feito dessa maneira
var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);
//            (4) ["Água", "Mel", "Mostarda", "Sal"]
//            (4) ["Água", "Mel", "Mostarda", "Sal"]
// Isso é ruim porque a array de capitalização também foi modificada pela função ordenar. Isso pode ser um problema, porque podemos precisar do array/vetor original capitalizado intacto no futuro. Vamos ver na próxima aula