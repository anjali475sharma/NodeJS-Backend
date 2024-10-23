const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// We have to tell express that this folder is accessible to all requests


// app.use(express.static('public'))
// app.use(__dirname+"/public")
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const user = [
    {
        username: "root",
        email: "root@example.com",
    },

    {
        username: "admin",
        email: "admin@example.com",
    }
    ,
    {
        username: "john",
        email: "john@example.com",
    }
]

app.set('view engine', 'ejs')

app.get('/a', (req, res) => {
    res.json({ user: 1, name: "john" })
})

app.post('/', (req, res) => {
    // console.log(req.body)
    console.log(req.body['full-name']);
    console.log(req.body.email);

    res.send("form data avigayo")
})

app.get('/', (req, res) => {
    // res.render(__dirname+"/public/"+"/index.html")
    res.render("index")
})

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + "/public/" + "/about.html")
    res.render("about")
})


app.listen('80', (req, res) => {
    console.log('listening on port 80')
})