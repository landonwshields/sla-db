const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const queries = require('./db/queries');
const methodOverride = require('method-override');
var cors = require('cors')
var routes = require('./routes')

// app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))
app.use(cors())
app.use('/api', routes)


app.listen(port, (req, res) => {
  console.log(port, 'listening here')
})
