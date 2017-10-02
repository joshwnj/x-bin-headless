// @flow

const path = require('path')

type Env = {
  SERVER_PORT: number
}

// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: path.join(__dirname, '..', 'env', 'app.env')})
}

// load env vars and perform any normalisation needed
module.exports = function getEnv (env: {}): Env {
  env = Object.assign({}, env || process.env)

  env.SERVER_PORT = parseInt(env.SERVER_PORT, 10)

  return env
}
