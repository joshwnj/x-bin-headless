import getEnv from './env'

const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const setupRedis = require('./setup-redis')

const env = getEnv(process.env)
const redisClient = setupRedis(env)

// app setup
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: env.SESSION_SECRET,
  store: new RedisStore({
    client: redisClient,
    logErrors: true
  })
}))

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(env.SERVER_PORT)
console.log('Ready on http://127.0.0.1:%d', env.SERVER_PORT)
