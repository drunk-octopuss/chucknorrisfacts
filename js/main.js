const generateChNFact = document.getElementById('button')

generateChNFact.addEventListener('click', fetchData)

async function fetchData() {
    try {
        const api_URL = "https://api.chucknorris.io/jokes/random"
        const response = await fetch (api_URL)
        const generatedChNFact = await response.json()
        console.log(generatedChNFact)

        document.getElementById('chn-facts').innerText = `${generatedChNFact.value}`

    } catch(error) {
        document.getElementById('chn-facts').innerHTML = "Oops! Something wen't wrong.Try again!"
        document.getElementById('error-text').innerHTML = "Couldn't retrieve any Chuck Norris facts"
    }
}

