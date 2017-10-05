// @flow

import path from 'path'

// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: path.join(__dirname, '..', 'env', 'app.env')})
}

export type Env = {
  SERVER_PORT: number,

  REDIS_PORT: number,
  REDIS_HOST: string
}

// load env vars and perform any normalisation needed
export default function getEnv (env: {}): Env {
  env = Object.assign({}, env || process.env)

  env.SERVER_PORT = parseInt(env.SERVER_PORT, 10)

  env.REDIS_PORT = parseInt(env.REDIS_PORT || '6379', 10)
  env.REDIS_HOST = env.REDIS_HOST || 'localhost'

  return env
}
