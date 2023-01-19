const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
fetch(baseUrl)
  .then(response => response.json())
  .then(data => {
    let pokemons = data.results;
    pokemons.sort((a, b) => a.id - b.id);;
    pokemons.forEach(pokemon => {
        //get the pokemon information
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            let pokeName = data.name;
            let pokeId = data.id;
            let pokeType = data.types[0].type.name;
            let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
            let pokeElement = 
            `<div class="pokemon">
                <div class="pokemi">
                <img src="${pokeImage}" alt="${pokeName}" class="imagem">
                <p class="nome">Name: ${pokeName}</p>
                <p class="id">ID: ${pokeId}</p>
                <p class="tipo">Type: ${pokeType}</p>
                <button id="show-abilities" onclick="showAbilities()">Mostrar habilidades</button>
                <div id="abilities"></div>
                </div>
                </div>`;
                document.getElementById("pokemons").innerHTML += pokeElement;
                
            });
            
        });
    });
    
    
    
    let offset = 20;
    
    //pegando o botão
    const btn = document.getElementById("load-more-btn");
    
    //adicionando o listener de evento
    btn.addEventListener("click", function(){
        fetch(baseUrl + "?offset=" + offset)
        .then(response => response.json())
        .then(data => {
            let pokemons = data.results;
            pokemons.sort((a, b) => a.url.split('/')[6] - b.url.split('/')[6]);
            pokemons.forEach(pokemon => {
                //get the pokemon information
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                    let pokeName = data.name;
            let pokeId = data.id;
            let pokeType = data.types[0].type.name;
            let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
            let pokeElement = 
            `<div class="pokemon">
            <div class="pokemi">
            <img src="${pokeImage}" alt="${pokeName}" class="imagem">
            <p class="nome">Name: ${pokeName}</p>
            <p class="id">ID: ${pokeId}</p>
            <p class="tipo">Type: ${pokeType}</p>
            </div>
            </div>`;
            document.getElementById("pokemons").innerHTML += pokeElement;
        })
        
    });
});
offset += 20;});


let button = document.getElementById("show-abilities");


function showAbilities() {
    let abilitiesDiv = document.getElementById("abilities");
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => response.json())
        .then(data => {
            let abilities = data.abilities;
            let abilitiesList = "";
            abilities.forEach(ability => {
                abilitiesList += "<li>" + ability.ability.name + "</li>";
            });
            abilitiesDiv.innerHTML = "<ul>" + abilitiesList + "</ul>";
        })
        .catch(error => console.log(error));
}