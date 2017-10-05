// @flow

import redis from 'redis'
import type { Env } from './env'

export default function (env: Env) {
  const client = redis.createClient(
    env.REDIS_PORT,
    env.REDIS_HOST
  )

  client.on('error', (err: Error) => console.error('[redis] error', err))

  return client
}
