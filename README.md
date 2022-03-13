# Info on this package
This package contains a bunch of random subreddits that can be easily used in your projects.

(If you want the list of subreddits, go  [here](reddits.txt).)

How to install:
```js
npm i subreddit-db
```
Code examples:
```js
var Subs = require('subreddit-db')

console.log(Subs.NoSlash)
```
Output: memes (RandomSubReddit)
```js
var Subs = require('subreddit-db')

console.log(Subs.WithSlash)
```
Output: r/memes (r/RandomSubReddit)
```js
var Subs = require('subreddit-db')

console.log(Subs.Link)
```
Output: https://www.reddit.com/r/memes (https://www.reddit.com/r/RandomSubReddit)