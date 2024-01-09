// import modules 

import express from "express"

// create express app

const app = express()

//configure the app (app.set)

//mount middleware (app.use)

//mount routes

app.get('/', function(req, res) {
  res.send('')
})

//tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('listening on port 3000')
})



