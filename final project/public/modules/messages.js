// this function sends a request to planservice
function messagePlans() {
    const reqURL = 'http://localhost:9000/'
    const selectTime = document.querySelector('#selectTime');
    const selectLevel =  document.querySelector('#selectLevel');

    fetch(reqURL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            level: selectLevel.value,
            time: selectTime.value
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log('CLIENT: received response')
        console.log(data.calories) // this is a number
        console.log(data.workouts) // this is a list of lists

        // generateExerciseEntry(data.workouts)
        document.getElementById('output-div').innerText = data.workouts
    })
}

function generateExerciseEntry(){

    var entryHTML = Handlebars.templates.exerciseEntry({
        workouts: workoutPlan
    })

    var parentElem = document.getElementById("output-div")

    parentElem.insertAdjacentHTML('beforeend', entryHTML)
}


export { messagePlans }