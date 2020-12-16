const express = require('express')
const app = express()
const players=require("./players.json")

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/players',(req,res)=>{
  res.send(players);
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
