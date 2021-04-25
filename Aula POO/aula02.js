var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
// precisamos ORDENAR(alfabeticamente) e CAPITALIZAR(tornar a 1 letra maiúscula) esse array. Vamos começar fazendo da forma 'errada' ou, pelo menos, menos indicada.
var modificado = [];
for (var i = 0; i < ingredientes.length; i++) {
    var letraInicial = ingredientes[i].charAt(0).toUpperCase();
    var restoTexto = ingredientes[i].slice(1);
    var resultado = letraInicial + restoTexto;
    modificado[i] = resultado;
}
console.log(modificado.sort());
// o método sort() dá a ordem alfabética, porém, como água tem acento, ele a joga para o último elemnto. Então temos que passar uma função para ele ordenar corretamente.

var ordenado = modificado.sort(function(a, b){
    return a.localeCompare(b);
});

console.log(ordenado);