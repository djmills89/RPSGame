let userChoice = ''
let gameArea = document.querySelector('section')
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
    const cpuChoice = computerChoice().toLowerCase()
    const outcome = newCompareChoices(userChoice, cpuChoice)
    console.log(outcome, userChoice, cpuChoice)
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