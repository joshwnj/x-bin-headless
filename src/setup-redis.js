// @flow

const redis = require('redis')

module.exports = function (env) {
  const client = redis.createClient(
    env.REDIS_PORT,
    env.REDIS_HOST
  )

  client.on('error', (err: Error) => console.error('[redis] error', err))

  return client
}
