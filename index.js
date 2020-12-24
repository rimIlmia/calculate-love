const express = require('express')
const app = express()
const players=require("./players.json")
const axios= require("axios")

app.get('/', (req, res) => {
  const instance = axios.create({
  baseURL: 'https://love-calculator.p.rapidapi.com/',
  timeout: 1000,
  headers: {	"x-rapidapi-key": "6623ad687emsh91ccccf1e3ca169p1fe1f6jsnde60d5634d90",
	"x-rapidapi-host": "love-calculator.p.rapidapi.com",
	"useQueryString": true}
});
  axios.get('getPercentage', {
    params: {
     	"fname": "John",
	"sname": "Alice"
    }
  })
  .then(function (response) {
    res.send("bonjour",response);
  })
  .catch(function (error) {
       res.send("bonjour erreur appel api");

  })
 
  
})
app.get('/players',(req,res)=>{
  res.send(players);
})
app.get('/test',(req,res)=>{
  res.json(players);
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
