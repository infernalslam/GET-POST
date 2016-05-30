var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var data = []

// var setData = {
//   phone: '0858125006',
//   name: 'Kamonpob'
// }
// data.push(setData)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/data', function(req, res){
  res.send(data)
})

app.post('/data', function(req, res){
  // console.log(req.body)
  var setData = {
      phone: req.body.phone,
      name: req.body.name
  }
  data.push(setData)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
