// Function to get information from F1 API:
async function getResult(roundNumber, year){
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${roundNumber}/results.json`)
        return response.data
    } catch {
        return null
    }
}

async function getQualy(roundNumber, year){
    try {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${roundNumber}/qualifying.json`)
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
    // console.dir(result.MRData.RaceTable.Races[0].Results[0].Driver.givenName)

    // Get top level qualy and race result data:
    const result = await getResult(roundSelected.value, yearSelected.value)
    const qualy = await getQualy(roundSelected.value, yearSelected.value)

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

    winner.innerHTML = `<i>Winner</i>: ${p1name} ${p1surname} (${p1nationality}) - ${p1constructor} </br> Race time ${p1Time}`

    // P2 results

    const p2name = result.MRData.RaceTable.Races[0].Results[1].Driver.givenName
    const p2surname = result.MRData.RaceTable.Races[0].Results[1].Driver.familyName
    const p2constructor = result.MRData.RaceTable.Races[0].Results[1].Constructor.name
    const p2nationality = result.MRData.RaceTable.Races[0].Results[1].Driver.nationality

    second.innerHTML = `<i>Runner up</i>: ${p2name} ${p2surname} (${p2nationality}) - ${p2constructor}`

    // P3 results

    const p3name = result.MRData.RaceTable.Races[0].Results[2].Driver.givenName
    const p3surname = result.MRData.RaceTable.Races[0].Results[2].Driver.familyName
    const p3constructor = result.MRData.RaceTable.Races[0].Results[2].Constructor.name
    const p3nationality = result.MRData.RaceTable.Races[0].Results[2].Driver.nationality

    third.innerHTML = `<i>3rd place</i>: ${p3name} ${p3surname} (${p3nationality}) - ${p3constructor}`

    // P4

    const p4name = result.MRData.RaceTable.Races[0].Results[3].Driver.givenName
    const p4surname = result.MRData.RaceTable.Races[0].Results[3].Driver.familyName
    const p4constructor = result.MRData.RaceTable.Races[0].Results[3].Constructor.name
    const p4nationality = result.MRData.RaceTable.Races[0].Results[3].Driver.nationality

    fourth.innerHTML = `4th place: ${p4name} ${p4surname} (${p4nationality}) - ${p4constructor}`

    // P5

    const p5name = result.MRData.RaceTable.Races[0].Results[4].Driver.givenName
    const p5surname = result.MRData.RaceTable.Races[0].Results[4].Driver.familyName
    const p5constructor = result.MRData.RaceTable.Races[0].Results[4].Constructor.name
    const p5nationality = result.MRData.RaceTable.Races[0].Results[4].Driver.nationality

    fifth.innerHTML = `5th place: ${p5name} ${p5surname} (${p5nationality}) - ${p5constructor}`

    // P6
    const p6name = result.MRData.RaceTable.Races[0].Results[5].Driver.givenName
    const p6surname = result.MRData.RaceTable.Races[0].Results[5].Driver.familyName
    const p6constructor = result.MRData.RaceTable.Races[0].Results[5].Constructor.name
    const p6nationality = result.MRData.RaceTable.Races[0].Results[5].Driver.nationality

    sixth.innerHTML = `6th place: ${p6name} ${p6surname} (${p6nationality}) - ${p6constructor}`     

    // P7
    const p7name = result.MRData.RaceTable.Races[0].Results[6].Driver.givenName
    const p7surname = result.MRData.RaceTable.Races[0].Results[6].Driver.familyName
    const p7constructor = result.MRData.RaceTable.Races[0].Results[6].Constructor.name
    const p7nationality = result.MRData.RaceTable.Races[0].Results[6].Driver.nationality

    seventh.innerHTML = `7th place: ${p7name} ${p7surname} (${p7nationality}) - ${p7constructor}`

    // P8
    const p8name = result.MRData.RaceTable.Races[0].Results[7].Driver.givenName
    const p8surname = result.MRData.RaceTable.Races[0].Results[7].Driver.familyName
    const p8constructor = result.MRData.RaceTable.Races[0].Results[7].Constructor.name
    const p8nationality = result.MRData.RaceTable.Races[0].Results[7].Driver.nationality

    eigth.innerHTML = `8th place: ${p8name} ${p8surname} (${p8nationality}) - ${p8constructor}`

    // P9
    const p9name = result.MRData.RaceTable.Races[0].Results[8].Driver.givenName
    const p9surname = result.MRData.RaceTable.Races[0].Results[8].Driver.familyName
    const p9constructor = result.MRData.RaceTable.Races[0].Results[8].Constructor.name
    const p9nationality = result.MRData.RaceTable.Races[0].Results[8].Driver.nationality

    ninth.innerHTML = `9th place: ${p9name} ${p9surname} (${p9nationality}) - ${p9constructor}`

    // P10
    const p10name = result.MRData.RaceTable.Races[0].Results[9].Driver.givenName
    const p10surname = result.MRData.RaceTable.Races[0].Results[9].Driver.familyName
    const p10constructor = result.MRData.RaceTable.Races[0].Results[9].Constructor.name
    const p10nationality = result.MRData.RaceTable.Races[0].Results[9].Driver.nationality

    tenth.innerHTML = `10th place: ${p10name} ${p10surname} (${p10nationality}) - ${p10constructor}`

    // Pole Position

    const poleDriverName = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.givenName
    const poleDriverSurname = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.familyName 
    const poleDriverNationalty = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.nationality 
    const poleDriverTeam = qualy.MRData.RaceTable.Races[0].QualifyingResults[0].Constructor.name

    pole.innerHTML = `Pole position: ${poleDriverName} ${poleDriverSurname} (${poleDriverNationalty}) - ${poleDriverTeam} `
    // console.log(qualy)
})
