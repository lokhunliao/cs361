var express = require("express")
var exphbs = require("express-handlebars")

var port = process.env. PORT || 8000;

var app = express()

app.engine('handlebars', exphbs.engine({
    defaultLayout: null
}))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get("/", function(req, res, next) {
    res.status(200).render("index")
})

app.get("/explore", function(req, res, next) {
    res.status(200).render("explore")
})

app.get("/help", function(req, res, next) {
    res.status(200).render("help")
})

app.get("/modules/messages", function(req, res, next) {
    res.status(200).sendFile(__dirname + "/public/modules/messages.js")
})

app.listen(port, function(err) {
    if (err) {
        throw err
    }

    console.log("== Server listening on port", port)
})