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

For the UML graph, the client will send a request to fetch the data at receive.js, when it successful, it will go to the service.py, which it contains all the libraries to calculate the value form simpleData.csv. and it will return the result and send it back to the client.
<img width="781" alt="Screenshot 2023-08-11 at 8 47 52 PM" src="https://github.com/lokhunliao/cs361/assets/35357272/03db3285-1fb2-499a-b67b-c8ad0956c024">

