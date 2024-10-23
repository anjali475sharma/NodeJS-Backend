const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

app.get("/signup", (req, res) => {

    res.render('signup')
})

app.post('/signup', (req, res) => {
    const body = req.body
    console.log(body)
    user.push({ username: body['full-name'], email: body.email })
    res.send("User: " + body['full-name'])
})

app.get('/admin', (req, res) => {
    // res.send(user)
    res.render('admin', {userData: user})
})
app.listen('80', (req, res) => {
    console.log('listening on port 80')
})