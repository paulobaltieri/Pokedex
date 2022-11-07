const form = document.querySelector('.form')
const inputPesquisar = document.querySelector('.inputPesquisar')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonName = document.querySelector('.pokemonName')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const pokemon = inputPesquisar.value
    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await pokeApi.json()
    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    console.log(data.name)
    console.log(data.id)
})