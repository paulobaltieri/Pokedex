const pokemonAudio = (nome) => {
    const audio = new Audio(`./audios/description/${nome}.mp3`)
    audio.play()
}

export default pokemonAudio