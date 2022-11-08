const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/mini_projectZettacamp';
mongoose.connect(dbURI, {useNewUrlParser:true})
// connect to database
const db = mongoose.connection
// if error
db.on("error", (err) => {
  console.error(`err: ${err}`)
})// if connected
db.on('connected', (err, res) => {
  console.log('Connected to database')
})