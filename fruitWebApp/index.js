
document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        const response = await fetch('http://localhost:3000/countries')

        if (!response.ok) {
            throw new Error(`http error status ${response.status}`)
        }
        const data = await response.json()

        const arrNames = data.map(fruit => fruit.name).join("\n").split("\n")
        const arrFamilies = data.map(fruit => fruit.family).join("\n").split("\n")
        var arrNutritions = []
        data.forEach(function (item) {
            arrNutritions.push(item.nutritions)
        })


        const arrFruit = []

        for (let i = 0; i < arrNames.length; i++) {
            arrFruit.push(new FruitClass(arrNames[i], arrFamilies[i], arrNutritions[i]))
        }

        arrFruit.forEach(url => {

            const cardContainer = document.createElement('div')
            cardContainer.classList.add('card')
            cardContainer.style.margin = '5%'

            const h3name = document.createElement('h2')
            h3name.innerText = url.name

            const h4family = document.createElement('h3')
            h4family.innerText = `Family: ${url.family}`

            const nutritionHeader = document.createElement('h3')
            nutritionHeader.innerText = 'Nutritions:'

            const h3nutritions = document.createElement('h4')
            h3nutritions.innerText = url.nutritions

            cardContainer.appendChild(h3name)
            cardContainer.appendChild(h4family)
            cardContainer.appendChild(nutritionHeader)
            cardContainer.appendChild(h3nutritions)

            document.getElementById('fruitContainer').appendChild(cardContainer)
        })
    } catch (error) {
        console.log('Fetch Error')
    }
})