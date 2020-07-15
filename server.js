const express = require('express')
const path = require('path')
const PORT = 8080
const app = express()

app.use(express.static(path.join(__dirname, './app/public')))

require('./app/routing/htmlRoutes')(app)

app.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`)
})

