import audioPokedex from "./effectPokedex.js"
import pokemonAudio from "./audio.js"


const form = document.querySelector('.form')
const inputPesquisar = document.querySelector('.inputPesquisar')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonName = document.querySelector('.pokemonName')
const pokemonImage = document.querySelector('.pokemonImage')
const pokemonTipo = document.querySelector('.inputTipo')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const pokemon = inputPesquisar.value
    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await pokeApi.json()
    const pokemonType = data.types
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    const pokeType = (value) => {
        for (let i = 0; i < value.length; i++) {
            const element = value[i].type.name;
            return element
        }
    }
    console.log(pokeType(pokemonType))
    const teste = pokeType(pokemonType)
    pokemonTipo.innerHTML = teste
    imgFunc(data)
    pokemonAudio(pokemon)
    /* audioPokedex() */

})

const imgFunc = (dados) => {
    const pokemonId = dados.id
    const requestImg = new Request(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`)
    fetch(requestImg)
        .then((response) => response.blob())
        .then((pBlob) => {
            const objectURL = URL.createObjectURL(pBlob)
            pokemonImage.src = objectURL
        })

}

