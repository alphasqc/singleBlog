import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    message: 'success',
    code: 200,
    data: [
      ['200','200','200'],
      ['200','200','200'],
      ['200','200','200']
    ]
  })
})

app.get('/local', (req, res) => {
  res.send('Hello Local!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})