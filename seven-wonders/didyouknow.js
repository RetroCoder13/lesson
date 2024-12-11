function openDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = `calc(100% - ${textElement.offsetWidth}px)`
}

function closeDialogue(element){
    let textElement = element.children[0]
    textElement.style.left = 'calc(100% - 25px)'
}

facts = [
    "The Great Pyramid of Giza was constructed in c.2600BC",
    "The Great Pyramid of Giza was constructed out of limestone",
    "The Great Pyramid of Giza is 146.6m tall",
    "The Great Pyramid of Giza is 230.33m wide",
    "The Great Pyramid of Giza has a volume of 2.6 million m^3",
    "The Great Wall of China was constructed in the 7th Century BC",
    "The Great Wall of China was constructed out of stone and bricks",
    "The Great Wall of China is 5m tall",
    "The Great Wall of China is 21,196.18 km long",
    "Petra was constructed in the 5th Century BC",
    "Petra was constructed out of bedrock and sandstone",
    "Petra sits 810m above sea level",
    "Petra has an area of 264 km^2",
    "The Colosseum was constructed in 70 AD",
    "The Colosseum was constructed out of limestone and concrete",
    "The Colosseum is 48m tall",
    "The Colosseum holds 50,000 people",
    "Chichén Itzá was constructed in 600 AD",
    "Chichén Itzá was constructed out of stone",
    "Chichén Itzá is 27m tall",
    "Machu Picchu was constructed in c.1450 BC",
    "Machu Picchu was constructed out of andesite",
    "Machu Picchu sits 2430m above sea level",
    "Machu Picchu has a length of 32,000 hectares",
    "The Taj Mahal was constructed in 1631",
    "The Taj Mahal was constructed out of white marble",
    "The Taj Mahal has a height of 73m",
    "The Taj Mahal has an area of 17 hectares",
    "Christ the Redeemer was constructed in 1922",
    "Christ the Redeemer was constructed out of reinforced concrete and soapstone",
    "Christ the Redeemer is 30m tall",
    "Christ the Redeemer is 28m wide"
]

window.onload = function(){
    let textElement = document.querySelector('#did-you-know #text p')
    textElement.innerHTML = facts[Math.round(Math.random()*facts.length-1)]
}