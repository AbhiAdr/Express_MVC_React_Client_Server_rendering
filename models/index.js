// Author   : Abhi
// Purpose  : ./models/index.js is a index page model all db realted things need to be here

var db = require('../config/db')
var squel = require('squel');
squel.useFlavour('mysql');


exports.index = function (done)
{
	var query = squel.select().from('PatientDetails').limit('2').toParam();
	db.get().query(query.text, query.values, function (err, rows, fields) {			// preapare query 
	  if(err)
		{
			done(err)
		}else{
			done(rows)
		} 
	});
}


exports.viewMore = function (id,done)
{
		var query = squel.select().from('PatientDetails').where("Id > ?" , id).limit('2').toParam();

		db.get().query(query.text, query.values, function (err, rows, fields) {			// preapare query 
		  if(err)
			{
				done(err)
			}else{
				done(rows)
			}
		});
}