let userChoice = ''
let state = 'start'
let gameArea = document.querySelector('.game-area-waiting')
const userOptions = gameArea.querySelectorAll('button')

const rules = {
    rock: {
        beats: {
            scissors: 'crushes',
            lizard: 'crushes'
        }
    },
    paper: {
        beats: {
            rock: 'covers',
            spock: 'disproves'
        }
    },
    scissors: {
        beats: {
            paper: 'cuts',
            lizard: 'decapitates'
        }
    },
    lizard: {
        beats: {
            paper: 'eats',
            spock: 'poisons'
        }
    },
    spock: {
        beats: {
            rock: 'vaporizes',
            scissors: 'smashes'
        }
    }
}

userOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    userChoice = e.currentTarget.value.toLowerCase()
    state = 'playing'
    const cpuChoice = computerChoice().toLowerCase()
    const outcome = newCompareChoices(userChoice, cpuChoice)
    console.log(outcome, userChoice, cpuChoice, state)
  })
})

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 10)
  if (randomNumber <= 1) return 'Rock' 
  else if (randomNumber <= 3) return 'Paper' 
  else if (randomNumber <= 5) return 'Scissors'
  else if (randomNumber <= 7) return 'Lizard'
  else return 'Spock'
}

function newCompareChoices(userChoices, enemyChoices) {
  if (userChoices === enemyChoices) return 'No One Wins!'
  if (rules[userChoice].beats[enemyChoices]) {
    const verb = rules[userChoice].beats[enemyChoices]
    return `Player Wins! ${capitalize(userChoice)} ${verb} ${capitalize(enemyChoices)}!`
  } 
  else {
    const verb = rules[enemyChoices].beats[userChoice]
    return `Computer Wins! ${capitalize(enemyChoices)} ${verb} ${capitalize(userChoice)}!`
  }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//When a player makes a choice we need to switch to the play state
//The first step is to register the player's choice(already doing this logically), and change the ui
//The second step is to have the opponent make their choice (also already doing)
//Third we want it to feel like the opponent is thinking, so set some short delay
//Fourth display the choice and display who won
//Fifth, if the user won, update the score.
//Sixth, display the play again state
//Seventh, if play again is clicked, we start back at the og ui
//Optional functionality: player stats stored in local storage
//Stats would be saved score, the games that won, total times a certain option was chosen
//Show user biases and which games they won the most with.