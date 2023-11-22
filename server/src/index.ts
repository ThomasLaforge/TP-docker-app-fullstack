import "dotenv/config"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.get('/hello/:name', (req, res) => {
  res.send('Hello petit ' + req.params.name)
})

app.get('/server/time', (req, res) => {
  res.send({ time: Date.now() })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})