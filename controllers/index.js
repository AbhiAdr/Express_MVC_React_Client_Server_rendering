
// Date     : 12 Aug 2016
// Author   : Abhi
// Purpose  : ./controllers/index.js is a index page controller it contains busniness logic (it calles models prepare data and pass it to view )


// Normal data pass like MVC 
require('babel-register')
var express = require('express'), router = express.Router(), index_m = require('../models/index'), con = require('../config/var')
var React = require('react') , ReactDOM = require('react-dom/server')

router.get(con.Server_burl,function (req,res)
{
	var components = require('../ReactComponent/Es5.js')
	var HelloMessage = React.createFactory(components.HelloMessage)

	index_m.index(function (result) {
			// console.log(JSON.stringify(result))
			// result.forEach(function(val, index, err) {
			// 	console.log(val+"---"+index);
			// })
		res.render('indexEs5',{ 
				cdomain : con.Client_burl,
				serverComp : ReactDOM.renderToStaticMarkup(HelloMessage({ 		// props for server side rendering
										data: result ,
										tbl : 'Express React POC server side' 
									})),
				dataForJS : JSON.stringify(result),								// props for server client rendering
				tableName : 'Express React POC client side'
			})
	})
})

router.get(con.Server_burl+'Es6',function (req,res)
{
		var components = require('../ReactComponent/Es6.js')
		var HelloComponent = React.createFactory(components.HelloComponent)

		res.render('indexEs6',{ 
				cdomain : con.Client_burl,
				serverComp : ReactDOM.renderToStaticMarkup(HelloComponent()),
				tableName : 'Express React POC client side'
		})
})

// sample Api to collect data
router.post(con.Server_burl+'viewMore',function (req,res)
{
	var id = req.body.id;	
	index_m.viewMore( id ,function (result)
	{
		res.json(result)
	})
})

module.exports = router
