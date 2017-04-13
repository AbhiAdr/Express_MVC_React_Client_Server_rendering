

// Date     : 12 Aug 2016
// Author   : Abhi
// Purpose  : db.js is file whr we cr8 mysql connetion pool with default 10 connetion with mysql db 

var mysql = require('mysql')

var PRODUCTION_DB = 'HCS', TEST_DB = 'test'

exports.MODE_TEST = 'dev'

exports.MODE_PRODUCTION = 'pro'

var state = {
  pool: null,
  mode: null,
}

var con = null

exports.connect = function(mode, done) {
  
  con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  })

  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  })

  state.mode = mode
  done()
}

exports.get = function() {
  return state.pool
}

exports.make = function() {
  return con
}