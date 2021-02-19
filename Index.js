const express = require('express')
const app = express()
const port = 3000
const host = "192.168.1.208";
const site = "http://192.168.1.208:3000/home"


app.get('/', (req, res) => {
  res.send(`Hii please route to ${site}`)
})

app.get('/home', (req, res) => {
    res.send('Hii Good Morning!! How may I help you?')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})



