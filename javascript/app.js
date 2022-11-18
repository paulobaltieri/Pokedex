import introducao from "./effectPokedex.js"
import erro from "./effectPokedex.js"
import pokemonAudio from "./audio.js"


const form = document.querySelector('.form')
const inputPesquisar = document.querySelector('.inputPesquisar')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonName = document.querySelector('.pokemonName')
const pokemonImage = document.querySelector('.pokemonImage')
const pokemonTipo = document.querySelector('.inputTipo')

form.addEventListener('submit', async (event) => {
    try {
        event.preventDefault()
        const pokemon = inputPesquisar.value.toLowerCase()
        const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await pokeApi.json()
        const pokemonType = data.types
        console.log(pokemon)
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        const pokeType = (value) => {
            for (let i = 0; i < value.length; i++) {
                const element = value[i].type.name;
                return element
            }
        }
        const tipoPokemon = pokeType(pokemonType)
        pokemonTipo.innerHTML = tipoPokemon
        imgFunc(data)
        pokemonAudio(pokemon)
        const blockInput = () => {
            inputPesquisar.disabled = true
        }
        const unlockInput = () => {
            inputPesquisar.disabled = false

        }
        setTimeout(blockInput, 100)
        setTimeout(unlockInput, 15000)
    } catch (error) {
        alert('Pokemon não existe')
    }

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

