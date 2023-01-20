const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
fetch(baseUrl)
.then(response => response.json()) // converte a resposta em json
        .then(data => {
        let pokemons = data.results; // armazena os pokemons retornados
    pokemons.forEach((pokemon, index) => {
    fetch(pokemon.url) // faz uma requisição à API para obter as informações detalhadas do pokemon
        .then(response => response.json()) // converte a resposta em json
        .then(data => {
        let pokeName = data.name; // pega o nome do pokemon
        let pokeId = data.id; // pega o id do pokemon
        let pokeType = data.types[0].type.name; // pega o tipo do pokemon
        let abilitiesList = ""; // cria uma lista vazia para as habilidades do pokemon
        data.abilities.forEach(ability => {
            abilitiesList += "<li>" + ability.ability.name + "</li>"}); // adiciona as habilidades a lista
        let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`; // pega a url da imagem do pokemon
        let pokeElement =
        `<div class="pokemon"
        <div class="pokemi"> 
        <img src="${pokeImage}" alt="${pokeName}" class="imagem"> 
        <p class="nome">Name: ${pokeName}</p> 
        <p class="id">ID: ${pokeId}</p> 
        <p class="tipo">Type: ${pokeType}</p> 
        <div class="abilities">
        </div> 
        <button class="show-abilities" data-abilities="${abilitiesList}">Mostrar habilidades</button> 
        </div> 
        </div>`
    let pokeElementNode = new DOMParser().parseFromString(pokeElement, "text/html").body.firstChild; // converte o elemento html em elemento do dom
        pokemonsContainer.appendChild(pokeElementNode); // adiciona o elemento ao container de pokemons

    let buttons = document.querySelectorAll(".show-abilities"); // pega todos os botões com classe show-abilities

        buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let abilitiesDiv = this.parentElement.querySelector(".abilities"); // pega o elemento .abilities
            abilitiesDiv.innerHTML = "<ul>" + this.dataset.abilities + "</ul>"; // adiciona as habilidades ao elemento
                    });
                });
            });
                });
            });
                
    
let offset = 20;

//pegando o botão
const btn = document.getElementById("load-more-btn");
const pokemonsContainer = document.getElementById("pokemons");

btn.addEventListener("click", function(){ // adiciona um evento de click ao botão
    fetch(baseUrl + "?offset=" + offset) // faz uma requisição à API passando o offset atual
        .then(response => response.json()) // converte a resposta em json
        .then(data => {
        let pokemons = data.results; // armazena os pokemons retornados
    pokemons.forEach((pokemon, index) => {
    fetch(pokemon.url) // faz uma requisição à API para obter as informações detalhadas do pokemon
        .then(response => response.json()) // converte a resposta em json
        .then(data => {
        let pokeName = data.name; // pega o nome do pokemon
        let pokeId = data.id; // pega o id do pokemon
        let pokeType = data.types[0].type.name; // pega o tipo do pokemon
        let abilitiesList = ""; // cria uma lista vazia para as habilidades do pokemon
        data.abilities.forEach(ability => {
            abilitiesList += "<li>" + ability.ability.name + "</li>"}); // adiciona as habilidades a lista
        let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`; // pega a url da imagem do pokemon
        let pokeElement =
        `<div class="pokemon"
        <div class="pokemi"> 
        <img src="${pokeImage}" alt="${pokeName}" class="imagem"> 
        <p class="nome">Name: ${pokeName}</p> 
        <p class="id">ID: ${pokeId}</p> 
        <p class="tipo">Type: ${pokeType}</p> 
        <div class="abilities">
        </div> 
        <button class="show-abilities" data-abilities="${abilitiesList}">Mostrar habilidades</button> 
        </div> 
        </div>`
    let pokeElementNode = new DOMParser().parseFromString(pokeElement, "text/html").body.firstChild; // converte o elemento html em elemento do dom
        pokemonsContainer.appendChild(pokeElementNode); // adiciona o elemento ao container de pokemons

    let buttons = document.querySelectorAll(".show-abilities"); // pega todos os botões com classe show-abilities

        buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let abilitiesDiv = this.parentElement.querySelector(".abilities"); // pega o elemento .abilities
            abilitiesDiv.innerHTML = "<ul>" + this.dataset.abilities + "</ul>"; // adiciona as habilidades ao elemento
});
});
});
});
offset += 20; // incrementa o offset para a próxima chamada
});
});