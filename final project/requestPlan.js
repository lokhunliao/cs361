import fetch from "node-fetch";


function messagePlans() {
    const reqURL = 'http://localhost:8000/'

    fetch(reqURL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            // put your inputs here
            level: 'hard',
            time: '45'
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log('CLIENT: received response')
        console.log(data.calories)
        console.log(data.workouts)
    })
}

messagePlans()