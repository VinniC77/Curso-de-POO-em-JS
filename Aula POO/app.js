import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

// Manipulação dinânima do objeto
for (let ingrediente of ingredientesCapitalizados) {
    let textoHTML = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>    
    `;

    containerIngredientes.innerHTML += textoHTML;
}





/*
<div class="ingrediente">
   <img src="img/abobora.png">
   <p class="nome-ingrediente">Abóbora</p>
</div>
*/