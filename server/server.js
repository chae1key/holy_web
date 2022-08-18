const express = require('express')
const app = express()
// const test = require('.//Router/test')
const path = require('path');
// const cors = require('cors')
// app.use(cors({ credentials: true, origin: "http://localhost:8080" }))

const port = 8080;
app.listen(port, function() {
  console.log(`listening on ${port}`)
})
// app.use('/', test);

app.use(express.static( path.join(__dirname, '../src')))

app.get('/',function(request, response){
    response.sendFile(path.join(__dirname, '../src/App.tsx'))
})
