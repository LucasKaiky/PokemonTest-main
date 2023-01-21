const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
fetch(baseUrl)
.then(response => response.json()) 
        .then(data => {
        let pokemons = data.results; 
    pokemons.forEach((pokemon, index) => {
    fetch(pokemon.url) 
        .then(response => response.json())
        .then(data => {
        let pokeName = data.name; 
        let pokeId = data.id;
        let pokeType = data.types[0].type.name; 
        let abilitiesList = ""; 
        data.abilities.forEach(ability => {
            abilitiesList += "<li>" + ability.ability.name + "</li>"}); 
        let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`; 
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
    let pokeElementNode = new DOMParser().parseFromString(pokeElement, "text/html").body.firstChild; 
        pokemonsContainer.appendChild(pokeElementNode);

    let buttons = document.querySelectorAll(".show-abilities");

        buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let abilitiesDiv = this.parentElement.querySelector(".abilities");
            abilitiesDiv.innerHTML = "<ul>" + this.dataset.abilities + "</ul>";
                    });
                });
            });
                });
            });
                
    
let offset = 20;


const btn = document.getElementById("load-more-btn");
const pokemonsContainer = document.getElementById("pokemons");

btn.addEventListener("click", function(){
    fetch(baseUrl + "?offset=" + offset) 
        .then(response => response.json())
        .then(data => {
        let pokemons = data.results;
    pokemons.forEach((pokemon, index) => {
    fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
        let pokeName = data.name;
        let pokeId = data.id;
        let pokeType = data.types[0].type.name; 
        let abilitiesList = "";
        data.abilities.forEach(ability => {
            abilitiesList += "<li>" + ability.ability.name + "</li>"}); 
        let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
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
    let pokeElementNode = new DOMParser().parseFromString(pokeElement, "text/html").body.firstChild; 
        pokemonsContainer.appendChild(pokeElementNode); 

    let buttons = document.querySelectorAll(".show-abilities"); 

        buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let abilitiesDiv = this.parentElement.querySelector(".abilities");
            abilitiesDiv.innerHTML = "<ul>" + this.dataset.abilities + "</ul>"; 
});
});
});
});
offset += 20;
});
});
