import cors from 'cors'
import "dotenv/config"
import express from 'express'

const app = express()

app.use(cors())

const port = process.env.PORT || 1992

app.get('/hello/:name', (req, res) => {
  res.send('Hello petit ' + req.params.name)
})

app.get('/server/time', (req, res) => {
  res.json({ time: Date.now() })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})