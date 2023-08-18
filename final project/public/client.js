// this statement sends a request to the server.
import { messagePlans } from "./modules/messages"
// See app.get("/modules/messages"... on how server.js responds.
// Note: when using import in client code, type="module" must be included when 
//  including client.js in the HTML. See line 5 of index.handlebars.


function handlePlans() {
    messagePlans()
    
    document.getElementById('clear-button').classList.remove('hidden')
}

function clearText() {
    document.getElementById('output-div').innerText = null

    document.getElementById('clear-button').classList.add('hidden')
}

document.getElementById("plans-button").addEventListener("click", handlePlans)
document.getElementById("clear-button").addEventListener("click", clearText)