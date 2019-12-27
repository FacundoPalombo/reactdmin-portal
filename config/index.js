require('dotenv').config()

const { NODE_ENV, PORT } = process.env

const config = {
  env: NODE_ENV,
  port: PORT,
  isDev: NODE_ENV === 'development',
  isProd: NODE_ENV === 'production'
}

module.exports = { config }
