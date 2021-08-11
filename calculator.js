//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})

app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post("/bmi", (req, res) => {
    const height = parseFloat(req.body.height)
    const weight = parseFloat(req.body.weight)

    const bmi = weight / (height * height)
    res.send(`The BMI is ${bmi}`)
})

app.post("/", (req, res) => {
    // res.send("<h2>Thanks for posting</h2>")
    // console.log(req.body.num1)
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2
    res.send(`The result is ${result}`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})