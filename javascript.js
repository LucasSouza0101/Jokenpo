const result = document.querySelector('.result')

const nicoSpeaks = document.querySelector('.nico-dialogue')

const humanScore = document.querySelector("#humanScore")

const botScore = document.querySelector("#botScore")

const buttons = document.querySelector('button')

const showResult = document.querySelector('.show-plays')

let humanScoreNumber = 0

let botScoreNumber = 0

const myPlay = (MyChoice) => {

    gameResult(MyChoice, nicoPlay())

}

const nicoPlay = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomChoice = Math.floor(Math.random() * 3)

    return choices[randomChoice]
}

const gameResult = (me, Nico) => {

    showResult.innerHTML = `${' Nico chooses: ' + Nico + '!'} `




    if (me === 'paper' && Nico === 'rock' || me === 'rock' && Nico === 'scissors' || me === 'scissors' && Nico === 'paper') {
        result.style.color = "rgb(47, 173, 47)"
        result.innerHTML = "You Win!"
        nicoSpeaks.style.color = "rgb(54, 54, 214)"
        nicoSpeaks.innerHTML = `Oh NO.. not again ..`
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

    } else if (me === 'paper' && Nico === 'scissors' || me === 'rock' && Nico === 'paper' || me === 'scissors' && Nico === 'rock') {
        result.style.color = "rgb(54, 54, 214)";
        result.innerHTML = "Nico Wins"
        nicoSpeaks.style.color = "rgb(54, 54, 214)"
        nicoSpeaks.innerHTML = `Sweet, Sweet Victory! &#x1F917;`
        botScoreNumber++
        botScore.innerHTML = botScoreNumber
    }
    else {
        result.style.color = "#f06616";
        result.innerHTML = "Draw"
        nicoSpeaks.style.color = "rgb(54, 54, 214)"
        nicoSpeaks.innerHTML = `&#x1F914`
    }
}
