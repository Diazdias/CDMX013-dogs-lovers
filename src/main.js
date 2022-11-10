import dataDogs from './data.js'

const root = document.getElementById('root')

const dooGies = dataDogs.dogs
const filterDogs = document.getElementById('filter')

// plasmar las imágenes y trjetas
dooGies.forEach (dog => {
    const card = document.createElement('div')
    card.className = "card" 

    const images = document.createElement('img')
    images.src = dog.image

    const breed = document.createElement('h1')
    breed.textContent = dog.breed

    card.append(images, breed)
    root.append(card)
});

// console.log(acumulatorHTML);
// root.innerHTML=acumulatorHTML

const doggiesFiltered = (dogBreed) => {
    return dooGies.filter((dog)=>{
  return dog.breed == dogBreed
    })
  }
  
  
  filterDogs.addEventListener('change', (event) =>{
    root.innerHTML = ''
    doggiesFiltered(event.target.value, dooGies.breed).forEach (dog => {
    const card = document.createElement('div')
    card.className = "card" 
  
    const images = document.createElement('img')
    images.src = dog.image
  
    const breed = document.createElement('h1')
    breed.textContent = dog.breed
  
    card.append(images, breed)
    root.append(card)
  })
  if (event.target.value === 'All'){
    root.innerHTML = ''
    dooGies.forEach (dog => {
      const card = document.createElement('div')
      card.className = "card" 
  
      const images = document.createElement('img')
      images.src = dog.image
  
      const breed = document.createElement('h1')
      breed.textContent = dog.breed
  
      card.append(images, breed)
      root.append(card)
  }) 
  }
  })

