// Funcao para gerar elemento no DOM


function gerarPizza() {
	var containerPizzas =document.querySelector('#container-pizzas');
	
	var pizza = document.createElement('li');
	// Adicionando classe do bootstrap
	pizza.className = "list-inline-item";
	var pizzaImg = document.createElement('img');

	pizzaImg.setAttribute('src','imgs/pizza.png');
	pizzaImg.className = "borda-redonda";
	
	pizza.appendChild(pizzaImg);
	containerPizzas.appendChild(pizza);
}

var botao = document.querySelector("button")

botao.onclick = function() {
	gerarPizza();
}