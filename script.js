const poke_container = document.getElementById("poke_container");
const pokemons_number = 150;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
}; // 2.Con esta función asíncrona puedo traer cada uno de los 150 gracias al ciclo.

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`; //Se guarda la url de la api (y en específico el id de cada pokemon)
  const res = await fetch(url); // Fetch llama lo asignado en la const url
  const pokemon = await res.json(); // La respuesta a la petición que hace fetch se obtiene a través de json
  createPokemonCard(pokemon);
}; // 1.Trae los datos de la API

fetchPokemons(); //4.Llamo la función

function createPokemonCard(pokemon) {
  const pokemonElement = document.createElement("div"); // de esta forma creo un elemento div en el html que corresponde a cada pokemon
  pokemonElement.classList.add("pokemon"); //agrega una clase a ese elemento creado para poder darle estilos

  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(" / "); // En el arrray type, le paso como argumento typeInfo para que sea el psudonimo del types y así no repertir. De esta forma agrego todos los que haya más, el método join para unir
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //transforma la primera letra en mayuscula y muestra el resto en min

  const pokeHTML = `
    <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
    </div>
    <div class="info">
      <span class="number">#${pokemon.id}</span>
      <h3 class="name">${name}</h3>
      <p class="type">Type: <span>${types}</span></p>
    </div>`;

  pokemonElement.innerHTML = pokeHTML; //se enlaza a html

  poke_container.appendChild(pokemonElement);
} //3.Hago los datos visibles en el documento HTML
