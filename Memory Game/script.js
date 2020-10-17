document.addEventListener('DOMContentLoaded', () => {
  
  //Memories (cards)
  const cardArray = [
    {
      name: 'bball',
      img: 'images/BBall Blue card.png'
    },
    {
      name: 'figurine',
      img: 'images/Figurine Blue Card.gif'
    },
    {
      name: 'skateboard',
      img: 'images/Skateboard Blue Card.png'
    },
    {
      name: 'fishingrod',
      img: 'images/Fishing Rod Blue.gif'
    },
    {
      name: 'guitar',
      img: 'images/Guitar Blue card.png'
    },
    {
      name: 'pc',
      img: 'images/PC Blue card.gif'
    },
    {
      name: 'figurine',
      img: 'images/Figurine Red card.gif'
    },
    {
      name: 'pc',
      img: 'images/PC Red card.gif'
    },
    {
      name: 'skateboard',
      img: 'images/Skateboard Red Card.png'
    },
    {
      name: 'bball',
      img: 'images/BBall Red card.png'
    },
    {
      name: 'guitar',
      img: 'images/Guitar Red card.png'
    },
    {
      name: 'fishingrod',
      img: 'images/Fishing Rod Red.gif'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.board')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //Board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/Tile selected.gif')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //Checking for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/Tile selected.gif')
      cards[optionTwoId].setAttribute('src', 'images/Tile selected.gif')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/Tile 1.png')
      cards[optionTwoId].setAttribute('src', 'images/Tile 1.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/Tile selected.gif')
      cards[optionTwoId].setAttribute('src', 'images/Tile selected.gif')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //Flipping function
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})