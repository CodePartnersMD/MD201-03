'use strict'

let heroes = []
let elImgContainer = document.getElementById('img-container')
let elHeroImages = document.getElementsByClassName('hero-image')

function Images (newTitle, path, id, description) {
  this.title = newTitle
  this.filePath = path
  this.clicked = 0
  this.shown = 0
  this._id = id
  this.alt = description
}

//instantiating new instances of our Images object constructor
let Thor = new Images('Thor', './assets/thor.jpg', 'thor', 'Image of the thunder god Thor')
let BlackPanther = new Images('Black Panther', './assets/black-panther.jpg', 'black_panther', 'image of Black Panther')
let Hulk = new Images('Hulk', './assets/hulk.jpg', 'hulk', 'image of hulk')
let Wolverine = new Images('Wolverine', './assets/wolverine.jpg', 'wolverine', 'image of wolverine')
let Thanos = new Images('Thanos', './assets/thanos.jpg', 'thanos', 'image of thanos')

heroes.push(Thor, BlackPanther, Hulk, Wolverine, Thanos)

let randomNumber = function() {
  return Math.floor(Math.random() * heroes.length)
}



let FirstImage
let SecondImage
let ThirdImage

let clickHandler = function(event) {
  if(FirstImage._id === event.target.id) {
    FirstImage.clicked++
  } else if(SecondImage._id === event.target.id) {
    SecondImage.clicked++
  } else {
    ThirdImage.clicked++
  }
  displayImages()
  displayChart()
}

let displayImages = function() {
  for(let i = 0; i < elHeroImages.length; i++) {
    let elImage = elHeroImages[i]
    let randomHero = heroes[randomNumber()]
    if(i === 0) {
      FirstImage = randomHero
    } else if(i === 1) {
      SecondImage = randomHero
    } else {
      ThirdImage = randomHero
    }
    elImage.src = randomHero.filePath
    elImage.setAttribute('id', randomHero._id)
    randomHero.shown++
    console.log(randomHero._id, elImage.id)
    elImage.addEventListener('click', clickHandler)
  }
}

displayImages()

// console.log(FirstImage)

// console.log(SecondImage)
// console.log(ThirdImage)




