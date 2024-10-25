const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  return res.status(200).json({
    message: 'This is new feature change, a new route for products'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
