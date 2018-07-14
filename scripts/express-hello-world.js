// source: theptrk.github.io/scripts/express-hello-world.js
// download: `curl theptrk.github.io/scripts/express-hello-world.js > index.js`

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
