const form = document.querySelector('.form')
const inputPesquisar = document.querySelector('.inputPesquisar')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonName = document.querySelector('.pokemonName')
const pokemonImage = document.querySelector('.pokemonImage')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const pokemon = inputPesquisar.value
    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await pokeApi.json()

    const pokemonId = data.id
    const requestImg = new Request(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`)
    fetch(requestImg)
        .then((response) => response.blob())
        .then((pBlob) => {
            const objectURL = URL.createObjectURL(pBlob)
            pokemonImage.src = objectURL
        })
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    console.log(data.name)
    console.log(data.id)
})