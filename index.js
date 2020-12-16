const express = require('express')
const app = express()
const players=require("./players.json")
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/players',(req,res)=>{
  res.send(players);
})

app.listen(port, () => {
  console.log(` server listening at http://localhost:${port}`)
})