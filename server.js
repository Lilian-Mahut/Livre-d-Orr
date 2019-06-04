let express = require('express')
let app = express()
let bodyParser = require ('body-parser')
let session = require('express-session')

// Moteur de template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'tatayoyo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))

// Routes
app.get('/', (request, response) => {
  if (request.session.error) {
    response.locals.error = request.session.error
    request.session.error = undefined
  }
  response.render('pages/index')
})

app.post('/', (request, response) => {
  if (request.body.message === undefined || request.body.message === '') {
    request.flash('error', "Vous n'avez pas posté de message :(")
    response.redirect('/')
  } else {
    
  }
})

app.listen(8080)