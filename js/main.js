// Funcao para gerar elemento no DOM
var totalPizzas = [];

function gerarPizza() {
	var contadorPizzas = document.querySelector('#total-pizzas')
	var containerPizzas =document.querySelector('#container-pizzas');
	
	var pizza = document.createElement('li');
	// Adicionando classe do bootstrap
	pizza.className = "list-inline-item";
	var pizzaImg = document.createElement('img');

	pizzaImg.setAttribute('src','imgs/pizza.png');
	pizzaImg.className = "borda-redonda";
	
	pizza.appendChild(pizzaImg);
	containerPizzas.appendChild(pizza);

	// adicionando as pizzas no array
	totalPizzas.push(pizza); 

	var numeroPizzas = totalPizzas.length;
	contadorPizzas.innerHTML = numeroPizzas;
}

var botao = document.querySelector("button")

botao.onclick = function() {
	gerarPizza();
}