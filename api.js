// Function to get information from F1 API:
async function getResult(roundNumber, year){
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/${roundNumber}/results.json`)
        return response.data
    } catch {
        return null
    }
}

async function getQualy(roundNumber, year){
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/${roundNumber}/qualifying.json`)
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

    // Get top level qualy and race result data:
    const result = await getResult(roundSelected.value, yearSelected.value)
    const qualy = await getQualy(roundSelected.value, yearSelected.value)

    console.dir(result.MRData.RaceTable.Races[0].Results[0].Driver.givenName)
 
    // Get venue detail
    const hostcountry = result.MRData.RaceTable.Races[0].Circuit.Location.country
    const venue = result.MRData.RaceTable.Races[0].Circuit.circuitName
    const totallaps = result.MRData.RaceTable.Races[0].Results[0].laps

    host.innerHTML = `Host country: ${hostcountry}`
    circuit.innerHTML = `Track name: ${venue}`
    laps.innerHTML = `Race distance: ${totallaps} laps`

    // Get result details
    // P1 results
    const p1name = result.MRData.RaceTable.Races[0].Results[0].Driver.givenName
    const p1Time = result.MRData.RaceTable.Races[0].Results[0].Time.time
    const p1surname = result.MRData.RaceTable.Races[0].Results[0].Driver.familyName
    const p1constructor = result.MRData.RaceTable.Races[0].Results[0].Constructor.name
    const p1nationality = result.MRData.RaceTable.Races[0].Results[0].Driver.nationality

    winner.innerHTML = `Winner: ${p1name} ${p1surname} (${p1nationality}) - ${p1constructor} </br> Race time ${p1Time}`

    // P2 results

    const p2name = result.MRData.RaceTable.Races[0].Results[1].Driver.givenName
    const p2surname = result.MRData.RaceTable.Races[0].Results[1].Driver.familyName
    const p2constructor = result.MRData.RaceTable.Races[0].Results[1].Constructor.name
    const p2nationality = result.MRData.RaceTable.Races[0].Results[1].Driver.nationality

    second.innerHTML = `Runner up: ${p2name} ${p2surname} (${p2nationality}) - ${p2constructor}`

    // P3 results

    const p3name = result.MRData.RaceTable.Races[0].Results[2].Driver.givenName
    const p3surname = result.MRData.RaceTable.Races[0].Results[2].Driver.familyName
    const p3constructor = result.MRData.RaceTable.Races[0].Results[2].Constructor.name
    const p3nationality = result.MRData.RaceTable.Races[0].Results[2].Driver.nationality

    third.innerHTML = `Third place: ${p3name} ${p3surname} (${p3nationality}) - ${p3constructor}`

    // Other honours

    // const flap = 
    const poleDriverName = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.givenName
    const poleDriverSurname = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.familyName 
    const poleDriverNationalty = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.nationality 
    const poleDriverTeam = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Constructor.name

    pole.innerHTML = `Pole position: ${poleDriverName} ${poleDriverSurname} (${poleDriverNationalty}) - ${poleDriverTeam} `
})
