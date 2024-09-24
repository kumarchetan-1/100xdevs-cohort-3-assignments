document.getElementById("pokemon-form").addEventListener("submit", (e)=>{
    e.preventDefault()

    const num = document.getElementById("num").value
    const category = document.getElementById("category").value

    const pokemonConta = document.getElementById("pokemon-container")
    pokemonConta.innerHTML = ""

    for (let i = 0; i < num; i++) {
        const pokemonId = parseInt(category) + i

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon=>{
            const pokemonCard = document.createElement("div")
            pokemonCard.classList.add("pokemonCard")
            console.log(pokemon)

            pokemonCard.innerHTML = `
            <h3> ${ pokemon.name }</h3>
            <img src="${pokemon.sprites.front_default}" alt ="${pokemon.name}">
            <p> ID: ${pokemon.id}</p>
            <p> Type ${pokemon.types[0].type.name}</p> 
            `

            pokemonConta.appendChild(pokemonCard)
        })
        .catch(error=> console.log("Error fetching pokemon data ", error));
    }
})