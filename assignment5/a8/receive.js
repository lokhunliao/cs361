
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

receiveMess();