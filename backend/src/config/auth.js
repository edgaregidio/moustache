require('dotenv/config');

module.exports = {
  secret: process.env.SECRET_AUT,
  expiresIn: '1d'
}