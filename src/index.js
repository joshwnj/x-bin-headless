const bodyParser = require('body-parser')
const express = require('express')
const getEnv = require('./env')

const env = getEnv(process.env)

// app setup
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(env.SERVER_PORT)
console.log('Ready on http://127.0.0.1:%d', env.SERVER_PORT)
