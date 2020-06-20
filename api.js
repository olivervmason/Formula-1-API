// Function to get information from F1 API:
async function getResult(roundNumber, year){
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/${roundNumber}/results.json`)
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
    // jsonResult = JSON.parse(result)

    console.dir(result.MRData.RaceTable.Races[0].Results[0].Driver.givenName)
    console.dir(result.MRData.RaceTable.Races[0].Results[0].Driver.familyName)
    // Get result detail
    const hostcountry = result.MRData.RaceTable.Races[0].Circuit.Location.country
    const venue = result.MRData.RaceTable.Races[0].Circuit.circuitName

    host.innerHTML = `Host country: ${hostcountry}`
    circuit.innerHTML = `Track name: ${venue}`

    // const winner = result.
    // winner.innerHTML = `Race Winner: ${winner}`

    const p1name = result.MRData.RaceTable.Races[0].Results[0].Driver.givenName
    const p1surname = result.MRData.RaceTable.Races[0].Results[0].Driver.familyName
    const p1constructor = result.MRData.RaceTable.Races[0].Results[0].Constructor.name
    const p1nationality = result.MRData.RaceTable.Races[0].Results[0].Driver.nationality

    winner.innerHTML = `Winner: ${p1name} ${p1surname} (${p1nationality}) - ${p1constructor}`
    
    // const name = pokemon.name
    // pokeName.innerHTML = `Name : ${name}`

    // // console.log({name, image, hp, attack, defence, xattack, xdefence, speed})
    // console.log(pokemon)
})
