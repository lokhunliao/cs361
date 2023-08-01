# cs361

* Clear instructions for how to programmatically REQUEST data from the microservice you implemented. Include an example call.

For the microservice,  I am using HTTP to request the data on the client.py. on the function, there is a request url for the server. The dataFile will be the input file the user upload. For now I am using the local file(simpleDate) for testing, then use the Fetch method to request the data. 

function receiveMess(){
    const reqUrl = "http://127.0.0.1:5000/"

    // const dataFile = document.getElementById('file-input').files[0]

    fetch(reqUrl, {
        method: "POST",
        mode: "cors", 
        body: JSON.stringify({
            file: simpleData.csv,
            type: "edge-list",
            stats:['num-of-edges', 'num-of-vertices']
        }),
        header: {
            "Content-type" : "application/json"
        }
    }).then(function(res) {
        return res.json
    }).then(function(data) {
        console.log("Client received data")
        if(data.stdDev){
            console.log(data.stdDev)
        }
        if(data.numOfEdges){
            console.log(data.numOfEdges)
        }

    }).catch(err => {
        console.log(err);
    })
}


* Clear instructions for how to programmatically RECEIVE data from the microservice you implemented.

After the HTTP request is being sent. if the data successfully being sent  and receive the data. The server will respond a message at the console, then the service.py will start to calculate the column and the edges using the library, and return the graph to the user. 

* UML sequence diagram showing how requesting and receiving data works. Make it detailed enough that your partner (and your grader) will understand.
￼<img width="888" alt="Screenshot 2023-07-31 at 6 58 17 PM" src="https://github.com/lokhunliao/cs361/assets/35357272/47945578-b3dc-4403-99d9-6f2ab724181e">

