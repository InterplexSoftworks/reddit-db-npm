exports.NoSlash = function() {
    const dbmanager = require('./file.js')
    const NS =  dbmanager()
    return NS
        }
exports.WithSlash = function() {
    const dbmanager = require('./file.js')
    const WS =  `r/${dbmanager()}`
    return WS
        }
exports.Link = function() {
    const dbmanager = require('./file.js')
    const SubLink =  `https://www.reddit.com/r/${dbmanager()}`
    return SubLink
        }
