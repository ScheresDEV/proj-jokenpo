const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result  img')
const computerResult = document.querySelector('.computer-result  img')

const computerSrcImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']
/*
(R)0 rock- pedra
(p)1 paper- papel
(s)2 scissors- tesoura

pedra--ganha da tesoura, perde para papel
papel--ganha da pedra, perde para tesoura
tesoura--ganha do papel, perde para pedra
*/


const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você",

}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)



    container.classList.add('start')
    resultText.innerHTML = "..."

    userResult.src = computerResult.src = computerSrcImg[0]


    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = computerSrcImg[userIndex]


        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]



        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]
        



        resultText.innerHTML = userValue === computerValue ? 'Empate' : finalResult  + ' Ganhou'

    }, 2000)
}



optionImages.forEach((img) => {
    img.addEventListener("click", handleOptionClick)
})