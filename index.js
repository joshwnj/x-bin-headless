const env = process.env.NODE_ENV
if (env === 'production') {
  require('./babeled')
} else {
  require('babel-register')
  require('./src')
}
