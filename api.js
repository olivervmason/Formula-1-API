// Function to get information from F1 API:
async function getResult(roundNumber, year){
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/${roundNumber}/results`)
        return response.data
    } catch {
        return null
    }
}

// Set up html text bars and buttons"
const yearSelected = document.querySelector("#year-bar")
const roundSelected = document.querySelector("#event-bar")
const searchBtn = document.querySelector("#search-btn")

// Set variables for driver results:
const gpWinner = document.querySelector("#winner")

// Set up Event Listener to get information from API:

searchBtn.addEventListener("click", async () => {
    // console.log("search button clicked")
    // console.dir(yearSelected.value)
    // console.dir(roundSelected.value)

    // Get top level result data
    const result = await getResult(roundSelected.value, yearSelected.value)

    console.log(result)

    // Get result detail
    // const winner = result.
    // winner.innerHTML = `Race Winner: ${winner}`

    // const name = pokemon.name
    // pokeName.innerHTML = `Name : ${name}`

    // // console.log({name, image, hp, attack, defence, xattack, xdefence, speed})
    // console.log(pokemon)
})
