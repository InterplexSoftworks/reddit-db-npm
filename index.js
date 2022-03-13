const dbmanager = require('./file.js')

const NS =  dbmanager()

const WS =  `r/${dbmanager()}`

const SubLink =  `https://www.reddit.com/r/${dbmanager()}`

exports.NoSlash = function() {
    return NS
        }
exports.WithSlash = function() {
    return WS
        }
exports.Link = function() {
    return SubLink
        }
