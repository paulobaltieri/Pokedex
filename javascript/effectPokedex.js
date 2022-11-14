const soundErro = () => {
    const audioErro = new Audio('./audios/errorSound/erroAudio.mp3')
    audioErro.play()
}

const introPokedex = () => {
    const audio1 = new Audio('./audios/intoPokedex.mp3')
    audio1.play()
}


export default { introPokedex, soundErro }