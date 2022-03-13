const pp = require('./reddits.json')

module.exports = function () {
    return pp[Math.floor(Math.random() * pp.length)]
  }