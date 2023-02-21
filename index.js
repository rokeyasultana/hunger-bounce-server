const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello From Hunger Bounce!')
})

app.listen(port, () => {
  console.log(`Hunger Bounce listening on port ${port}`)
})