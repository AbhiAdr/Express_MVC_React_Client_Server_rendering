
// Date     : 12 Aug 2016
// Author 	: Abhi
// Purpose	: express try for react app with es5 & es6 
// Addon 	: need to add jwt , live streaming and file upload 

var express = require('express') ,db = require('./config/db') ,con = require('./config/var'),app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
})); 

// include controllers
app.use(require(__dirname+'/controllers'))

// define static files

app.use(con.Server_burl+'/js', express.static(__dirname + '/public/js'))
app.use(con.Server_burl+'/css', express.static(__dirname + '/public/css'))
app.use(con.Server_burl+'/img', express.static(__dirname + '/public/img'))

// view part for react 

app.use(con.Server_burl+'/views', express.static(__dirname + '/ReactComponent'))

// define templating engin

app.set('view engine', 'ejs')

// make connction and init the App
db.connect(db.MODE_PRODUCTION, function(err) {
  if(err){
	    console.log('Unable to connect to MySQL.')
	    process.exit(1)
  }else{
    app.listen(8000, function() {
	    console.log('Listening on port 8000...')
    })
  }
})

//http://www.generatedata.com/